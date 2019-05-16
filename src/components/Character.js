import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }){
  return (
    <>
    <p>{character.name}</p> 
    <p>{character.status}</p>
    <p>{character.age}</p>
    <p>{character.species}</p>
    </>
  ); 
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    age: PropTypes.string,
    species: PropTypes.string
  })
};

export default Character;
