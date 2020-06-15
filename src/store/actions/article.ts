import * as actionType from './actionTypes';
import Article from '../../article.model';
import axios from '../../axios';

export const fetchArticlesSuccess = ( articles: Article[] ) => {
    return {
        type: actionType.FETCH_ARTICLE_SUCCESS,
        payload: articles
    }
}

export const fetchArticlesFail = ( error: string ) => {
    return {
        type: actionType.FETCH_ARTICLE_FAIL,
        payload: error
    }
}

export const fetchArticles = () => (dispatch:any) => {
        axios.get('/articles.json').then((res) => {
            dispatch( fetchArticlesSuccess(res.data) )
        }).catch(error => {
            dispatch(fetchArticlesFail(error.message))
        })
}


export const addArticle = ( article:Article ) => {
    return {
        type: actionType.ADD_ARTICLE,
        payload: article
    }
}