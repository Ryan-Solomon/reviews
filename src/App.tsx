import React from 'react';
import './App.css';
import Question from './Question';
import questions from './data/data';

function App() {
  const renderedQuestions = questions.map((question) => {
    return <Question key={question.id} question={question} />;
  });

  return (
    <main className='container'>
      <section className='section'>
        <aside className='aside'>
          <h2>Questions And Answers About Login</h2>
        </aside>
        {renderedQuestions}
      </section>
    </main>
  );
}

export default App;
