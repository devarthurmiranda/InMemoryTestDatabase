import { inMemoryArticleRepository } from '../../../testRepository/inMemoryArticleRepository';
import { InMemoryStudentRepository } from '../../../testRepository/inMemoryStudentRepository';
import { Article } from '../../core/entities/Article';
import { Student } from '../../core/entities/Student';
import { SubmitArticle } from '../actions/SubmitArticle';

describe('Submit Article to the application', () => {
    it('should submit an article', async () => {
        const studentRepository = new InMemoryStudentRepository();
        const student = Student.create({
            studentName: 'test_student_name',
            studentEmail: 'test_student_email',
        });
        studentRepository.students.push(student);

        const articleRepository = new inMemoryArticleRepository();
        const article = Article.create({
            articleTitle: 'test_article_title',
            articleContent: 'test_article_content',
        });
        articleRepository.articles.push(article);

        const submission = new SubmitArticle(studentRepository, articleRepository);
        
        const response = await submission.execute({
            articleId: article.id,
            studentId: student.id,
        });
        expect(response).toBeTruthy();
        });
    });