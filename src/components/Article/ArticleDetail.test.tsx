import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ArticleDetail from '../Article/ArticleDetail';
import { findByTestAttr } from '../../test/testUtils';
import Article from '../../article.model';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
  });

/**
 *Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 *
 * @param {object} [props={id, title, content}] - Initial props for this setup bases on Article model
 * @returns {ShallowWrapper}
 */

const setup = (props: Article={id: '', title: '', content: ''}) => {
    const wrapper = shallow(<ArticleDetail {...props}  />)
    return wrapper;
}

test('Component render without error', () => {
    const wrapper = setup();
    const ArticleDetailComponent = findByTestAttr(wrapper,'ArticleDetail')
    expect(ArticleDetailComponent.length).toBe(1);
});

describe('Component should use Props', () => {
    let wrapper: ShallowWrapper;
    let initialProps: Article;
    beforeEach(() => {
        initialProps = { id: '1', title: "Titre de test", content: "Contenu de test" };
        wrapper = setup(initialProps);
    })

    test('title', () => {
        const titleProps = findByTestAttr(wrapper, 'ArticleDetail-title');
        expect(titleProps.contains(initialProps.title)).toEqual(true);
    })

    test('content', () => {
        const contentProps = findByTestAttr(wrapper, 'ArticleDetail-content');
        expect(contentProps.contains(initialProps.content)).toEqual(true);
    })
});