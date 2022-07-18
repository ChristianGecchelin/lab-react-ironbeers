import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const getBeers = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data);
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
            <Link to={`/beers/${beer.Id}`}></Link>
          </div>
        );
      })}
    </div>
  );
};

export default BeerList;
