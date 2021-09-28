import axios from 'utils/api';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';

export const getProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_START });
  axios.get('/product').then(({ data }) => dispatch({ type: GET_PRODUCTS, payload: data }));
};
