import React from 'react';
import {Link} from 'react-router-dom';

const ControlButtons = ({
  setGameMode, 
  randomShipsPlacement,
  createAllShips }) => {

  return (
    <>
      <Link to = '/game-field' className = 'placeShipBtn'
        onClick = {() => {
          randomShipsPlacement();
          setGameMode('randomPlaycement');
          createAllShips()}}>
        1. Random
      </Link>
      
      <Link to = '/game-field' className = 'placeShipBtn'
        onClick = {() => {
          createAllShips();
          setGameMode('playerPlaycement');
        }}>
        2. Manually
      </Link>
    </>
  );
}

export default ControlButtons;
