import createReducer from "../common/createReducer";

const ADD = "timeline/ADD";

export const addTimeline = (timeline) => ({ type: ADD, timeline });

const initialState = { timelines: [] };
const reducer = createReducer(initialState, {
  [ADD]: (state, action) => {
    return state.timelines.push(action.timeline);
  },
});
export default reducer;
