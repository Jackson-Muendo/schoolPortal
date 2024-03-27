import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, LowerCasePipe, NgFor } from '@angular/common';
import { table } from 'console';

@Component({
  selector: 'app-viewstudents',
  standalone: true,
  imports: [FormsModule,CommonModule,NgFor,LowerCasePipe],
  templateUrl: './viewstudents.component.html',
  styleUrl: './viewstudents.component.css'
})
export class ViewstudentsComponent implements OnInit{
  students: any = []
  classes: string[] = ['Class 1', 'Class 2', 'Class 3','Class 4'];
  selectedClass: string;
  constructor(public studentservice:StudentsService) {}
  ngOnInit(): void {
    this.getstudents()
  }
  getstudents(){
    this.students = this.studentservice.getStudents()
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
