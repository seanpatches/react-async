import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote }){
  return (
    <>
    <p>{quote.character}</p> 
    <img src={Quote.image}/>
    <p>{quote.quote}</p>
    </>
  ); 
}

Quote.propTypes = {
  quote: PropTypes.shape({
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string
  })
};

export default Quote;
