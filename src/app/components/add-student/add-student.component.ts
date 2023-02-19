import { Component, Output , EventEmitter, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/interface';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent  {
  title:string = 'Student-management';
  
  @Output() sendDetails = new EventEmitter<{name:string,fee:string,balance:string}>
  constructor(private studentService:StudentServiceService){
  
  }

  addStudent(name:HTMLInputElement,fee:HTMLInputElement,balance:HTMLInputElement){
    // console.log('Student added');
    this.sendDetails.emit({name: name.value, fee: fee.value, balance: balance.value})
    console.log(name.value,fee.value, balance.value);
    this.studentService.addStudent(name.value,fee.value, balance.value)
  }
}
