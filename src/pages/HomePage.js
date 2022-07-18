import image1 from "../assets/beers.png";
import image2 from "../assets/new-beer.png";
import image3 from "../assets/random-beer.png";
const HomePage = () => {
  return (
    <>
      <div>
        <img src={image1} alt="beers" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu est,
          iaculis ut libero ut.
        </p>
      </div>
      <div>
        <img src={image2} alt="beers" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu est,
          iaculis ut libero ut.
        </p>
      </div>
      <div>
        <img src={image3} alt="beers" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu est,
          iaculis ut libero ut.
        </p>
      </div>
      <h1>Hola pepe</h1>
      <p>no sea culiau chico</p>
    </>
  );
};

export default HomePage;
