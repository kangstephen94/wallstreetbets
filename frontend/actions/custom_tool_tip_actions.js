export const UPDATE_POINTED_PRICE = 'UPDATE_POINTED_PRICE';
export const CLEAR_POINTED_PRICE = 'CLEAR_POINTED_PRICE';

export const updatePointedPrice = pointedPrice => ({
  type: UPDATE_POINTED_PRICE,
  pointedPrice
});

export const clearPointedPrice = () => ({
  type: CLEAR_POINTED_PRICE,
});
