import { combineReducers, legacy_createStore as createStore } from 'redux';
import reposReducer from './GithubRepos/reducer';
import userReducer from './GithubUser/reducer';

const rootReducers = combineReducers({
    repos: reposReducer,
    user: userReducer,
    // another reducers was here
});

const store = createStore(rootReducers);

export default store;