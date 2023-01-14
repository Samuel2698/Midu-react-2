import { useState } from "react";
import "./App.css";

const TwitterFollowCard = ({
  children,
  userName = "unknow",
  initialIsFollowing,
}) => {
  const imageSrc = `https://unavatar.io/${userName}`;

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const handleClick = () => setIsFollowing(!isFollowing);

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="Avatar de una persona"
        />

        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>

        <aside>
          <button onClick={handleClick} className={buttonClassName}>
            {text}
          </button>
        </aside>
      </header>
    </article>
  );
};

export default TwitterFollowCard;

// import { useState } from "react";
// import "./App.css";

// const TwitterFollowCard = ({
//   children,
//   userName = "unknown",
//   initialIsFollowing,
// }) => {
//   const imageSrc = `https://unavatar.io/${userName}`;

//   const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
//   const text = isFollowing ? "Siguiendo" : "Seguir";
//   const buttonClassName = isFollowing
//     ? "tw-followCard-button is-following"
//     : "tw-followCard-button";
//   const handleClick = () => setIsFollowing(!isFollowing);

//   return (
//     <article className="tw-followCard">
//       <header className="tw-followCard-header">
//         <img
//           className="tw-followCard-avatar"
//           src={imageSrc}
//           alt="Avatar de un gato"
//         />
//         <div className="tw-followCard-info">
//           <strong>{children}</strong>
//           <span className="tw-followCard-infoUserName">@{userName}</span>
//         </div>
//       </header>
//       <aside>
//         <button onClick={handleClick} className={buttonClassName}>
//           {text}
//         </button>
//       </aside>
//     </article>
//   );
// };

// export default TwitterFollowCard;
