import React from "react";
import Container from "../../common/Container";
import { FaTruck, FaUndo } from "react-icons/fa";

const Commitment = () => {
  const policyData = [
    {
      id: 1,
      icon: <span className="text-2xl font-bold text-[#262626]">2</span>,
      text: "Two years warranty",
    },
    {
      id: 2,
      icon: <FaTruck className="text-xl text-[#262626]" />,
      text: "Free shipping",
    },
    {
      id: 3,
      icon: <FaUndo className="text-lg text-[#262626]" />,
      text: "Return policy in 30 days",
    },
  ];

  return (
    <div className="w-full border-b border-[#F0F0F0] py-7 bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 px-4 sm:px-0">
          {policyData.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              {item.icon}
              <span className="text-base text-[#6D6D6D] font-normal">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Commitment;
