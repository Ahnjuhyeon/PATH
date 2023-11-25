import { useState } from "react";
import A2 from "./a2";

const A1 = () => {
  const [content, setContent] = useState("안녕하세요 프롭스 드릴링입니다");

  return (
    <div>
      <A2 content={content} />
    </div>
  );
};
export default A1;

/*

 const A1 = () => {
  return <></>;
};
export default A1
*/
