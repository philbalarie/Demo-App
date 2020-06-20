import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { v4 as uuidv4 } from 'uuid';
import Article from '../../article.model';
import { ActionWithPayload } from '../../action.model';

//FIXME: valider que le typage du state est OK
interface ArticleState extends Object {
    articles: Array<Article>,
    error?: string
}

type Error = string;

const initialState: ArticleState = {
    articles: [
        {
            id: uuidv4(),
            title: "Premier article",
            content: "Premier content"
        }
    ]
}

/**
 * Reducer to add a new article in the state
 * @function addArticle
 * @param {ArticleState} state
 * @param {ActionWithPayload<Article>} action
 * @returns
 */
const addArticle = (state: ArticleState, action: ActionWithPayload<Article>) => {
    return updateObject(state, action.payload)
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
    const articles = [action.payload]
    return updateObject(state, { articles })
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
        //@ts-ignore
        case actionTypes.ADD_ARTICLE : return addArticle(state, action);
        case actionTypes.FETCH_ARTICLE_SUCCESS : return fetchArticlesSuccess(state, action);
        case actionTypes.FETCH_ARTICLE_FAIL : return fetchArticleFail(state, action);
        default: return state;
    } 
} 

export default reducer;