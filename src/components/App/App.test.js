import App, { mapStateToProps, mapDispatchToProps } from './App';
import { mockHouseData } from '../../mockHouseData';
import * as actions from '../../actions'

describe('App', () => {
  describe('mapStateToProps', () => {
    it('should return an array with the houseData', () => {
      const mockState = {
        houses: mockHouseData,
        error: "",
        loading: false,
        fakeState: "I'm not even real"
      }
      const expected = {
        houses: mockHouseData,
        error: "",
        loading: false
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a storeHouseData action', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = actions.storeHouseData(mockHouseData)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.storeHouseData(mockHouseData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('calls dispatch with a hasError action', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = actions.hasError("Something went wrong")

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.hasError("Something went wrong")

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
    
    it('calls dispatch with an isLoading action', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = actions.isLoading(true)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.isLoading(true)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
    
  })

})