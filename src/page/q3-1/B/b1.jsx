import { useRecoilState } from "recoil";
import { contentRecoil } from "../../../recoil/recoil";
import { useState } from "react";

const B1 = () => {
  const [show, setShow] = useState(false);
  const [content] = useRecoilState(contentRecoil);
  const onclickShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <button onClick={onclickShow}>클릭!</button>
      {show && <div>{content}</div>}
    </>
  );
};
export default B1;
/*
아 ..로직 짜기 너무 어렵네..
생각이 안나고... 다른파일 보기는 싫고..
생각한대로 하면 생각보다 프롭스드릴링이나 전역상태가 아니고.. 



*/
