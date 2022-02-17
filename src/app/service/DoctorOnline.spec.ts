import { Doctor } from "../model/Doctor";
import { DoctorOnline } from "./DoctorOnline";


describe('Doctor online', ()=>{
let doctor: Doctor;
let doctorOnline: DoctorOnline;
    beforeEach( ()=>{
 doctorOnline= new DoctorOnline();
  doctor= new Doctor();
});


it('Should return true if input is active',()=>{
const result = doctorOnline.isDoctorOnline(doctor);
expect(result).toBe(true);
});



});