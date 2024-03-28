import { Component } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-transcripts',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './transcripts.component.html',
  styleUrl: './transcripts.component.css'
})
export class TranscriptsComponent {
  classes: string[] = ['Class 1', 'Class 2', 'Class 3'];
  selectedClass: string;
  students: any[] = [];
  selectedStudent: any;

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.classes = this.studentService.getAllClasses();
  }

  onClassChange(): void {
    if (this.selectedClass) {
      this.students = this.studentService.getStudentsByClass(this.selectedClass);
    }
  }
 
  downloadPDF(): void {
    const content: HTMLElement = document.getElementById('transcriptContent');
    html2canvas(content).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf.jsPDF();
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`Class_Transcript_${this.selectedClass}.pdf`);
    });
  }

  
  downloadWholeResults(): void {
    if (this.selectedClass) {
      let content = '';
      this.students.forEach(student => {
        content += `Name: ${student.name}, Roll Number: ${student.rollNumber}, Marks: ${JSON.stringify(student.marks)}\n\n`;
      });
      const pdf = new jspdf.jsPDF();
      pdf.text(content, 10, 10);
      pdf.save(`Whole_Results_${this.selectedClass}.pdf`);
    }
  }
 
 downloadStudentTranscript(student: any): void {
      this.selectedStudent = student;
      const content: HTMLElement = document.getElementById('studentTranscriptContent');
      html2canvas(content).then(canvas => {
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF();
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${this.selectedStudent.name}_Transcript.pdf`);
      });
    }
 
  private downloadFile(content: string, filename: string): void {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  calculateGrade(marks: number): string {
    // Define your grading system here
    // This is just an example, you can adjust the grading criteria as needed
    if (marks >= 90) {
      return 'A+';
    } else if (marks >= 80) {
      return 'A';
    } else if (marks >= 70) {
      return 'B';
    } else if (marks >= 60) {
      return 'C';
    } else if (marks >= 50) {
      return 'D';
    } else {
      return 'F';
    }
  }

}