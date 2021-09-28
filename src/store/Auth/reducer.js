import { GET_PRODUCTS, GET_PRODUCTS_START } from './actions';
import INITIAL_STATE from './state';

const reducer = (state = INITIAL_STATE, { type, payload } = {}) => {
  const actionBox = {
    [GET_PRODUCTS_START]: { ...state, isLoading: true },
    [GET_PRODUCTS]: { ...state, products: payload, isLoading: false },
  };

  return actionBox[type] || state;
};

export default reducer;
