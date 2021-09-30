export const UpdateEthPrice = (new_price) => {
  return {
    type: 'UPDATE_ETH_PRICE',
    payload: new_price,
  }
}
