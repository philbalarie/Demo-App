import React from 'react'
import moxios from 'moxios';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { findByTestAttr, storeFactory } from './test/testUtils';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
  });

/**
 * Factory function to create a ShallowWrapper for the component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
    const wrapper = shallow(<App />)
    return wrapper;
}

test('Component render without error', () => {
    const wrapper = setup();
    const AppComponent = findByTestAttr(wrapper, 'App');
    expect(AppComponent.length).toBe(1);
})