import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character.js';

function Characters({ characters }) {
  const charactersList = characters.map(character => (
    <li key={character.id}>
      <Character character={character} />
    </li>
  ));


  return ( 
    <ul>
      {charactersList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
