import createReducer from "../common/createReducer";

const ADD = "friend/ADD";

export const addFriend = (friend) => ({ type: ADD, friend });

const initialState = { friends: [] };
const reducer = createReducer(initialState, {
  [ADD]: (state, action) => {
    return state.friends.push(action.friend);
  },
});
export default reducer;
