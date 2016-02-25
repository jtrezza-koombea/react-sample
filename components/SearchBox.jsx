import React from 'react';

export default ({type, icon, label}) => {
  return (
    <div className="search-box">
      <input type="text" className="search-box__input" placeholder="Buscar transacciones"/><span className="fa fa-search search-box__magnifier"></span>
    </div>
  );
}