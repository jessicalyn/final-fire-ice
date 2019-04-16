import { errorReducer } from './errorReducer';
import * as actions from '../actions'

describe('errorReducer', () => {
  it('should return the default state', () => {
    const expected = ""

    const result = errorReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a state with HAS_ERROR', () => {
    const initialState = ""
    const predicted = "Something went wrong"

    const action = actions.hasError("Something went wrong")
    const result = errorReducer(initialState, action)

    expect(result).toEqual(predicted)
  })
})
