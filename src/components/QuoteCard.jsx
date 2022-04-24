import React from 'react'

export const QuoteCard = ({simpsons}) => {
    return (
        simpsons && (
          <div>
            <h2>{simpsons.character}</h2>
            <img src={simpsons.image} alt={simpsons.character} />
            <p>{simpsons.quote}</p>
          </div>
        )
      );
    }

export default QuoteCard;