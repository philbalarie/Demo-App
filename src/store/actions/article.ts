import * as actionType from './actionTypes';
import Article from '../../article.model';
import axios from 'axios';
import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';

 /**
 * Action to add fetched articles to article state
 * @function fetchArticlesSuccess
 * @param {Article[]} articles - Fetched articles from Firebase DB
 * @returns {object} - type and payload for the reducer
 */
export const fetchArticlesSuccess: ActionCreator<Action> = ( articles: Article[] ) => {
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
export const fetchArticlesFail: ActionCreator<Action> = ( error: string ) => {
    return {
        type: actionType.FETCH_ARTICLE_FAIL,
        payload: error
    }
}
 /**
* Return Redux Thunks function that initiates an axiox request and dispatches the response to fetchArticleSuccess action.
* @function fetchArticles
* @param {Dispatch} dispatch - function that accepts an action or an async action
 *@return {void}
 */

 //FIXME: Améliorer le typage de la fonction asynchrone avec thunk
export const fetchArticles: ActionCreator<ThunkAction<any, any, any, any>> = () => (dispatch: Dispatch) => {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        
        const filteredRes = res.data.slice(0, 4)

        dispatch( fetchArticlesSuccess(filteredRes) )

    }).catch(error => {
        dispatch(fetchArticlesFail(error.message))
    })
}

export const addArticleSuccess: ActionCreator<Action> = ( article: Article ) => {
    return {
        type: actionType.ADD_ARTICLE_SUCCESS,
        payload: article
    }
}

export const addArticleFail: ActionCreator<Action> = ( error: string ) => {
    return {
        type: actionType.ADD_ARTICLE_FAIL,
        payload: error
    }
}

export const addArticle: ActionCreator<ThunkAction<any, any, any, any>> = (article) => (dispatch: Dispatch) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', article).then(() => {

        dispatch( addArticleSuccess(article) )
    }).catch(error => {
        dispatch(addArticleFail(error.message))
    })
}