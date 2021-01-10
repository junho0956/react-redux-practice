import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend, setAgeLimit, setShowLimit } from "../state";
import FriendList from "../component/friend";
import { useDispatch, useSelector } from "react-redux";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";
import NumberSelector from "../component/NumberSelector";

export default function FriendMain() {
  // const friends = useSelector((state) => state.friend.friends);
  // const dispatch = useDispatch(); dispatch 훅 사용가능
  const [
    ageLimit,
    showLimit,
    friendsWithAgeLimit,
    friendsWithAgeShowLimit,
  ] = useSelector((state) => {
    const { ageLimit, showLimit, friends } = state.friend;
    const friendsWithAgeLimit = friends.filter((item) => item.age <= ageLimit);
    console.log("useSelector");
    return [
      ageLimit,
      showLimit,
      friendsWithAgeLimit,
      friendsWithAgeLimit.slice(0, showLimit),
    ];
  });

  function onAdd() {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend)); // 또는 dispatch(addFriend(friend)) 훅으로 사용가능
  }
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <br />
      <NumberSelector
        onChange={(v) => store.dispatch(setAgeLimit(v))}
        value={ageLimit}
        option={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelector
        onChange={(v) => store.dispatch(setShowLimit(v))}
        value={showLimit}
        option={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기(연령 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];
