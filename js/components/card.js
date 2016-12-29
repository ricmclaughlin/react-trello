import React from 'react';
import ReactDOM from 'react-dom';

export default function Card() {
  return (
    <div className="box">
      <img src="http://placehold.it/400x400" alt="kitten"/>
      <footer>
        <h2>This is a card</h2>
        <p>With an image in it</p>
      </footer>
    </div>
  );
}
