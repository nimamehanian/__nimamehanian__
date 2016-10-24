import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sidebar from './modules/sidebar/reducers';

const reducer = combineReducers({
  sidebar,
  routing: routerReducer
});

export default reducer;
