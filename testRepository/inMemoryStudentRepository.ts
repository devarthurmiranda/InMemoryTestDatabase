import { StudentRepository } from "../src/app/repository/StudentRepository";
import { Student } from "../src/core/entities/Student";

export class InMemoryStudentRepository implements StudentRepository {
    public students: Student[] = [];
    async findById(id: string): Promise<Student | null> {
        return this.students.find(student => student.id === id) || null;
    }
}