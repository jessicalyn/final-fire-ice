import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { housesReducer } from './housesReducer'

const rootReducer = combineReducers({
  errorReducer,
  loadingReducer,
  housesReducer
})

export default rootReducer