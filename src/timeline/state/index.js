import createReducer from "../../common/createReducer";

export const types = {
  ADD: "timeline/ADD",
  REQUEST_LIKE: "timeline/REQUEST_LIKE",
  ADD_LIKE: "timeline/ADD_LIKE",
  SET_LOADING: "timeline/SET_LOADING",
};

export const actions = {
  addTimeline: (timeline) => ({ type: types.ADD, timeline }),
  requestLike: (timeline) => ({ type: types.REQUEST_LIKE, timeline }),
  addLike: (timelineId, value) => ({ type: types.ADD_LIKE, timelineId, value }),
  setLoading: (isLoading) => ({ type: types.SET_LOADING, isLoading }),
};

const initialState = {
  timelines: [],
  isLoading: false,
};
const reducer = createReducer(initialState, {
  [types.ADD]: (state, action) => {
    return state.timelines.push(action.timeline);
  },
  [types.ADD_LIKE]: (state, action) => {
    const timeline = state.timelines.find(
      (item) => item.id === action.timelineId
    );
    if (timeline) {
      timeline.likes += action.value;
    }
  },
  [types.SET_LOADING]: (state, action) => (state.isLoading = action.isLoading),
});
export default reducer;
