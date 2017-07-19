import rootReducer from '.././reducers/index.jsx';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from "redux-logger";


export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise,thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  return store;
}