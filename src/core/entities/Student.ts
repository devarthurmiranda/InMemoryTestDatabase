import { Entity } from "../model/Entity";

type StudentProps = {
    studentName: string;
    studentEmail: string;
}

export class Student extends Entity<StudentProps> {
    private constructor(props: StudentProps, id?: string) {
        super(props, id);
    }
    public static create(props: StudentProps, id?: string): Student {
        return new Student(props, id);
    }
}