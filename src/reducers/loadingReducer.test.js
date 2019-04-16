import { loadingReducer } from './loadingReducer';
import * as actions from '../actions';

describe('loadingReducer', () => {
  it('should return the default state', () => {
    const expected = false

    const result = loadingReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a state with IS_LOADING', () => {
    const initialState = false
    const predicted = true

    const action = actions.isLoading(true)
    const result = loadingReducer(initialState, action)

    expect(result).toEqual(predicted)
  })
})