export const housesReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_HOUSES':
      return action.houseData

    case 'UPDATE_SWORN_MEMBERS':
      
      return action.houseData

    default:
      return state
  }
}