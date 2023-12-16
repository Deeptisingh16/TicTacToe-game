// eslint-disable-next-line react/prop-types
const Square = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};
//   console.log(props.value);
//   return <div>{value}</div>;
//   console.log(children);
/* 
      <h5>render below:</h5>
      <div>{children}</div> */
export default Square;
