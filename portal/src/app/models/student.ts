// student.model.ts
export interface Student {
    id?: number; // Optional property for ID, as it might not exist until it's assigned by the backend
    firstName: string;
    secondName:string;
    lastName: string;
    surName : string;
    parentsfullname: string;
    contact: string;
  }
  