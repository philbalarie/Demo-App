import * as actionType from './actionTypes';
import Article from '../../article.model';


export const addArticle = ( article:Article ) => {
    return {
        type: actionType.ADD_ARTICLE,
        payload: article
    }
}