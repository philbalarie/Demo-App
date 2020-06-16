import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ArticleDetail from '../../components/Article/ArticleDetail';
import { RootState } from '../../configureStore';
import Article from '../../article.model';
import { fetchArticles } from '../../store/actions/article';

const ArticleList: React.FC = () => {

    //@ts-ignore
    const articleList = useSelector((state: RootState) => state.article.articles)
    
    const dispatch = useDispatch();

    //@ts-ignore
    const fetchDatas = useCallback(() => dispatch(fetchArticles()), []);

    useEffect(() => {
        fetchDatas()
    }, [fetchDatas])


    const articles = articleList.map((article: Article )=>(
        <ArticleDetail key={article.id} title={article.title} content={article.content} />
    ));
    
    return (
        <div className="container">
        <h1>Liste d'articles</h1>
        {articles}
    </div>
    )
}

export default ArticleList;