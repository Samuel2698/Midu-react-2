import React from "react";
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const App = () => {
  return (
    <>
      <TwitterFollowCard userName="midudev" initialIsFollowing>
        Miguel D
      </TwitterFollowCard>
      <TwitterFollowCard userName="pheralb" initialIsFollowing={false}>
        Pablo Hernandez
      </TwitterFollowCard>
    </>
  );
};

export default App;

// import { useState } from "react";
// import "./App.css";
// import TwitterFollowCard from "./TwitterFollowCard";

// const App = () => {
//   return (
//     <div className="App">
//       <TwitterFollowCard userName="midudev" initialIsFollowing>
//         Miguel D
//       </TwitterFollowCard>
//       <TwitterFollowCard userName="pheralb" initialIsFollowing={false}>
//         Pablo Hernandez
//       </TwitterFollowCard>
//     </div>
//   );
// };

// export default App;
