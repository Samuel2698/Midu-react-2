import React from "react";
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const App = () => {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev">Miguel D</TwitterFollowCard>

      <TwitterFollowCard userName="pheralb" isFollowing>
        Pablo Heraldo
      </TwitterFollowCard>
    </section>
  );
};

export default App;
