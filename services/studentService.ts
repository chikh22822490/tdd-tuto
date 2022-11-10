import { student } from "../entities/student";

export class studentService {
    static addNewStudent(arg0: string, arg1: number, arg2: string) {
        throw new Error("Method not implemented.");
    }

    constructor(){}

    addNewStudent(name: string, level: number, email: string): student{
        const newStudent = new student(name, level, email);
        return newStudent;
    }
}