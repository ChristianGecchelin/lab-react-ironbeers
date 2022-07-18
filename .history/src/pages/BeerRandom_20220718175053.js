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
      <h1>{randomBeer.name}</h1>
    </div>
  );
};

export default BeerRandom;
