import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
     host2:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post(this.host2+"/login",data,{observe:'response'});
  }
}
