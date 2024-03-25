import { Component } from '@angular/core';
import { StudentsService  } from '../services/students.service';
import { Student } from '../models/student';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addstudents',
  standalone: true,
  imports: [FormsModule,RouterLink,],
  templateUrl: './addstudents.component.html',
  styleUrl: './addstudents.component.css'
})
export class AddstudentsComponent {
  student: Student = {
    firstName: '',
    lastName: '',
    age: '',
    grade: ''
  };

  constructor(private studentService: StudentsService) { }

  addStudent(): void {
    this.studentService.addStudent(this.student).subscribe(() => {
      console.log('Student added successfully!');
      // Reset form fields after adding student
      this.student = {
        firstName: '',
        lastName: '',
        age: '',
        grade: ''
      };
    });
  }
}