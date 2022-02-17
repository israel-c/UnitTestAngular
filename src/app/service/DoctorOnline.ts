import { Doctor } from "../model/Doctor";

 export class DoctorOnline{


 public isDoctorOnline(doctor:Doctor){
     if(doctor.status == 'active'){
      return true;
     }else{
       return false;
     }
    }
}