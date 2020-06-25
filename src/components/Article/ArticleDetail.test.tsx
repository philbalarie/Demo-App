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
 * @param {object} [props={id, title, body}] - Initial props for this setup bases on Article model
 * @returns {ShallowWrapper}
 */

const setup = (props: Article={id: '', title: '', body: ''}) => {
    const wrapper = shallow(<ArticleDetail {...props}  />)
    return wrapper;
}

test('Component render without error', () => {
    const wrapper = setup();
    const ArticleDetailComponent = findByTestAttr(wrapper,'ArticleDetail')
    expect(ArticleDetailComponent.length).toBe(1);
});

describe('Component should use Body', () => {
    let wrapper: ShallowWrapper;
    let initialProps: Article;
    beforeEach(() => {
        initialProps = { id: '1', title: "Titre de test", body: "Premier article" };
        wrapper = setup(initialProps);
    })

    test('title', () => {
        const titleProps = findByTestAttr(wrapper, 'ArticleDetail-title');
        expect(titleProps.contains(initialProps.title)).toEqual(true);
    })

    test('body', () => {
        const bodyProps = findByTestAttr(wrapper, 'ArticleDetail-body');
        expect(bodyProps.contains(initialProps.body)).toEqual(true);
    })
});