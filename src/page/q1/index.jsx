import { useState } from "react";
import { users } from "../../mock/q1_mock";
import OneUser from "../../component/oneUser";

const Q1 = () => {
  const [mockdata, setMockdata] = useState(users);
  //   console.log(mockdata);
  const onSubmitAdd = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const nickName = e.target.nickName.value;
    const age = e.target.age.value;
    // console.log(nickName, age);
    // 값은 가져와지고 이제 추가를 누르면 기존의 값을 복사하고 그뒤에 추가할 객체를 붙여..
    const newaddlist = {
      id: Math.floor(Math.random() * 10000),
      name,
      nickName,
      age,
    };
    setMockdata([...mockdata, newaddlist]);
  };

  return (
    <>
      <form onSubmit={onSubmitAdd}>
        <input name="name" />
        <input name="nickName" />
        <input name="age" />
        <button>추가</button>
      </form>
      {mockdata.map((list, index) => (
        <OneUser
          key={index}
          list={list}
          mockdata={mockdata}
          setMockdata={setMockdata}
        />
      ))}
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default Q1;

/* 위 코드는 추가할 수 있는 폼태그가 있고, mockdata 순회하여 요소의 길이만큼  OneUser 반환하는 코드입니다.
*{const} : 변수를 할당하기 위해 쓰입니다
 *{[]} : useState 훅을 사용할때 쓰이는 대괄호입니다
 *{mockdata} : 현재의 상태값을 뜻합니다
 *{setMockdata} : 상태값을 변경할때 사용하는 함수입니다
 *{=} : 오른쪽의 결과를 왼쪽에 대입하는 연산자입니다 
 *{useState} : 리액트에서 제공하는 훅 중 하나이며, 상태를 추가하거나 바꿀때 사용합니다
 *{()} : useState의 초기값을 담은 소괄호입니다 
 *{users} : useState의 초기값이며, users는 배열이며 배열안에는 객체형태의 각각의 data(키:값)가 담아져 있습니다

 *{onSubmitAdd} : form 태그에서 사용한 이벤트 함수명입니다
 *{()} : 이벤트 객체를 받아와 폼에 제출하는 소괄호입니다
 *{=>} : 함수의 화살표 함수를 뜻합니다
 *{{}} : 중괄호는 안에 동작할 코드를 적는데 사용합니다
 *{e.preventDefault()} : 이벤트함수에 일어날 수 있는 기본동작을 막아줍니다(새로고침)
 *{name} : 변수명입니다
 *{e} : 이벤트가 생겼을 때 함수에 전달되는 객체입니다
 *{.} : 객체 접근법입니다.
 *{target} : 폼의 요소를 가르키는 것입니다
 *{name} : 폼의 요소의 "name"의 값을 뜻합니다
 *{value} : 폼의 요소의 "name"에 해당되는 값, 사용자가 입력한 값을 말합니다
 *{newaddlist} : 추가를 하기위한 새로운 변수명입니다
 *{{}} : 추가할 객체의 키와값을 담기위한 중괄호입니다
 *{id} : users 배열의 객체안에 id라는 키가있고, 그에 해당됩니다
 *{Math.floor} : 소수점 이하 버리는 빌트인 객체입니다
 *{()} : Math.floor의 실행문입니다
 *{Math.random} : 0~1사이의 무작위 숫자가 나오는 빌트인 객체입니다
 *{()} : Math.random의 실행문입니다
 *{*} : 곱하는 연산자입니다
 *{10000} : 0~10000의 숫자입니다
 *{name,} : name: name이 같으면 name,로 표기할 수 있습니다
 *{setMockdata()} : 상태값을 변경할 함수에 () 실행문인 소괄호입니다
 *{[]} : 배열로 상태를 변경해야 하기때문에 대괄호를 사용합니다 
 *{...mockdata} : 기존의 원본의 객체인 mockdata의 복사 객체입니다 
 *{,} : 객체 뒤에 값을 나열할 수 있도록합니다 
 *{newaddlist} : 추가를 위해 새로 만든 객체입니다 

 return
 *{form} : 폼 태그입니다
 *{onSubmit} : 폼이 동작할때 실행되는 이벤트입니다
 *{=} : 오른쪽의 결과를 왼쪽에 대입하는 연산자입니다 
 *{{}} : 이벤트 함수를 감싸는 중괄호입니다
 *{onSubmitAdd} : 폼이 동작할때 실행되는 이벤트 함수명입니다
 *{input} :폼 요소중 하나인 input 태그입니다 
 *{name} : input의 name을 뜻합니다 
 *{"name"} : input의 name의 값을 말합니다
 *{button} : 버튼 태그입니다 form 태그 안에있어 따로 이벤트를 주지 않아도 사용할 수 있습니다

 *{mockdata} : 순회할 때 필요한 배열입니다 users 입니다
 *{”.”}: 배열의 고차함수 메서드에 접근하기 위한 객체 접근법입니다.
 *{map}: 배열의 고차함수 map입니다 순회할때 사용합니다
 *{()}: map의 실행문에 사용하는 소괄호입니다.
 *{()}: map의 콜백함수의 인자를 받을 때 사용하는 소괄호 입니다.
 *{list}: map의 콜백함수의 첫번째 인자이자 각 순회하는 배열 요소를 뜻합니다.
 *{index}: map의 콜백함수의 두번째 인자이자 각 순회의 인덱스를 뜻합니다.
 *{=>} : 함수의 화살표 함수를 뜻합니다
 *{()} : 여러 요소를 묶어주는 소괄호 입니다 
 *{<OneUser/>} : 컴포넌트를 임폴트 해준 것이며, map을 사용하여 순회한 요소를 프롭스로 받아 컴포넌트로 반환해줍니다
 *{key} : 각 요소를 식별하기 위해 제공해줍니다 ..그릇..? 뭐.. 라하더라...
 *{index} : 각 요소를 식별하기 위한 고유의 값 입니다
 
 props
 *{list} : 아래(106)  map의 순회한 배열의 요소의 이름입니다 
 *{list} :  map의 순회한 배열의 요소입니다 이는 앞서 list(98)과 같아야 합니다
 *{mockdata} : 기존의 초기값인 원본의 이름입니다 
 *{mockdata} : 기존의 초기값인 원본의 배열의 값입니다 
 *{setMockdata} : 상태값을 변경할 때 사용할 함수의  
 *{setMockdata} : 상태값을 변경할 때 사용할 함수입니다 
 */
