export const storeHouseData = (houseData) => ({
  type: 'STORE_HOUSES',
  houseData
})

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})

export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  boolean
})