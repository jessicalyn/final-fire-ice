import * as actions from './index'
import { mockHouseData } from '../mockHouseData';

describe('actions', () => {
  it('should have a type of STORE_HOUSES and houseData', () => {
    const houseData = mockHouseData
    const expectedAction = {
      type: 'STORE_HOUSES',
      houseData
    }

    const result = actions.storeHouseData(houseData)

    expect(result).toEqual(expectedAction)
  });

  it('should have a type of HAS_ERROR and error message', () => {
    const message = "Something went wrong"
    const expectedAction = {
      type: 'HAS_ERROR',
      message 
    }

    const result = actions.hasError(message)

    expect(result).toEqual(expectedAction)
  });

  it('should have a type of IS_LOADING and boolean', () => {
    const boolean = true
    const expectedAction = {
      type: 'IS_LOADING',
      boolean
    }

    const result = actions.isLoading(true)

    expect(result).toEqual(expectedAction)
  })
})