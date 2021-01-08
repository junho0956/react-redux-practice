import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextTimeline } from "../../common/mockData";
import { addTimeline } from "../state";
import TimelineList from "../component/timeline";
import { useSelector } from "react-redux";

export default function TimelineMain() {
  const timelines = useSelector((state) => state.timeline.timelines);
  console.log("timelineRender!");
  function onAdd() {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  }
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}
