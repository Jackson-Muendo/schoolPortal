import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { table } from 'console';

@Component({
  selector: 'app-viewstudents',
  standalone: true,
  imports: [FormsModule,CommonModule,NgFor],
  templateUrl: './viewstudents.component.html',
  styleUrl: './viewstudents.component.css'
})
export class ViewstudentsComponent implements OnInit{
  students: any = []
  constructor(public studentservice:StudentsService) {}
  ngOnInit(): void {
    this.getstudents()
  }
  getstudents(){
    this.students = this.studentservice.getStudents()
    console.log(this.students)
  }
}
