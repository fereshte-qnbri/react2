
import React from 'react';
import ReactDOM from 'react-dom';


const data = {
  image: '../../.learn/assets/Dylan.png?raw=true', 
  cardTitle: 'Bob Dylan',
  cardDescription:
    'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
  button: {
    url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
    label: 'Go to wikipedia',
  },
};


function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.cardTitle} />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-description">{props.cardDescription}</p>
        <a href={props.button.url} className="button" target="_blank" rel="noopener noreferrer">
          {props.button.label}
        </a>
      </div>
    </div>
  );
}


function App() {
  return (
    <Card
      image={data.image}
      cardTitle={data.cardTitle}
      cardDescription={data.cardDescription}
      button={data.button}
    />
  );
}
