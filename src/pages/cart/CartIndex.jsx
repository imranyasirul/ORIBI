import React from "react";
import Container from "../../components/common/Container";
import BreadCrump from "../../components/common/BreadCrump";
import Images from "../../components/common/Images";
import Snake from "../../assets/images/7grkegytV4qrcMb9zSQT8V.jpg";

const CartPage = () => {
  return (
    <Container>
      <div className="">
        <div className="mb-14">
          <BreadCrump pageLabel="Cart" rootpage="Home" />
        </div>

        <div className="w-full mb-14">
          <div className="bg-[#F5F5F3] grid grid-cols-4 px-5 py-4 text-base font-bold text-blackTwo">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>

          <div className="grid grid-cols-4 items-center px-5 py-8 border-b border-[#F0F0F0]">
            <div className="flex items-center gap-5">
              <button className="text-xl font-bold text-gray hover:text-red-500 transition-colors">
                ×
              </button>
              <div className="w-25 h-[100px] bg-[#F5F5F3] flex items-center justify-center">
                <Images src={Snake} className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-blackTwo">Product name</span>
            </div>

            <div className="font-bold text-blackTwo text-xl">$44.00</div>

            <div>
              <div className="flex items-center border border-[#F0F0F0] w-[114px] h-[36px]">
                <button className="px-3 text-gray hover:text-black transition-colors">
                  -
                </button>
                <input
                  type="text"
                  value="1"
                  className="w-full text-center focus:outline-none text-gray"
                  readOnly
                />
                <button className="px-3 text-gray hover:text-black transition-colors">
                  +
                </button>
              </div>
            </div>

            <div className="font-bold text-blackTwo text-xl">$44.00</div>
          </div>

          <div className="flex justify-between items-center px-5 py-6 border-b border-[#F0F0F0]">
            <div className="flex items-center gap-6">
              <div className="border border-[#F0F0F0] w-[239px] h-[50px] px-4 flex items-center justify-between cursor-pointer">
                <span className="text-gray text-base">SIZE</span>
                <span className="text-gray text-xs">▼</span>
              </div>
              <button className="font-bold text-blackTwo text-base hover:underline">
                Apply coupon
              </button>
            </div>
            <button className="font-bold text-blackTwo text-base hover:underline">
              Update cart
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-full lg:w-[644px]">
            <h2 className="text-2xl font-bold text-blackTwo mb-6 text-right">
              Cart totals
            </h2>

            <div className="mb-6">
              <div className="flex justify-between border border-[#F0F0F0] p-4 text-base">
                <span className="font-bold text-blackTwo">Subtotal</span>
                <span className="text-gray-white-two">389.99 $</span>
              </div>
              <div className="flex justify-between border-b border-x border-[#F0F0F0] p-4 text-base">
                <span className="font-bold text-blackTwo">Total</span>
                <span className="text-blackTwo font-bold">389.99 $</span>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-[#262626] text-white px-10 py-4 font-bold text-sm hover:bg-black transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
