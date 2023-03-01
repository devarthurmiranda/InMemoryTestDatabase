import { Entity } from "../model/Entity";

type ArticleSubmissionProps = {
    articleId: string;
    studentId: string;
    submissionDate?: Date;
}

export class ArticleSubmission extends Entity<ArticleSubmissionProps> {
    private constructor(props: ArticleSubmissionProps, id?: string) {
        super(props, id);
    }
    public static create(props: ArticleSubmissionProps, id?: string) {
        const articleSubmission = new ArticleSubmission({
            ...props,
            submissionDate: props.submissionDate ?? new Date(),
        }, id);
        return articleSubmission;
    }
}