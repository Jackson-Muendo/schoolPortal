import { Component } from '@angular/core';
import { StudentsService  } from '../services/students.service';
import { Student } from '../models/student';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addstudents',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './addstudents.component.html',
  styleUrl: './addstudents.component.css'
})
export class AddstudentsComponent {
  

  constructor(private studentService: StudentsService) { }

  addStudent(form : NgForm): void {
    this.studentService.addStudent(form.value.Name,form.value.nemis,form.value.admission,form.value.class,form.value.dateofbirth,form.value.parentfullnames,form.value.contact,)
      console.log('Student added successfully!');
      alert('Student added successfully!')
      console.log(form.value.firstName,form.value.dateofbirth)
      
      
  }
}