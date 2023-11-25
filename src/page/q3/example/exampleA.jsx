import { useState } from "react";
import NameA from "./props/nameA";
import NickNameA from "./props/nickNameA";
import { useNavigate } from "react-router-dom";

const ExampleA = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(true);
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "김성용",
      nickName: "zl존성용123",
      age: 20,
    },
    {
      id: 2,
      name: "신짱구",
      nickName: "나는야신짱구",
      age: 30,
    },
    {
      id: 3,
      name: "신짱아",
      nickName: "짱구여동생",
      age: 40,
    },
  ]);
  const onclickNext = () => {
    setIsShow((prev) => !prev);
  };

  const onclickNavi = () => {
    navigate("/Navi");
  };
  return (
    <>
      {isShow && (
        <>
          <p>Name</p>
          {productList.map((list, index) => (
            <NameA key={index} list={list} />
          ))}
          <button onClick={onclickNext}>이동</button>
        </>
      )}
      {!isShow && (
        <>
          <p>NickName</p>
          {productList.map((list, index) => (
            <NickNameA key={index} list={list} />
          ))}
          <button onClick={onclickNavi}>이동</button>
        </>
      )}
    </>
  );
};
export default ExampleA;
