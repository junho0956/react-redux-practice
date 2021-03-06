import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextTimeline } from "../../common/mockData";
import { actions } from "../state/index";
import TimelineList from "../component/timeline";
import { useSelector } from "react-redux";

export default function TimelineMain() {
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);

  function onAdd() {
    const timeline = getNextTimeline();
    store.dispatch(actions.addTimeline(timeline));
  }

  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    store.dispatch(actions.requestLike(timeline));
  }

  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>전송 중...</p>}
    </div>
  );
}
