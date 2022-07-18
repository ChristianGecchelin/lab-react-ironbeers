const NewBeer = () => {
  const handleSubmit = (e) => {
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = { img: image, title: headline, pricePerDay: price };

    axios
      .post("https://ironbnb-m3.herokuapp.com/apartments", body)
      .then((response) => {
        // Reset the state
        setHeadline("");
        setImage("");
        setPrice(1);

        // Navigate to the `/` page
        navigate("/");
      });
  };
  return (
    <div>
      <h1>Hola pepe</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="headline"
          onChange={(e) => setHeadline(e.target.value)}
          value={headline}
        />
        <label>Image</label>
        <input
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <button type="submit">Create Apartment</button>
      </form>
    </div>
  );
};

export default NewBeer;
