import { useState } from "react";
import TwoUser from "../../component/twoUser";

const Q2 = () => {
  const [isUpadate, setIsUpdate] = useState(false);
  const [productList, setProductList] = useState([
    {
      prodId: 1,
      place: "서울시 역삼구",
      isLiked: false,
      name: "구멍난 양말",
      price: 500000,
      User: {
        nickname: "zl존성용123",
      },
    },
    {
      prodId: 2,
      place: "서울시 역삼구",
      isLiked: false,
      name: "똥구멍난 양말",
      price: 500000,
      User: {
        nickname: "zl존성용123",
      },
    },
  ]);
  //3번째풀이
  // const _productList = [...productList];
  // const isLikedChange = _productList.find((list) => list.prodId === 2);
  // isLikedChange.isLiked = !isLikedChange.isLiked;
  // console.log(isLikedChange);
  // // setProductList(isLikedChange);

  //1번째풀이
  const isLikedChange = productList.find((list) => list.prodId === 2);
  isLikedChange.isLiked = !isLikedChange.isLiked;
  // isLikedChange.isLiked = true;
  console.log(isLikedChange);
  // setProductList(isLikedChange);
  // 셋을 해서 상태를 바꾸고 싶은 이거를 하면 자꾸 에러가 나... 근데 모르겟어...

  /*
 2번째풀이
  // const isLikedChange = () => {
  //   const isLikedItem = productList.find((list) =>
  //     list.prodId === 2 ? { ...list, isLiked: true } : list
  //   );
  //   setProductList(isLikedItem);
  //   isLikedChange();
  // };

*/
  const nickNameChange = productList.find((list) => list.prodId === 1);
  nickNameChange.User.nickname = "안주현";
  console.log(isLikedChange.User.nickname);
  console.log(productList);
  return (
    <>
      {/* <h1>Q2</h1>
      {productList.map((list, index) => (
        <TwoUser key={index} list={list} />
      ))} */}
    </>
  );
};
export default Q2;

/* 위 코드는 객체의 특정값을 찾아서 상태를 바꾸는 코드 입니다

 *{isLikedChange} : 왼쪽에있는 코드를 담아주는 변수명입니다 
 *{productList} : 순회할때 필요한 배열입니다 
 *{.} : 고차함수 메서드에 접근하는 객체접근법입니다
 *{find} : 배열의 고차함수 중 하나입니다
 *{()} : find 고차함수의 실행문을 열고 닫을 때 사용하는 소괄호입니다  
 *{()} : find의 콜백함수의 인자를 뜻할때 사용하는 소괄호입니다
 *{list} : find의 콜백함수의 각 순회의 배열 요소입니다 
 *{=>} : 화살표 함수입니다 
 *{list} : 각 순회한 배열의 요소입니다
 *{.} : 순회한 요소의 객체 접근법입니다 
 *{prodId} : 요소의 key의 이름입니다
 *{===} : 비교연산자 입니다
 *{2} : prodId가 특정 값 '2'를 의미합니다 
 *{isLikedChange} : 위의(49) 배열의 고차함수 find를 이용해 도출된 객체 요소입니다 
 *{.} : 요소의 객체 접근법입니다 
 *{isLiked} : 도출된 요소의 key의 이름입니다 
 *{=} : 대입 연산자입니다 
 *{true} : 상태를 바꿔 줄 값입니다 

 *{nickNameChange} : 왼쪽에있는 코드를 담아주는 변수명입니다 
 *{productList} : 순회할때 필요한 배열입니다 
 *{.} : 고차함수 메서드에 접근하는 객체접근법입니다
 *{find} : 배열의 고차함수 중 하나입니다
 *{()} : find 고차함수의 실행문을 열고 닫을 때 사용하는 소괄호입니다  
 *{()} : find의 콜백함수의 인자를 뜻할때 사용하는 소괄호입니다
 *{list} : find의 콜백함수의 각 순회의 배열 요소입니다 
 *{=>} : 화살표 함수입니다 
 *{list} : 각 순회한 배열의 요소입니다
 *{.} : 순회한 요소의 객체 접근법입니다 
 *{prodId} : 요소의 key의 이름입니다
 *{===} : 비교연산자 입니다
 *{1} : prodId가 특정 값 '1'를 의미합니다 
 *{nickNameChange} : 위의(68) 배열의 고차함수 find를 이용해 도출된 객체 요소입니다 
 *{.} : 요소의 객체 접근법입니다 
 *{User} : 도출된 요소의 key의 이름입니다 
 *{.} : 중첩된 요소의 객체 접근법입니다 
 *{nickname} : 중첩된 요소의 key의 이름입니다 
 *{=} : 대입 연산자입니다 
 *{""} : 문자열일때 사용합니다
 *{안주현} : 상태를 바꿔 줄 값입니다

(1) prodId가 2인 객체의 isLiked의 값을 true로 변경하세요
 [
 podId가 2일때 isLiked의 true로..
 그럼 일단.. 
 1. prodId가 2인 객체를 찾기 
 2. isLiked의 값을 true로 해보자 
 ]
(2) prodId가 1인 객체의 User의 nickName의 값을 성함으로 바꿔보세요
[
1. prodId가 1인 객체를 찾기 
2. nickName의 값 바꾸기 
]
*/
