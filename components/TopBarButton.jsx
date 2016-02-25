import React from 'react';

export default ({icon, label, click, parentClass}) => {
  return (
    <div className={`top-bar__button${parentClass ? ' '+parentClass : ''}`} onClick={click}>
      <span className={`top-bar__button-icon ${icon}`}></span><span className="top-bar__button-label">{label}</span>
    </div>
  );
}