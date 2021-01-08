import produce from "immer";

export default function createReducer(initialState, handlerMap) {
  return function (state = initialState, action) {
    // produce of immer => 불변객체를 위해 사용
    return produce(state, (draft) => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
