import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ArticleList from './ArticleList';
import { storeFactory, findByTestAttr } from '../../test/testUtils';
import Article from '../../article.model';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
  });

/**
 *Factory function to create a ShallowWrapper for the component.
 * @function setup
 *
 * @param {object} [state=null] - Initial state for this setup
 * @returns {ReactWrapper}
 */
  const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    
    return mount(
      <Provider store={store}>
        <ArticleList />
      </Provider>
    )
  }

  const initialState:Article = { id:"1", title: "titre de test", content: "contenu de test" }

test('Render component without error', () => {
  const wrapper = setup(initialState);
  const ArticleListComponent = findByTestAttr(wrapper,'ArticleList');
  expect(ArticleListComponent.length).toBe(1);
})