import React, { useState } from 'react';
import style from "../styles/Home.module.css"
const Picture = ({ src }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleClick = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div>
      {isFullScreen ? (
        <div className={style.fullscreen} onClick={handleClick}>
          <img src={src} alt="Picture" />
        </div>
      ) : (
        <div className={style.thumbnail} onClick={handleClick} >
          <img src={src} alt="Picture" />
        </div>
      )}
    </div>
  );
};

export default Picture;
