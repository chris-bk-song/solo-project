import { createStore } from 'redux';
import recipeReducer from './reducers';

const store = createStore(recipeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;