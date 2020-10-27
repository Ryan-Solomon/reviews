import React, { FC, useState } from 'react';
import { Question as QuestionType } from './data/data';

type Props = {
  key: number;
  question: QuestionType;
};

const Question: FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const { title, info } = props.question;

  const showInfo = () => {
    setShow(!show);
  };

  return (
    <div className='question'>
      <h1>{title}</h1>
      <p className={show ? 'show-info' : 'hide-info'}>{info}</p>{' '}
      <span>
        <button onClick={showInfo}>{show ? 'hide' : 'show'}</button>
      </span>
    </div>
  );
};

export default Question;
