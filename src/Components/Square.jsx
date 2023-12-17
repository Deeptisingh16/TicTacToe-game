// eslint-disable-next-line react/prop-types
const Square = ({ value, onClick, isWinningSquare }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquare ? 'winning' : '';
  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winningClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Square;

//   console.log(props.value);
//   return <div>{value}</div>;
//   console.log(children);
/* 
      <h5>render below:</h5>
      <div>{children}</div> */
