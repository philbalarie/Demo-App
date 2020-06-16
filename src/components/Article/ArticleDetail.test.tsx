import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ArticleDetail from '../Article/ArticleDetail';
import { findByTestAttr } from '../../test/testUtils';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
  });

/**
 *Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 *
 * @param {object} [props={}] - Initial props for this setup
 * @param {object} [state=null] - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
    //@ts-ignore
    const wrapper = shallow(<ArticleDetail {...props}  />)
    //@ts-ignore
    state && wrapper.setState(state)
    return wrapper;
}

test('Component render without error', () => {
    const wrapper = setup();
    const ArticleDetailComponent = findByTestAttr(wrapper,'ArticleDetail')
    expect(ArticleDetailComponent.length).toBe(1);
});

describe('Component should use Props', () => {
    let wrapper: any;
    let initialProps: any;
    beforeEach(() => {
        initialProps = { title: "Titre de test", content: "Contenu de test" };
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