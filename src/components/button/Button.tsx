import "./button.css";

interface ButtonProps {
  textbutton: string;
  classname: string;
  onClickFunction?: () => void;
}

const Button = ({ textbutton, classname, onClickFunction }: ButtonProps) => {
  return (
    <button onClick={onClickFunction} className={`button ${classname}`}>
      {textbutton}
    </button>
  );
};

export default Button;
