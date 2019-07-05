import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../shared/models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public URL = 'http://localhost:3000/users';
  private data: Users[] = [];
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.URL);
  }

  adduser(usr: Users) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Users>(this.URL, usr, httpOptions);
  }

  removedata(data: Users) {
    console.log(data);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<Users>(this.URL + "/" + data.id, httpOptions);
  }

}
