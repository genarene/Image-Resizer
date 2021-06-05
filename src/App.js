import "./App.css";
import Image from "./components/Image";
import Lemons from "./components/assets/lemons.jpg";
import Strawberry from "./components/assets/strawberry.jpg";
import Pineapple from "./components/assets/pineapple.jpg";
import Veges from "./components/assets/veges.jpg";

// styling the div that contains the images
const imageContainer = {
  display: "grid",
  backgroundColor: "#E9E6E2",
  gridTemplateColumns: "1fr 1fr",
};

// the App component renders the Image component
function App() {
  return (
    <>
      <h2
        style={{
          margin: 0,
          paddingTop: "1em",
          textAlign: "center",
          backgroundColor: "#E9E6E2",
          color: "#535E4B",
          fontSize: "1.8rem",
          fontWeight: "bold",
        }}
      >
        Click to make your image morph
      </h2>

      {/* div containing the images */}
      <div style={imageContainer}>
        <Image width={350} height={500} url={Lemons} />
        <Image width={350} height={500} url={Pineapple} />
        <Image width={350} height={500} url={Strawberry} />
        <Image width={350} height={500} url={Veges} />
      </div>
    </>
  );
}

export default App;
