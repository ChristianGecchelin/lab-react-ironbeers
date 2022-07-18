import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NewBeer = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(1);
  const [contributedBy, setContributedBy] = useState("1");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = { img: image, title: headline, pricePerDay: price };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        // Reset the state
        setName("");
        setImage("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");

        // Navigate to the `/` page
        navigate("/beers");
      });
  };
  return (
    <div>
      <h1>Hola pepe</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Image</label>
        <input
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>First Brewed</label>
        <input
          type="text"
          name="pricePerDay"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstBrewed}
        />
        <label>Brewers Tips</label>
        <input
          type="text"
          name="pricePerDay"
          onChange={(e) => setBrewersTips(e.target.value)}
          value={brewersTips}
        />
        <label>Price per Day</label>
        <input
          type="text"
          name="pricePerDay"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={price}
        />
        <label>Price per Day</label>
        <input
          type="text"
          name="pricePerDay"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={price}
        />
        <label>Price per Day</label>
        <input
          type="text"
          name="pricePerDay"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={price}
        />

        <button type="submit">Create Apartment</button>
      </form>
    </div>
  );
};

export default NewBeer;
