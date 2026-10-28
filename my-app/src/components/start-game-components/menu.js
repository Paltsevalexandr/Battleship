import React from 'react';

const Menu = ({children }) => {

  return (
    <div className = 'menu'>
      <h2>Ship placement</h2>  
      {children}
    </div>
  );
}

export default Menu;
