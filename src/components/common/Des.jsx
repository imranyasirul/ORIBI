

const Des = ({ text, className }) => {
  return (
    <p
      className={`text-gray text-[16px] leading-7.5 font-dm-sans font-normal ${className}`}
    >
      {text}
    </p>
  );
};

export default Des;
