import { ArticleRepository } from "../src/app/repository/ArticleRepository";
import { Article } from "../src/core/entities/Article";

export class inMemoryArticleRepository implements ArticleRepository {
    public articles: Article[] = [];
    async findById(id: string): Promise<Article | null> {
        return this.articles.find(article => article.id === id) || null;
    }
}