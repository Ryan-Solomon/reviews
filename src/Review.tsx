import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import React, { FC, useState } from 'react';
import { reviews } from './data/data';

const Review: FC = () => {
  const [index, setIndex] = useState(0);
  const { name, id, image, job, text } = reviews[index];

  const showNext = () => {
    let nextIndex = index + 1;
    if (nextIndex === reviews.length) {
      nextIndex = 0;
    }
    setIndex(nextIndex);
  };

  const showPrevious = () => {
    let nextIndex = index - 1;
    if (nextIndex < 0) {
      nextIndex = reviews.length - 1;
    }
    setIndex(nextIndex);
  };
  console.log(index);

  const showRandom = () => {
    let nextIndex = Math.floor(Math.random() * reviews.length);
    setIndex(nextIndex);
  };

  return (
    <div className='review'>
      <div className='image'>
        <img src={image} alt='Review' />
      </div>
      <h1>{name}</h1>
      <h2>{job}</h2>
      <p>{text}</p>
      <button onClick={showPrevious} className='btn'>
        Previous
      </button>
      <button onClick={showNext} className='btn'>
        Next
      </button>
      <button onClick={showRandom} className='btn'>
        Random
      </button>
    </div>
  );
};

export default Review;
