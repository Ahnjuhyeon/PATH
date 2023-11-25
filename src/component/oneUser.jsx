import { useRef, useState } from "react";

const OneUser = ({ list, mockdata, setMockdata }) => {
  //   console.log(list);
  const [isEditbox, setIsEditbox] = useState(false);
  //수정 로직에 사용할 useRef
  const editRef = useRef(null);
  //list 는 객체
  // mockdata 는 기존
  // setmockdata 는 상태를 바꿀

  //삭제
  const onClickDelete = () => {
    const deleteItem = mockdata.filter((item) => item.id !== list.id);
    setMockdata(deleteItem);
  };

  //수정클릭하면 기존의 div가 input 바뀌는..
  //수정
  const onClickEdit = () => {
    if (!isEditbox) return setIsEditbox(true);
    // isEditbox true가 아니라면 setIsEditbox(true)를 반환해라
    // 이걸 해야 인풋창으로
    const _mockdata = [...mockdata];
    const editItem = _mockdata.find((item) => item.id === list.id); //객체 찾기
    editItem.nickName = editRef.current.value; //이러면 내가 쓴 값이 나오지
    console.log(editItem.nickName); //찍혓지 여기에
    setMockdata(_mockdata); // 복사한 배열로 상태를 바꾼다
    setIsEditbox(false); // 이게 좀 헷갈리네 다시 true->false로 바꿔줌으로써 div로 돌려놓기
  };

  return (
    <>
      <div>name : {list.name}</div>

      {isEditbox ? (
        <input ref={editRef} defaultValue={list.nickName}></input>
      ) : (
        <div>nickName : {list.nickName}</div>
      )}

      <div>age : {list.age}</div>
      <button onClick={onClickEdit}>수정</button>
      <button onClick={onClickDelete}>삭제</button>
      <hr />
    </>
  );
};
export default OneUser;

