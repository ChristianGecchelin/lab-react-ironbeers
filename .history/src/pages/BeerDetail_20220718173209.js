import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const BeerDetail = () => {
  const [beer, setBeer] = useState([]);
  const { beerId } = useParams();
  const getBeer = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log(response.data);
        setBeer(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getBeer();
  }, []);
  return (
    <div>
      <img src={beer.image_url} alt={beer.name} height="200px" />
      <h2>${beer.name}</h2>
    </div>
  );
};

export default BeerDetail;
