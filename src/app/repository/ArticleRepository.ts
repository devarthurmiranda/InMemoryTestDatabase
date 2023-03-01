import { Article } from "../../core/entities/Article";

export interface ArticleRepository{
    findById(id: string): Promise<Article | null>;
}