import React from "react";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          {friend.name}&nbsp;&nbsp;{friend.age}세
        </li>
      ))}
    </ul>
  );
}
