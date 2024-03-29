// teacher.service.ts

import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private teachers: Teacher[] = [];

  constructor() { }

  getAllTeachers(): Teacher[] {
    return [...this.teachers];
  }

  editTeacher(updatedTeacher: Teacher): void {
    const index = this.teachers.findIndex(teacher => teacher.id === updatedTeacher.id);
    if (index !== -1) {
      this.teachers[index] = updatedTeacher;
    }
  }

  deleteTeacher(teacherId: number): void {
    this.teachers = this.teachers.filter(teacher => teacher.id !== teacherId);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }
}
