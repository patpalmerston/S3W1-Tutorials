import React from 'react';

const Players = (props) => {
  return(
    <> 
      {props.players.map(player => (
        <div key={player.id} data-testid='player'>{player.name}</div>
      ))}
    </>
  ) 
}

export default Players

