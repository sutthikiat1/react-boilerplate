import { initialState } from "./type";
import { SET_COUNT, RESET_COUNT } from "./action";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, ...action.payload };
    case RESET_COUNT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
