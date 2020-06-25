import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ArticleDetail from '../../components/Article/ArticleDetail';
import { RootState } from '../../configureStore';
import Article from '../../article.model';
import { fetchArticles, addArticleSuccess } from '../../store/actions/article';

/**
* Container for listing all the articles fetchs from the database
* @component
* @returns {JSX.Element} - Return a list of all the fetched articles
*/
const ArticleList: React.FC = () => {
    
    //@ts-ignore
    const articleList: Article[] = useSelector((state: RootState) => state.article.articles)
    
    const dispatch = useDispatch();
    
    const fetchDatas = useCallback(() => dispatch(fetchArticles()), []);

    
    
    useEffect(() => { 
        
        fetchDatas();
        }, [fetchDatas])
        
        const articles = articleList.map(article => <ArticleDetail id={article.id} key={article.id} title={article.title} body={article.body} />)

        
        return (
            <div data-test="ArticleList" className="container">
            <h1>Liste d'articles</h1>
            {articles}
            </div>
            )
        }
        
        export default ArticleList;