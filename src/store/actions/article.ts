import * as actionType from './actionTypes';
import Article from '../../article.model';
import axios from 'axios';
/**
 * Action to add fetched articles to article state
 * @function fetchArticlesSuccess
 * @param {Article[]} articles - Fetched articles from Firebase DB
 * @returns {object} - type and payload for the reducer
 */
export const fetchArticlesSuccess = ( articles: Article[] ) => {
    return {
        type: actionType.FETCH_ARTICLE_SUCCESS,
        payload: articles
    }
}
/**
 * Action to add catched error to article state
 * @function fetchArticlesFail
 * @param {string} error - Error from Firebase DB
 * @returns {object} - type and payload for the reducer
 */
export const fetchArticlesFail = ( error: string ) => {
    return {
        type: actionType.FETCH_ARTICLE_FAIL,
        payload: error
    }
}
/**
 * Return Redux Thunks function that initiates an axiox request and dispatches the response to fetchArticleSuccess action.
 * @function fetchArticles
 * @return {function} - Redux Thunk function
 *
 */
export const fetchArticles = () => (dispatch:any) => {
        return axios.get('https://fir-project-65e65.firebaseio.com/articles.json').then((res) => {
            dispatch( fetchArticlesSuccess(res.data) )
        }).catch(error => {
            dispatch(fetchArticlesFail(error.message))
        })
}