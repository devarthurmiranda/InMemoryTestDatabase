import { ArticleSubmission } from "../../core/entities/ArticleSubmission";
import { ArticleRepository } from "../repository/ArticleRepository";
import { StudentRepository } from "../repository/StudentRepository";

type SubmitArticleRequest = {
    articleId: string;
    studentId: string;
}

export class SubmitArticle {
    constructor(
        private studentRepository: StudentRepository,
        private articleRepository: ArticleRepository,
    ) {}

    async execute({articleId, studentId}: SubmitArticleRequest) {
        const student = await this.studentRepository.findById(studentId);
        if (!student) {
            throw new Error("Student not found");
        }

        const article = await this.articleRepository.findById(articleId);
        if (!article) {
            throw new Error("Article not found");
        }

        const submission = ArticleSubmission.create({
            studentId,
            articleId,
        });
        
        return submission;
    }
}