import { SET_SELECTED_TAB } from "./tabActions";

const INITIAL_STATE = {
  selectedTab: "Home",
};

const tabReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload,
      };

    default:
      return state;
  }
};

export default tabReducer;
