import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../configureStore';
import thunk from 'redux-thunk';
/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper: any, val:string) => {
    return wrapper.find(`[data-test="${val}"]`);
}
/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middlewares.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState: any = {}) => {

    //@ts-ignore
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunk)
      ));

      return store
}