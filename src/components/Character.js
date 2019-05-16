import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }){
  return (
    <>
    <p>{character.name}</p> 
    <p>{character.status}</p>
    <img src={character.image} />
    <p>{character.species}</p>
    </>
  ); 
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string,
    species: PropTypes.string
  })
};

export default Character;
