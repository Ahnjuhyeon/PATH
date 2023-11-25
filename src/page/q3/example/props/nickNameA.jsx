import { useState } from "react";

const NickNameA = ({ list }) => {
  const [buttonColor, setButtonColor] = useState("black");
  const onclickNext = () => {
    setButtonColor(buttonColor === "black" ? "gray" : "black");
  };

  return (
    <>
      <span>{list.nickName}</span>
      <button style={{ backgroundColor: buttonColor }} onClick={onclickNext}>
        선택
      </button>
      <br />
    </>
  );
};
export default NickNameA;
