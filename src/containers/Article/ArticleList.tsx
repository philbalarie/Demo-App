import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ArticleDetail from '../../components/Article/ArticleDetail';
import { RootState } from '../../configureStore';
import Article from '../../article.model';
import { fetchArticles } from '../../store/actions/article';
import error from '../../error.model';

/**
* Container for listing all the articles fetchs from the database
* @component
* @returns {JSX.Element} - Return a list of all the fetched articles
*/
const ArticleList: React.FC = () => {
    
    //@ts-ignore
    const articleList: Article[] = useSelector((state: RootState) => state.article.articles)
    
    //@ts-ignore
    const error: error = useSelector((state: RootState) => state.article.error) 
    
    const dispatch = useDispatch();
    
    const fetchDatas = useCallback(() => dispatch(fetchArticles()), []);
    
    let content: any = null;
    
    useEffect(() => {  fetchDatas(); }, [fetchDatas])
    
    if (articleList) {
        if (error) {
            content = (<p>{error}</p>);
        }
        else {
            content = articleList.map(article => <ArticleDetail id={article.id} key={article.id} title={article.title} body={article.body} />)
        }
    }
    
    
    return (
        <div data-test="ArticleList" className="container">
        <h1>Liste d'articles</h1>
        <div data-test="ArticleList-content">{content ? content : <p>Loading...</p>}</div>
        </div>
        )
    }
    
    export default ArticleList;