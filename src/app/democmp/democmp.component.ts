import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { UsersService } from '../Services/users.service';
import { Users } from '../shared/models/users';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditService } from '@progress/kendo-angular-grid/dist/es2015/editing/edit.service';

@Component({
  selector: 'app-democmp',
  templateUrl: './democmp.component.html',
  styleUrls: ['./democmp.component.css']
})
export class DemocmpComponent implements OnInit {

  public usersData: Users[];
  public gridData: GridDataResult;
  private editedRowIndex: number;
  public formGroup: FormGroup;

  public state: State = {
    skip: 0,
    take: 10,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'Name', operator: 'contains', value: '' }]
    }
  };

  public dataStateChange(state: State): void {
    this.state = <DataStateChangeEvent>state;
    this.gridData = process(this.usersData, this.state);
  }

  constructor(private _userservice: UsersService) {
  }

  ngOnInit() {
    this._userservice.getAllUsers().subscribe(res => {
      this.usersData = res;
      this.dataStateChange(this.state);
    });
  }
  public addHandler({ sender }) {

    this.formGroup = new FormGroup({
      'Name': new FormControl('', Validators.required),
      'Address': new FormControl('', Validators.required),
      'Phno': new FormControl(null, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,9}')])),
      'Gender': new FormControl(),
      'Image': new FormControl()
    });
    this.dataStateChange(this.state);
    // console.log(this.formGroup.value);
    sender.addRow(this.formGroup);
  }
  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }
  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }

  public removeHandler({ dataItem }) {
    this._userservice.remove(dataItem);
  }
  public saveHandler({ sender, rowIndex, formGroup, isNew }) {
    const user: Users = formGroup.value;

    this._userservice.adduser(user);

    sender.closeRow(rowIndex);
  }
}
