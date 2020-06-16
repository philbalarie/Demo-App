import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import articleReducer from './store/reducers/article';

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    article: articleReducer
  });

  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

export type RootState = ReturnType<typeof rootReducer>
export default store;
