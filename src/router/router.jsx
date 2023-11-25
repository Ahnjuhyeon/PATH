import { createBrowserRouter } from "react-router-dom";
import Week1 from "../page";
import NaviA from "../page/q3/example/props/naviA";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Week1 />,
  },
  {
    path: "/Navi",
    element: <NaviA />,
  },
]);
/* 위 코드는 jsx는 싱글페이지(SPA)이기 때문에 url에 따라 화면을 보여주기 위한 router 라이브러리를 사용한 코드입니다
*{export} : 해당 컴포넌트를 내보내기하고 다른 컴포넌트에서도 import하여 사용하기 위해 쓰입니다
*{const} : 변수를 할당하기 위해 쓰입니다
*{router} : 변수명 입니다
*{createBrowserRouter} : 화면을 보여주기위한 router 라이브러리 함수입니다 
*{(} : 함수 호출할 때 사용하는 소괄호입니다
*{[} : key와 value값을 가진 객체를 감싸는 대괄호입니다
*{{}} : key와 value값을 가진 객체입니다
*{path} :url 뒤에 오는 주소입니다
*{"/"} : url의 뒤에 오는 주소의 값입니다
*{element} : 불러올 컴포넌트입니다
*{<Week1 />} : 불러올 컴포넌트의 값입니다

*/
