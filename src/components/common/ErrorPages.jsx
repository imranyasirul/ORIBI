import { NavLink } from "react-router";

const ErrorPages = () => {
  return (
    <div className="flex justify-center text-center items-center flex-col min-h-screen bg-black text-white ">
      <h6 className=" text-4xl font-semibold mb-4 drop-shadow-[2px_2px_2px_white]">
        <span className="text-9xl font-bold text-red-700 block mb-4 drop-shadow-[5px_5px_5px_white] animate-bounce">
          404
        </span>
        - পেজ গায়েব! 🛸
      </h6>
      <p className="text-yellow-300 text-2xl max-w-170 mb-8 leading-12">
        আপনি যে পেজটি খুঁজছেন, সেটা এলিয়েনরা তুলে নিয়ে গেছে! 👽 বিনা টিকিটে
        মঙ্গল গ্রহে যাওয়ার আগে তাড়াতাড়ি হোমে ফিরে যান।
      </p>
      <div className="">
        <NavLink
          to={"/"}
          className="flex items-center gap-2 bg-red-500 hover:bg-green-600 text-gray-900 font-bold py-3 px-6 rounded-full shadow-[0_0_15px_rgba(74,222,128,0.5)] hover:shadow-[0_0_25px_rgba(74,222,128,0.8)] transition-all duration-300 transform hover:-translate-y-1"
        >
          🏠 হোমে ফিরে চলুন
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPages;
