import { Component } from '@angular/core';
import { Students } from 'src/app/Mock-students';
import { Student } from 'src/app/interface';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.css']
})
export class DisplayStudentsComponent {
  students:Student[] = []
  constructor(private studentService:StudentServiceService){
    this.students = this.studentService.getStudents();
  }
  onEdit(name:string){
    let currentStudent = this.students.find((s)=>{return s.name == name})
    console.log(currentStudent);
    
  }
}
