import axios from 'utils/api';
import { GET_USER_REGISTRATION, GET_USER_FORGOT_PASSWORD, GET_USER } from './types';

export const register = (item) => async (dispatch) => {
  await axios
    .post('/register', item)
    .then(() => dispatch({ type: GET_USER_REGISTRATION, payload: null }));
};

export const forgotPassword = (item) => async (dispatch) => {
  await axios
    .post('/forgot-password', item)
    .then(() => dispatch({ type: GET_USER_FORGOT_PASSWORD, payload: null }));
};

export const login = (item) => async (dispatch) => {
  await axios.post('/login', item).then(({ data }) => dispatch({ type: GET_USER, payload: data }));
};
