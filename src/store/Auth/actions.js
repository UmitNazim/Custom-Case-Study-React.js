import axios from 'utils/api';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = () => async (dispatch) => {
  await axios.get('/product').then(({ data }) => dispatch({ type: GET_PRODUCTS, payload: data }));
};
