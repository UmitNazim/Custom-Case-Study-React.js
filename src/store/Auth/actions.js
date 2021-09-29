import axios from 'utils/api';
export const GET_USER = 'GET_USER';
export const GET_USER_REGISTRATION = 'GET_USER_REGISTRATION';
export const GET_USER_FORGOT_PASSWORD = 'GET_USER_FORGOT_PASSWORD';

export const register = (user) => async (dispatch) => {
  await axios
    .post('/register', user)
    .then(() => dispatch({ type: GET_USER_REGISTRATION, payload: null }));
};

export const forgotPassword = (user) => async (dispatch) => {
  await axios
    .post('/forgot-password', user)
    .then(() => dispatch({ type: GET_USER_FORGOT_PASSWORD, payload: null }));
};

export const login = (user) => async (dispatch) => {
  await axios.post('/login', user).then(({ data }) => dispatch({ type: GET_USER, payload: data }));
};
