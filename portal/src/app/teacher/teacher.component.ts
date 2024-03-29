import { Component } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { Teacher } from '../models/teacher';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
  teachers: Teacher[] = [];
  teacherForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    this.teachers = this.teacherService.getAllTeachers();
    this.initForm();
  }

  initForm(): void {
    this.teacherForm = this.fb.group({
      name: ['', Validators.required],
      subject1: ['', Validators.required],
      subject2: ['', Validators.required]
    });
  }
  deleteTeacher(teacherId: number): void {
    const confirmed = confirm('Are you sure you want to delete this teacher?');
    if (confirmed) {
      this.teacherService.deleteTeacher(teacherId);
      this.teachers = this.teachers.filter(teacher => teacher.id !== teacherId);
    }
  }

  editTeacher(teacher: Teacher): void {
    // Implement logic to open a modal or navigate to a new route for editing
  }

  addTeacher(): void {
    if (this.teacherForm.valid) {
      const newTeacher: Teacher = {
        id: this.teachers.length + 1,
        name: this.teacherForm.value.name,
        subjects: [this.teacherForm.value.subject1, this.teacherForm.value.subject2]
      };
      this.teacherService.addTeacher(newTeacher);
      this.teachers.push(newTeacher);
      this.teacherForm.reset();
    } else {
      // Mark form fields as touched to display validation errors
      this.teacherForm.markAllAsTouched();
    }
  }
}
