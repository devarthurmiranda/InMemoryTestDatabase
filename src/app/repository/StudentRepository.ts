import { Student } from "../../core/entities/Student";

export interface StudentRepository{
    findById(id: string): Promise<Student | null>;
}