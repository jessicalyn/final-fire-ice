import { housesReducer } from './housesReducer';
import * as actions from '../actions';
import { mockHouseData } from '../mockHouseData'

describe('housesReducer', () => {
  it('should return the default state', () => {
    const expected = []

    const result = housesReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a state with STORE_HOUSES', () => {
    const initialState = []
    const predicted = mockHouseData

    const action = actions.storeHouseData(mockHouseData)
    const result = housesReducer(initialState, action)

    expect(result).toEqual(predicted)
  })
})
