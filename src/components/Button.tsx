type ButtonType = {
  title: string;
  className?: string;
  onClick?: () => void;
};
const Button = ({ title, className, onClick }: ButtonType) => {
  return (
    <button className={className} onClick={onClick} type="submit">
      {title}
    </button>
  );
};

export default Button;
