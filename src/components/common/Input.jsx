const Input = ({ className, type, name, placeholder, id, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

export default Input;
