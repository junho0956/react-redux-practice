import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend } from "../state";
import FriendList from "../component/friend";
import { useDispatch, useSelector } from "react-redux";

export default function FriendMain() {
  const friends = useSelector((state) => state.friend.friends);
  // const dispatch = useDispatch(); dispatch 훅 사용가능 code 15

  console.log("friends Render!");
  function onAdd() {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend)); // 또는 dispatch(addFriend(friend)) 훅으로 사용가능
  }
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
