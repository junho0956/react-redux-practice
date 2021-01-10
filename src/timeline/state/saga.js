import { put, all, call, takeLeading } from "redux-saga/effects";
import { actions, types } from "../state";
import { callApiLike } from "../../common/api";
/**
 * generator
 * yield : 제너레이터 키워드
 * all, takeLeading : saga 에서 제공하는 함수
 * all 안에 배열이 있는데, 원하는 것들을 여러개 나열할 수 있고,
 * takeLeading 의 첫번째 매개변수인 액션이 dispatch되면 두번째 매개변수인 fetchData가 실행되는 형태
 */
export default function* () {
  yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
}

/**
 *
 * action 객체가 매개변수로 넘어온다
 * put: 리덕스 액션을 발생시킨다
 * call callApiLike => positive(API 성공했다고 간주하고 미리 반영하는 방식)으로 호출]\
 * call: 파라미터에있는 함수를 실행
 */
export function* fetchData(action) {
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield call(callApiLike);
  yield put(actions.setLoading(false));
}
