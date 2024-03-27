// student.model.ts
export interface Student {
    id?: number; // Optional property for ID, as it might not exist until it's assigned by the backend
    name: string;
    studentclass: string;
    dateofbirth:Date;
    parentsfullname: string;
    contact: string;
  }
  