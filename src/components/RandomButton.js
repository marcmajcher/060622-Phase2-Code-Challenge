import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({createRandomPlanateer}) {
  
  const randomPlaneteer = getRandomPlaneteer();
  
  function handleClick() {
    createRandomPlanateer(randomPlaneteer)
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
