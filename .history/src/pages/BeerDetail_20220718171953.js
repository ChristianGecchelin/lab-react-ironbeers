import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const BeerDetail = () => {
  const [beer, setBeer] = useState([]);
  const { beerId } = useParams();
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
