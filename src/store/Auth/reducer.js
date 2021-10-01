import { GET_USER, GET_USER_FORGOT_PASSWORD, GET_USER_REGISTRATION } from './types';

import INITIAL_STATE from './state';

const auth = (state = INITIAL_STATE, { type, payload } = {}) => {
  const actionBox = {
    [GET_USER]: { ...state, user: payload },
    [GET_USER_FORGOT_PASSWORD]: { ...state },
    [GET_USER_REGISTRATION]: { ...state },
  };

  return actionBox[type] || state;
};

export default auth;
