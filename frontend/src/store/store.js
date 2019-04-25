import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer, 
  initialState, 
  // // compose(applyMiddleware(thunk), 
  // //         window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));
  // compose(applyMiddleware(thunk))
);

export default store;
