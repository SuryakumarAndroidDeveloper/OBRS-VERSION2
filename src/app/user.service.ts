import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:any="http://localhost:3000/user";

constructor(private http:HttpClient) { }

addUser(body:any){
 return this.http.post(this.url,body);


}
retriveUser(){
  return this.http.get(this.url);
}
retriveoneUser(){
  return this.http.get(this.url);
}

deleteUser(id:any){
  return this.http.delete(this.url,id);
}

updateUser(id:any,data:any){
 return this.http.patch(this.url+"/"+id,data);
}

}
