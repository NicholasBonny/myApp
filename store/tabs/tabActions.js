export const SET_SELECTED_TAB = "SET_SELECTED_TAB";

const setSelectedTabSuccess = (selectedTab) => ({
  type: SET_SELECTED_TAB,
  payload: selectedTab,
});

export const setSelectedTab = (selectedTab) => (dispatch) => {
  return dispatch(setSelectedTabSuccess(selectedTab));
};
