import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { v4 as uuidv4 } from 'uuid';
import Article from '../../article.model';
import { ActionWithPayload } from '../../action.model';

//FIXME: valider que le typage du state est OK
interface ArticleState extends Object {
    articles?: Array<Article>,
    error?: string
}

type Error = string;

const initialState = {
    articles: [], 
    error: ''
}

/**
 * Reducer to add articles from the fetchArticle async action to the state if the status of request os 200. 
 * @function fetchArticlesSuccess
 * @param {ArticleState} state
 * @param {ActionWithPayload<Article>} action
 * @returns
 */

const fetchArticlesSuccess = (state: ArticleState, action: ActionWithPayload<Article>) => {
        //@ts-ignore
    return updateObject(state, { articles: action.payload })
}

/**
 * Reducer to add error message from the fetchArticle async action to the state if an error occur. 
 * @function fetchArticlesSuccess
 * @param {ArticleState} state
 * @param {ActionWithPayload<Article>} action
 * @returns
 */
const fetchArticleFail = (state: ArticleState, action: ActionWithPayload<Error>) => {
    //@ts-ignore
    const error = action.payload
    return updateObject(state, { error })
}

const addArticleSuccess = (state: ArticleState, action: ActionWithPayload<Article>) => {

    const articles: Article[] = state.articles!.concat(action.payload);

    return updateObject(state, articles)
}

const addArticleFail = (state: ArticleState, action: ActionWithPayload<Error>) => {
    const error = action.payload;
    return updateObject(state, { error });
}

/**
 * Reducer for the articles
 * @function reducer
 * @param {*} [state=initialState]
 * @param {ActionWithPayload<any>} action
 * @returns {function} - function to update immutable object or default state
 */
const reducer = (state = initialState, action: ActionWithPayload<any>) => {
    //@ts-ignore
    switch ( action.type ) {
        case actionTypes.FETCH_ARTICLE_SUCCESS : return fetchArticlesSuccess(state, action);
        case actionTypes.FETCH_ARTICLE_FAIL : return fetchArticleFail(state, action);
        case actionTypes.ADD_ARTICLE_SUCCESS : return addArticleSuccess(state, action);
        case actionTypes.ADD_ARTICLE_FAIL : return addArticleFail(state, action);
        default: return state;
    } 
} 

export default reducer;