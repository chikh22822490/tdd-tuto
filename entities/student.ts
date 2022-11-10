import { department } from "./department";
import { specialities, speciality } from "./speciality";

export class student {
  id: string;
  name: string;
  level: number;
  email: string;
  department: department;
  speciality: speciality;

  constructor(
    name: string,
    level: number,
    email: string,
    specialityName: string,
    departmentName: string
  ) {
    if (!name || name.length < 1) {
      throw new Error("Student must have a name");
    }
    this.name = name;
    if (!level || level < 1 || level > 3) {
      throw new Error("Student must have a valid level ( between 1 and 3 )");
    }
    this.level = level;
    if (!email || email.length < 1) {
      throw new Error("Student must have an email address");
    }
    this.email = email;
    if (!specialityName || specialityName.length < 1) {
      throw new Error("Student must have a speciality");
    }
    this.speciality = new speciality(specialityName);
    this.department = new department(departmentName)
  }
}
