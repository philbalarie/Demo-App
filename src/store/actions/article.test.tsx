import React from 'react'
import moxios from 'moxios';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Article from '../../article.model';
import  { storeFactory } from '../../test/testUtils';
import { fetchArticles, fetchArticlesSuccess } from '../actions/article';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
  });

describe('get API datas from Firebase', () => {

    let article: Article;
    let store: any;

    beforeEach(() => {
        article = {id: "1", title: "Titre de test", content: "Contenu de test"};

        store = storeFactory();
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    })

    test('add response articles to state', (done) => {

        moxios.wait(() => {
            //@ts-ignore
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

                //@ts-ignore
                expect(newState.article.articles).toEqual([article])

            });

    });


    });


