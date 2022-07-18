import axios from "axios";
import { useState, useEffect } from "react";
const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const getBeers = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getBeers();
  }, []);
  return (
    <div>
      <h2>Beer List</h2>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.img} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BeerList;
