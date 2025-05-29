import React from 'react';
import ShowPlanets from './ShowPlanets'; 
const App = () => {
  const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

  return (
    <div>
      <h1>List of Planets</h1>
      <ShowPlanets planets={planets} />
    </div>
  );
};

export default App;