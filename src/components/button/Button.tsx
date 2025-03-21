import "./button.css";

interface ButtonProps {
  textbutton: string;
  classname?: string;
  type?: "button" | "submit" | "reset";
  onClickFunction?: () => void;
}

const Button = ({
  textbutton,
  classname,
  onClickFunction,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClickFunction}
      className={`button ${classname}`}
    >
      {textbutton}
    </button>
  );
};

export default Button;
