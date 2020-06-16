import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { v4 as uuidv4 } from 'uuid';

//FIXME: Modifier le state initial pour qu'il soit vide. 

const initialState = {
    articles: [
        {
            id: uuidv4(),
            title: "Premier article",
            content: "Premier content"
        }
    ]
}

const addArticle = <T extends object, U extends object>(state: T, action: U) => {
    //@ts-ignore
    return updateObject(state, action.payload)
}

const fetchArticlesSuccess = <T extends object, U extends object>(state: T, action: U) => {
        //@ts-ignore
    const articles = [action.payload]
    return updateObject(state, { articles })
}

const fetchArticleFail = <T extends object, U extends object>(state: T, action: U) => {
    //@ts-ignore
    const error = action.payload
    return updateObject(state, { error })
}

/**
 * Reducer for the articles
 * @function reducer
 * @template U
 * @param {*} [state=initialState]  - State of the article Redux Store
 * @param {U} action
 * @returns {function} - function to update immutable object or default state
 */
const reducer = <U extends object>(state=initialState, action: U) => {
    //@ts-ignore
    switch ( action.type ) {
        //@ts-ignore
        case actionTypes.ADD_ARTICLE : return addArticle(state, action) ;
        case actionTypes.FETCH_ARTICLE_SUCCESS : return fetchArticlesSuccess(state, action);
        case actionTypes.FETCH_ARTICLE_FAIL : return fetchArticleFail(state, action);
        default: return state;
    } 
} 

export default reducer