import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { DisplayStudentsComponent } from './components/display-students/display-students.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    DisplayStudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
