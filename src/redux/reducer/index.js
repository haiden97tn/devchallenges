import { combineReducers } from 'redux';
import AccountReducer from './account.reducer';

const rootReducer = combineReducers({
    account : AccountReducer
})

export default rootReducer;
