import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { housesReducer } from './housesReducer'

const rootReducer = combineReducers({
  error: errorReducer,
  loading: loadingReducer,
  houses: housesReducer
})

export default rootReducer