import { useState } from "react";
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Duran",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H",
    isFollowing: false,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: false,
  },
];

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
};

export default App;
