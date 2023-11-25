import { useState } from "react";

const NameA = ({ list }) => {
  const [buttonColor, setButtonColor] = useState("black");
  const onclickNext = () => {
    setButtonColor(buttonColor === "black" ? "gray" : "black");
  };

  return (
    <>
      <span>{list.name}</span>
      <button style={{ backgroundColor: buttonColor }} onClick={onclickNext}>
        선택
      </button>
      <br />
    </>
  );
};
export default NameA;

/*
선택을 누르면 

*/
