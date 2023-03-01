import { Entity } from "../model/Entity";

type ArticleProps = {
    articleTitle: string;
    articleContent: string;
}

export class Article extends Entity<ArticleProps> {
    private constructor(props: ArticleProps, id?: string) {
        super(props, id);
    }
    public static create(props: ArticleProps, id?: string): Article {
        if(props.articleTitle.length < 5){
            throw new Error("Article title must be at least 5 characters long");
        }
        if(props.articleContent.length < 10){
            throw new Error("Article content must be at least 10 characters long");
        }
        return new Article(props, id);
    }
}