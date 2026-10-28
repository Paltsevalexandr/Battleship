import React from 'react';

const Priority = ({gamer}) => {

   return (
      <div className = 'priority'>
         <p>{`Turn: ${
               gamer === 1 
               ? 'player' 
               : 'computer'}`}</p>
      </div>
   )
}

export default Priority;
