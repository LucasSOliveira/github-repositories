import { combineReducers } from 'redux';
import repositoryReducer from './repository/repository.slice';

const rootReducer = combineReducers({
    repository: repositoryReducer
});

export default rootReducer;