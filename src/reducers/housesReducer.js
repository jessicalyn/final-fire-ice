export const housesReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_HOUSES':
      return action.houseData

    case 'UPDATE_SWORN_MEMBERS':
      const updatedHouses = state.map(house => {
        if (house.name === action.name) {
          house.swornMembers = action.members
        }
        return house
      })
      return updatedHouses

    default:
      return state
  }
}