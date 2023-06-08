import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateDeleteComponent implements OnInit {

  formValue!: FormGroup;



  allstudent: any;

  btnUpdateShow:boolean = false;

  btnSaveShow:boolean = true;


  constructor(private formBuilder:FormBuilder, private api:ApiserviceService ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      busname:[''],
      departure:[''],
      source:[''],
      destination:[''],
      fare:[''],
      coach:[''],
      seats:['']
    })
    this.AllStudent();
  }

  AllStudent(){
    this.api.getStudent().subscribe(res => {
      this.allstudent = res;
    })
  }


  DeleteStudent(data:any){
    this.api.deleteStudent(data.id).subscribe(res => {
      alert("Record Deleted");
      this.AllStudent();
    })

  }

  UpdateShowBtn()
  {
    this.btnUpdateShow = true;
    this.btnSaveShow = false;
  }
  SaveShowBtn()
  {
    this.btnUpdateShow = false;
    this.btnSaveShow = true;
  }



}
