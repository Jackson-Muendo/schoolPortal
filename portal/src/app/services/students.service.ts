// student.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject} from 'rxjs';

import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  
  private students: any[] = [
    { name: 'John Doe', studentclass: 'Class 1', rollNumber: '001', marks: { Mathematics: null, Science: null, English: null } },
    { name: 'Jane Smith', studentclass: 'Class 2', rollNumber: '002', marks: { Mathematics: null, Science: null, English: null } },
    { name: 'Alice Johnson', studentclass: 'Class 1', rollNumber: '003', marks: { Mathematics: null, Science: null, English: null } },
    { name: 'Bob Brown', studentclass: 'Class 2', rollNumber: '004', marks: { Mathematics: null, Science: null, English: null } },
    { name: 'Charlie Davis', studentclass: 'Class 3', rollNumber: '005', marks: { Mathematics: null, Science: null, English: null } }
    // Add more students as needed
  ];
  private studentUpdated = new Subject<any>()
  private apiUrl = 'http://your-api-url.com/students'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }
  getstudentupdatedlistener(){
    return this.studentUpdated.asObservable()
  }
   
  // Add a student
  addStudent(name:string, studentclass:string,dateofbirth:Date,
    parentfullname:string,contact:string){
    const student = {name:name,studentclass:studentclass,
      dateofbirth:dateofbirth,parentfullname:parentfullname,contact:contact}
      this.students.push(student)
      this.studentUpdated.next([...this.students])
  }

  // Get all students
  getStudents() {
   return [...this.students]
  }

  getStudentsByClass(selectedClass: string): any[] {
    return this.students.filter(student => student.studentclass === selectedClass);
  }

  getStudentsByClassAndSubject(selectedClass: string, selectedSubject: string): any[] {
    return this.students.filter(student => student.studentclass === selectedClass && student.marks.hasOwnProperty(selectedSubject));
  }

  getAllClasses(): string[] {
    // Extract unique classes from the students array
    return [...new Set(this.students.map(student => student.studentclass))];
  }
  updateStudentsMarks(updatedStudents: any[]): void {
    updatedStudents.forEach(updatedStudent => {
      const index = this.students.findIndex(student => student.rollNumber === updatedStudent.rollNumber);
      if (index !== -1) {
        // Update marks for the student
        this.students[index].marks = { ...updatedStudent.marks };
      }
    });
  }

  addMarks(selectedClass: string, selectedSubject: string, marks: number): void {
    const studentsToUpdate = this.students.filter(student => student.studentclass === selectedClass);
    studentsToUpdate.forEach(student => {
      student.marks[selectedSubject] = marks;
    });
  }
  // Get student by ID
  getStudent(id: number): Observable<Student | undefined> {
    // For demonstration purposes, you can replace this with an actual HTTP GET request
    return of(undefined);
  }

  // Update student
  updateStudent(student: Student): Observable<Student> {
    // For demonstration purposes, you can replace this with an actual HTTP PUT request
    return of(student);
  }

  // Delete student
  deleteStudent(id: number): Observable<void> {
    // For demonstration purposes, you can replace this with an actual HTTP DELETE request
    return of();
  }
}
