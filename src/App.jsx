import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

/*
- 위 코드는 router.jsx에서 사용한 경로 컴포넌트를 임폴트한 코드입니다 
*{<} : jsx에서 열린 태그이며 컴포넌트를 선언할때 사용하는 태그 입니다
*{RouterProvider} : 라우터를 사용할 범위를 감싸주는 태그입니다
* {router} : 컴포넌트로 전달되는 속성의 이름입니다
*{=} : 뒤에 오는 것은 앞의 속성의 값을 나타냅니다
*{router} : router.jsx에서 export한 컴포넌트를 해당 jsx에서 임폴트하여 사용한 객체입니다
*{>} :jsx에서 닫힌 태그이며, 해당 컴포넌트를 닫는 태그입니다
*{/} : 닫힌 태그입니다
*/
