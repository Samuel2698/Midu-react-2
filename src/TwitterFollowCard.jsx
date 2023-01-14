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
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
      </header>
    </article>
  );
};

export default TwitterFollowCard;
