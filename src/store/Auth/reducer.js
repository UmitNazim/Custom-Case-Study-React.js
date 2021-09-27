import { SET_GREATING, RESET_GREATING } from './actions';
import DEFAUT_GREATING from './state';

const greating = (state = DEFAUT_GREATING, { type = null, payload = null } = {}) => {
  const actionBox = {
    [SET_GREATING]: payload,
    [RESET_GREATING]: DEFAUT_GREATING,
  };
  return actionBox[type] || state;
};
export default greating;
