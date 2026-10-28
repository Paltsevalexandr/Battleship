import React from 'react';
import {connect} from 'react-redux';

import FieldsContainer from '../start-game-components/fields-container';
import StartButton from '../start-game-components/start-game-button';
import Priority from '../start-game-components/priority';
import GameHint from '../start-game-components/game-hint';

const GamePage = ({gameMode, gamer, setGameMode, battleShips, winner}) => {
   
   return (
      <>
         {
            winner.length > 0
            ? <div className = 'priority'>{`${winner === 'gamer' ? 'Player' : 'Computer'} wins`}</div>

            : gameMode === 'start' 
               ? <Priority gamer = {gamer} /> 
               : <div className = 'priority'></div>
         }

         <FieldsContainer gameMode = {gameMode} />

         {gameMode === 'start' ? <GameHint /> : null}

         {
          battleShips.length === 10 && gameMode !== 'start'
          ? <StartButton setGameMode = {setGameMode} />
          : null
         }
      </>
   )
}

const mapStateToProps = ({gamerState: {battleShips}, gameplayState: {gamer, winner}}) => {
   return {battleShips, gamer, winner}
}
 
export default connect(mapStateToProps)(GamePage);
