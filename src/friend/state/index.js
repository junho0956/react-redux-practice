import createReducer from "../../common/createReducer";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";

const ADD = "friend/ADD";
const SET_AGE_LIMIT = "friend/SET_AGE_LIMIT";
const SET_SHOW_LIMIT = "friend/SET_SHOW_LIMIT";

// actions 로 묶어서 내보내는 방법을 추천함
// export actions = {
//   addFriend
//   setAgeLimit
//   setShowLimit ...
// }
export const addFriend = (friend) => ({ type: ADD, friend });
export const setAgeLimit = (ageLimit) => ({ type: SET_AGE_LIMIT, ageLimit });
export const setShowLimit = (showLimit) => ({
  type: SET_SHOW_LIMIT,
  showLimit,
});

const initialState = {
  friends: [],
  ageLimit: MAX_AGE_LIMIT,
  showLimit: MAX_SHOW_LIMIT,
};
const reducer = createReducer(initialState, {
  [ADD]: (state, action) => {
    return state.friends.push(action.friend);
  },
  [SET_AGE_LIMIT]: (state, action) => {
    return (state.ageLimit = action.ageLimit);
  },
  [SET_SHOW_LIMIT]: (state, action) => {
    return (state.showLimit = action.showLimit);
  },
});
export default reducer;
