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
  }, [beers]);
  return (
    <div>
      <h2>Beer List</h2>
    </div>
  );
};

export default BeerList;
