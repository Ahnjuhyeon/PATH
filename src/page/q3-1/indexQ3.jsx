import { RecoilRoot } from "recoil";
import A1 from "./A/a1";
import B1 from "./B/B1";

const Q3 = () => {
  return (
    <>
      <A1 />
      <RecoilRoot>
        <B1 />
      </RecoilRoot>
    </>
  );
};
export default Q3;
