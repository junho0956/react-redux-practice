import React from "react";
import FriendMain from "./friend/container/friend";
import TimelineMain from "./timeline/container/timeline";
import { Provider } from "react-redux";
import store from "./common/store";

function App() {
  return (
    <Provider store={store}>
      <FriendMain />
      <TimelineMain />
    </Provider>
  );
}

export default App;
