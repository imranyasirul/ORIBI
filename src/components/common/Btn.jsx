import { useNavigate } from "react-router";

const Btn = ({ label, onClick, className, type, url }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (url) {
      navigate(url);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      className={`bg-blackTwo cursor-pointer transition-all duration-300 border border-blackTwo hover:bg-transparent text-white hover:text-blackTwo px-20 py-4   text-sm font-bold hover:bg-black transition-colors ${className}`}
    >
      {label}
    </button>
  );
};

export default Btn;
