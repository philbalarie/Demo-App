import moxios from 'moxios';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Article from '../../article.model';
import { fetchArticles } from '../actions/article';
import { Store } from 'redux';
import { storeFactory } from '../../test/testUtils';
import * as actionType from '../actions/actionTypes';
import * as action from '../actions/article';
import error from '../../error.model';

//TODO: Tester les fonctionnalités asynchrones: 
// https://redux.js.org/recipes/writing-tests

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
});

describe('actions', () => {
    
    test('should create an action to add an article to the state', () => {
        
        const articlePayload: Article = { id: "1", title: "titre", body: "body" }
        
        const expectedAction = {
            type: actionType.ADD_ARTICLE_SUCCESS, 
            payload: articlePayload
        }
        
        expect(action.addArticleSuccess(articlePayload)).toEqual(expectedAction)
    })

    test('should create an action to add an error to the state when trying to add an article', () => {
        
        const errorPayload: error = 'Erreur de téléchargement de l\'API'
        
        const expectedAction = {
            type: actionType.ADD_ARTICLE_SUCCESS, 
            payload: errorPayload
        }
        
        expect(action.addArticleFail(errorPayload)).toEqual(expectedAction)
    })
});

describe('async actions', () => {

});

describe('get API datas from Firebase', () => {
    
    let article: Article;
    let store: Store;
    
    beforeEach(() => {
        article = {id: "dfb01ee6-379c-4e31-9001-b5124201f440", title: "Premier article", body: "Premier body"};
        //@ts-ignore
        store = storeFactory();
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    })
    
    test('add response articles to state', (done) => {
        
        moxios.wait(() => {
            
            const request = moxios.requests.mostRecent();
            
            request.respondWith({
                status: 200,
                response: article
            });
            
            done();
        });
        //@ts-ignore
        return store.dispatch(fetchArticles())
        .then(() => {
            const newState = store.getState();
            
            expect(newState.article.articles).toEqual([article])
            
        });
        
    });
    
    
});


