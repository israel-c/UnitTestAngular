import { Doctor } from "../model/Doctor";
import { DoctorOnline } from "./DoctorOnline";


describe('Doctor online', ()=>{
let doctor: Doctor;
let doctorOnline: DoctorOnline;
    beforeEach( ()=>{
 doctorOnline= new DoctorOnline();
  
});


it('Should return true if input is active',()=>{
  doctor= new Doctor('active');
const result = doctorOnline.isDoctorOnline(doctor);

expect(result).toBe(true);

});


it('Should return false when input is inactive',()=>{
  doctor= new Doctor('inactive');
const result= doctorOnline.isDoctorOnline(doctor);

expect(result).toBe(false);

 });


});