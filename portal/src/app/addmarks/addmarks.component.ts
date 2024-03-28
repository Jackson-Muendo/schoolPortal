import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../services/students.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addmarks',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addmarks.component.html',
  styleUrl: './addmarks.component.css'
})
export class AddmarksComponent {
  classes: string[] = ['Class 1', 'Class 2', 'Class 3']; // Example list of classes
  subjects: string[] = ['Mathematics', 'Science', 'English']; // Example list of subjects
  selectedClass: string;
  selectedSubject: string;
  students: any[] = [];
  constructor(public studentservice :StudentsService) {}
  onClassChange(): void {
    this.getStudentsByClassAndSubject();
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
