import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }


    // Get Method For All Student
    getStudent()
    {
      return this._http.get<any>("http://localhost:3000/booking/").pipe(map((res:any)=> {
        return res
      }))
    }



  // Delete Method For Update Student
  deleteStudent(id:number)
  {
    return this._http.delete<any>("http://localhost:3000/booking/" + id).pipe(map((res:any)=> {
      return res
    }))
  }




}
