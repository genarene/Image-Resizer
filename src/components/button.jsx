import "../components/button";

// styles for the buttons rendered in the button component
const buttonStyles = {
  backgroundColor: "#535E4B",
  color: "#e9ece6",
  fontSize: "inherit",
  fontWeight: "bold",
  fontFamily: "curasive",
  border: "none",
  margin: "10px",
  padding: "10px 25px",
  borderRadius: "10px",
};
// the Button component
// the Button component has two props (text, onClick)
const Button = ({ text, onClick }) => {
  return (
    <div>
      <button style={buttonStyles} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