/*위 코드는 Q1서 프롭스를 받아 각 순회한 요소를 반환해주는 컴포넌트이고, 삭제로직이 있는 코드입니다 



 *{OneUser} :각 순회한 요소를 반환해줄 코드를 담고 있는 변수명입니다 
 *{()} : 콜백함수이며, 인자를 받을 수 있습니다
 *{{}} : 인자가 객체상태로 받기위해 감싸는 중괄호입니다
 *{=>} : 함수의 화살표 함수를 뜻합니다
 *{{}} : 중괄호는 안에 동작할 코드를 적는데 사용합니다
 *{list} : Q1에서 map으로 각 순회하는 배열 요소의 객체이며 프롭스를 통해 받았습니다 
 *{mockdata} : Q1에서 useState의 초기값을 프롭스를 통해 받았습니다
 *{setMockdata} :Q1에서 useState의 상태를 바꿀 값을 프롭스를 통해 받았습니다
 *{[]} : useState 훅을 사용할때 쓰이는 대괄호입니다
 *{isEditbox} : 초기값은 담은 함수이며 현재 상태입니다
 *{setIsEditbox} :true로 상태를 가지고 있고, 상태의 값을 바꿀 때 사용합니다
 *{useState} : 리액트에서 제공하는 훅 중 하나이며, 상태를 추가하거나 바꿀때 사용합니다
 *{()} : 초기값을 담을 소괄호 입니다 
 *{false} : 기본값을 false로 하고 싶기 때문에 true와 false중 false로 해놨습니다

 *{editRef1} : useRef 훅을 사용할 변수명입니다 
 *{useRef} :리액트에서 제공하는 훅 중 하나이며, 랜더해도 값이 유지되는걸 원할때 혹은 태그의 접근할때 사용됩니다 
 *{()} : 초기값을 담을 소괄호입니다
 *{null} : 기본 초기값을 null로 하고싶어 null로 해놨습니다

delete
 *{onClickDelete} : 클릭이벤트함수명입니다 
 *{()} : 콜백함수의 소괄호이며, 매개변수를 받을 수 있습니다
 *{=>} : 함수의 화살표 함수를 뜻합니다
 *{{}} : 중괄호는 안에 동작할 코드를 적는데 사용합니다
 *{deleteItem} : 삭제 코드를 담을 떄 필요한 변수명입니다
 *{=} : 대입연산자이며 왼쪽의 내용을 오른쪽에 담아줄 때 사용합니다 
 *{mockdata} : useState의 초기 값이며 순회할 때 필요한 배열입니다 
 *{.} : 메서드에 접근하기 위한 객체 접근법입니다.
 *{filter} : 배열의 고차함수 filter입니다
 *{()} : filter의 실행문을 열고 닫을때 사용하는 소괄호입니다
 *{()} : filter의 콜백함수 인자를 뜻할 때 사용하는 소괄호입니다
 *{item} : filter의 인자로 각 순회의 요소를 뜻합니다
 *{=>} : 함수의 화살표 함수를 뜻합니다
 *{item} : filter를 순회한 요소입니다 
 *{.} : 순회한 요소의 객체 접근법입니다 
 *{id} : 요소의 객체의 key 의 이름이 'id'입니다
 *{!==} : 비교 연산자입니다
 *{list} : 요소의 객체입니다 
 *{.} : 요소 객체의 접근법입니다
 *{id} : 객체의 key의 이름이 'id'입니다
 *{setMockdata} : 상태를 바꿀 useState의 함수입니다 
 *{()} : setMockdata 실행문을 열고 닫을때 사용하는 소괄호입니다
 *{deleteItem} : setMockdata()로 상태를 바꿀 때 실행하기 위한 동작을 담은 변수명입니다 

edit

 *{onClickEdit} : 이벤트 함수명입니다
 *{()} : 콜백함수의 소괄호이며, 매개변수를 받을 수 있습니다
 *{=>} : 함수의 화살표 함수를 뜻합니다
 *{{}} : 중괄호는 안에 동작할 코드를 적는데 사용합니다
 *{if} : 조건문입니다
 *{()} : 실행할 소괄호입니다 
 *{!isEditbox} : isEditbox의 부정문을 말합니다 (현재의 값의 반대) 
 *{return} : 탈출문이며, 반환할 때도 쓰입니다
 *{setIsEditbox} : 반환할 내용입니다
 *{()} : 반환할 값을 실행할 내용을 감싸는 소괄호입니다 
 *{true} : 실행 할 값입니다
 *{_mockdata} : 왼쪽의 내용을 담은 변수명입니다
 *{=} : 대입연산자입니다
 *{[]} : mockdata가 배열이기 때문에 대괄호로 배열로 해주었습니다
 *{...mockdata} : 복사한 배열입니다 
 *{editItem} : 왼쪽의 코드를 담는 변수명입니다
 *{_mockdata} : 기존의 배열을 복사한 배열입니다
 *{.} : 고차함수 메서드에 접근하는 객체접근법입니다
 *{find} : 배열의 고차함수 중 하나입니다
 *{()} : find 고차함수의 실행문을 열고 닫을 때 사용하는 소괄호입니다  
 *{()} : find의 콜백함수의 인자를 뜻할때 사용하는 소괄호입니다
 *{item} : find의 콜백함수의 각 순회의 배열 요소입니다
 *{=>} :화살표 함수입니다 
 *{item} : 각 순회한 배열의 요소입니다
 *{.} : 순회한 요소의 객체 접근법입니다 
 *{id} :순회한 요소의 객체 key의 이름입니다
 *{===} : 비교연산자입니다
 *{list} : 프롭스로 받은 객체입니다
 *{.} : 객체 접근법입니다 
 *{id} : 프롭스로 받은 객체의 key의 이름입니다
 *{editItem} : 위의(113) 배열의 고차함수 find를 이용해 도출된 객체 요소입니다 
 *{.} : 요소의 객체 접근법입니다 
 *{nickName} : 요소의 key 이름입니다
 *{=} : 대입연산자입니다
 *{editRef} : useRef로 돔에 접근할 수 있도록 한 함수명입니다
 *{.} : 속성에 접근하는 접근법입니다
 *{current} : editRef로 돔에 접근한 현재의 값에 접근합니다   *
 *{.} : current 속성에 접근하는 접근법입니다
 *{value} :current로 접근한 현재의 속성의 값입니다

   setMockdata(_mockdata); // 복사한 배열로 상태를 바꾼다
    setIsEditbox(false); // 이게 좀 헷갈리네 다시 true->false로 바꿔줌으로써 div로 돌려놓기
 *{setMockdata} : useState로 상태를 바꿀 함수명입니다
 *{()} : 실행문을 열고 닫는 소괄호입니다 
 *{_mockdata} : 기존의 배열을 복사한 배열입니다
 *{setIsEditbox} : 바꿔줄 상태의 값입니다
 *{()} : 실행문을 열고 닫는 소괄호입니다
 *{false} : 동작할 상태의 내용입니다
 
retrun
 *{isEditbox} : useState 함수이며, 상태가 true 때 그에 맞는 상태를 보여주기 위함입니다
 *{?} : 삼항 연산자입니다 
 *{()} : 여러 요소를 묶어주는 소괄호 입니다
 *{<>} : jsx에서 열리고 닫힌 태그이며, 해당 컴포넌트를 열고 닫는 태그입니다
 *{input} : 폼요소중 하나입니다 
 *{ref} : 오른쪽에 사용되는 함수를 담는 이름입니다 
 *{=} : 대입 연산자 입니다 
 *{editRef} :useRef를 담은 변수명입니다 
 *{defaultValue} : 기본으로 보여질 내용을 담을 값을 설정할 때 사용합니다  
 *{{}} : 보여질 객체를 담습니다
 *{list} : list의 객체의 값입니다 
 *{.} : 객체 접근법입니다 
 *{nickName} :객체의 key 이름입니다 
 *{:} : 삼항 연산자입니다 
 *{button} : 버튼을 줄 수 있는 태그입니다 
 *{onClick} : 클릭시 동작하는 이벤트 기능입니다
 *{onClickEdit} : 클릭 시 실행 될 이벤트 함수명입니다 

 */
