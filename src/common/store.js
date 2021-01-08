import { createStore, combineReducers } from "redux";
import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";

// combineReducers => 여러 개의 리듀서를 합치는 함수
const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});
const store = createStore(reducer);
export default store;
