import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BreadCrump = ({ pageLabel, rootpage }) => {
  return (
    <div>
      <span className="text-[49px] font-bold mb-3 text-blackTwo font-dm-sans ">{pageLabel}</span>
      <div className="text-[12px] text-gray mb-31.75 font-dm-sans flex items-center">
        <span>{rootpage}</span>
        <MdOutlineKeyboardArrowRight />
        <span>{pageLabel}</span>
      </div>
    </div>
  );
};

export default BreadCrump;
