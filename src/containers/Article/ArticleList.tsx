import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ArticleDetail from '../../components/Article/ArticleDetail';
import { RootState } from '../../index';
import Article from '../../article.model';

const ArticleList: React.FC = () => {
    
    const articleList = useSelector((state: RootState) => state.article.articles)

    const articles = articleList.map((article: Article )=>(
        <ArticleDetail title={article.title} content={article.content} />
    ));
    
    return (
        <div>
        <h1>Liste d'articles</h1>
        {articles}
    </div>
    )
}

export default ArticleList;