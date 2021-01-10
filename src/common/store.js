import { createStore, combineReducers, applyMiddleware } from "redux";
import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import timelineSaga from "../timeline/state/saga";

// combineReducers => 여러 개의 리듀서를 합치는 함수
const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield all([timelineSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
