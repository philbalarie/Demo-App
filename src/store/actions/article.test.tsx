import moxios from 'moxios';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Article from '../../article.model';
import { fetchArticles } from '../actions/article';
import { Store } from 'redux';
import { storeFactory, findByTestAttr } from '../../test/testUtils';


Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
  });

describe('get API datas from Firebase', () => {

    let article: Article;
    let store: Store;

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


