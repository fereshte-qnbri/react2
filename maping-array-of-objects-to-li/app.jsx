import React from 'react';

const ShowPlanets = (props) => {
  const { planets } = props;

  return (
    <ul>
      {planets.map((planet, index) => (
       
        <li key={index}>{planet}</li>
      ))}
    </ul>
  );
};

export default ShowPlanets;