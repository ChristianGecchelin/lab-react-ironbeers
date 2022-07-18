import axios from "axios";
import { useState, useEffect } from "react";

const BeerDetail = () => {
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
      <h2>Beer2</h2>
    </div>
  );
};

export default BeerDetail;
