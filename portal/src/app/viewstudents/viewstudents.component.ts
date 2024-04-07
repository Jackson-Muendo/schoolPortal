import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, LowerCasePipe, NgFor } from '@angular/common';
import { table } from 'console';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-viewstudents',
  standalone: true,
  imports: [FormsModule,CommonModule,NgFor,LowerCasePipe,RouterLink],
  templateUrl: './viewstudents.component.html',
  styleUrl: './viewstudents.component.css'
})
export class ViewstudentsComponent implements OnInit{
  students: any = []
  classes: string[] = ['Grade 1', 'Grade 2', 'Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8'];
  selectedClass: string;
   studentsub : Subscription
  constructor(public studentservice:StudentsService) {}
  ngOnInit(): void {
    this.getstudents()
  }
  getstudents(){
    this.students = this.studentservice.getStudents()
    this.studentservice.getStudents()
    this.studentsub = this.studentservice.getstudentupdatedlistener()
    .subscribe((students:any)=>
    {
      this.students = students;
    })
    console.log(this.students)
  }
  onClassChange(): void {
    this.getStudentsByClass(this.selectedClass);
  }
  getStudentsByClass(selectedClass: string): void {
    // Call student service to fetch students based on the selected class
    this.students = this.studentservice.getStudentsByClass(selectedClass);
  }
}
