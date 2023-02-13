const Button = (props) => {
  const name = "" + props.className;
  return (
    <button className={name} type="button">
      {props.text}
    </button>
  );
};
export default Button;
