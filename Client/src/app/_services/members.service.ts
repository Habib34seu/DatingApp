import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmrnt } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
 baseUrl = environmrnt.apiUrl;
  constructor( private http: HttpClient) { }

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'user');
  }
  getMember(username: string){
    return this.http.get<Member>(this.baseUrl + 'user/' + username);
  }

  // getHttpOptions(){
  //   const userString = localStorage.getItem('user');
  //   if(!userString) return;
  //   const user = JSON.parse(userString);
  //   return {
  //     headers: new HttpHeaders({
  //       Authorization: 'Bearer ' + user.token
  //     })
  //   }
  // }
}
