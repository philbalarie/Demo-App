import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import Article from '../../article.model';
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    articles: [
        {
            id: uuidv4(),
            title: "Premier article",
            content: "Premier content"
        }
    ]
}

const addArticle = <U extends object>(state: Article, action: U) => {
    //@ts-ignore
    return updateObject(state, action.payload)
}

const reducer = <U extends object>(state=initialState, action: U) => {
    //@ts-ignore
    switch ( action.type ) {
        //@ts-ignore
        case actionTypes.ADD_ARTICLE : return addArticle(state, action) 
        default: return state;
    } 
} 

export default reducer