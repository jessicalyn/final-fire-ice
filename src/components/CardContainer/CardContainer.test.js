import { mapStateToProps } from './CardContainer';
import { mockHouseData } from '../../mockHouseData';

describe('CardContainer', () => {
  describe('mapStateToProps', () => {
    it('should return an array with the houseData', () => {
      const mockState = {
        houses: mockHouseData,
        error: ""
      }
      const expected = {
        houses: mockHouseData
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})