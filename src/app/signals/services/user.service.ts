import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  DataUser, User } from '../interfaces/user.interface';
import { Observable, map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {

  private http = inject(HttpClient);
  private url:string = 'https://reqres.in/api/users'

  getUserById(id:number):Observable<User>{
    return this.http.get<DataUser>(`${this.url}/${id}`).pipe(
      map((res)=>res.data),
      tap(console.log)
    )
  }

}
