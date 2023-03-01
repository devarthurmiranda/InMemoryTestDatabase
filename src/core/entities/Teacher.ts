import { Entity } from "../model/Entity";

type TeacherProps = {
    teacherName: string;
    teacherEmail: string;
}

export class Teacher extends Entity<TeacherProps> {
    private constructor(props: TeacherProps, id?: string) {
        super(props, id);
    }
    public static create(props: TeacherProps, id?: string): Teacher {
        return new Teacher(props, id);
    }
}