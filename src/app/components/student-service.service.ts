import { Injectable } from '@angular/core';
import { Students } from '../Mock-students';
import { Student } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private students:Student[] = []

  constructor() { }
  getStudents():Student[]{
    return this.students 
  }
  addStudent(name:string,fee:string,balance:string){
    const student ={name:"",fee:"",balance:""}
      student.name = name;
      student.fee = fee;
      student.balance = balance;
      this.students.push(student)
  }
  onEdit(students:Student){

  }
}
