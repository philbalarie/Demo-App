import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ArticleList from './ArticleList';
import { storeFactory, findByTestAttr } from '../../test/testUtils';
import Article from '../../article.model';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
  });

  const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    //@ts-ignore
    const wrapper = shallow(<ArticleList store={store} />);
    return wrapper;
  }

  const initialState:Article = { id:"1", title: "titre de test", content: "contenu de test" }

test('Render component without error', () => {
  const wrapper = setup(initialState);
  const ArticleListComponent = findByTestAttr(wrapper,'ArticleList');
  console.log(ArticleListComponent.debug());
  //expect(ArticleListComponent.length).toBe(1);
})