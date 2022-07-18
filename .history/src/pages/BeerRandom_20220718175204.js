import axios from "axios";
import { useState, useEffect } from "react";

const BeerRandom = () => {
  const [randomBeer, setRandomBeer] = useState("");
  const getRandomBeer = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log(response.data);
        setRandomBeer(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getRandomBeer();
  }, []);
  return (
    <div>
      <img src={randomBeer.image_url} alt={randomBeer.name} height="200px" />
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  );
};

export default BeerRandom;
