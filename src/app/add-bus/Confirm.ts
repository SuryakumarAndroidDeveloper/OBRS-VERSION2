import { FormGroup } from '@angular/forms';
 export function Confirm(cn:string,mcn:string){

  return(formgroup:FormGroup)=>{
    const Source=formgroup.controls[cn];
    const Destination=formgroup.controls[mcn];

    if(Source.value!=Destination.value){
      Destination.setErrors({ConfirmValidator:true})

    }else{
      Destination.setErrors(null);
    }

  }

 }
