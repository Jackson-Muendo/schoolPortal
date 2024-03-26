// student.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students: any = []
  private studentUpdated = new Subject<any>()
  private apiUrl = 'http://your-api-url.com/students'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }
  getstudentupdatedlistener(){
    return this.studentUpdated.asObservable()
  }
   
  // Add a student
  addStudent(firtsname:string,secondname:string,surname:string,dateofbirth:Date,
    parentfullname:string,contact:string){
    const student = {firstname:firtsname,secondname:secondname,surname:surname,
      dateofbirth:dateofbirth,parentfullname:parentfullname,contact:contact}
      this.students.push(student)
      this.studentUpdated.next([...this.students])
  }

  // Get all students
  getStudents() {
   return [...this.students]
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
