const initialState = {
  eth_price: 0,
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_ETH_PRICE':
      return {
        ...state,
        eth_price: payload,
      }
    default:
      return state
  }
}
