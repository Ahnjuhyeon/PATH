const TwoUser = ({ list }) => {
  return (
    <>
      <div>{list.prodId}</div>
      <div>{list.place}</div>
      {/* {<div>{console.log(list.isLiked)}</div>} */}
      <div>{list.name}</div>
      <div>{list.price}</div>
      <div>{list.User.nickname}</div>
    </>
  );
};
export default TwoUser;
