import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../services/students.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addmarks',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './addmarks.component.html',
  styleUrl: './addmarks.component.css'
})
export class AddmarksComponent implements OnInit{
  classes: string[] = ['Grade 1', 'Grade 2', 'Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8']; // Example list of classes
  subjects: string[] = ['Mathematics','Kiswahili', 'Science', 'English','Intergrated','Religious','Social','PreTechnical','Agriculture','Creative']; // Example list of subjects
  selectedClass: string;
  selectedSubject: string;
  students: any[] = [];
  constructor(public studentservice :StudentsService) {}
  onClassChange(): void {
    this.getStudentsByClassAndSubject();

  }

  ngOnInit(){
    this.getstudents()
  }

  onSubjectChange(): void {
    this.getStudentsByClassAndSubject();
  }
  getStudentsByClassAndSubject(): void {
    
    if (this.selectedClass && this.selectedSubject) {
      this.students = this.studentservice.getStudentsByClassAndSubject(this.selectedClass, this.selectedSubject);
      
    } else {
      this.students = [];
    }
  }
getstudents(){
  this.students = this.studentservice.getStudents()
  console.log(this.students)
}
  addMarks(): void {
    this.studentservice.updateStudentsMarks(this.students);
    // Optionally, you can reset the form fields here
    this.selectedClass = '';
    this.selectedSubject = '';
  }

  onMarksChange(student: any): void {
    // You can perform any specific action when marks change for a student
    console.log(student.marks[this.selectedSubject]);
  }

}
