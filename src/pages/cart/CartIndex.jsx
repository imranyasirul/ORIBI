import React, { useState } from "react";
import Container from "../../components/common/Container";
import BreadCrump from "../../components/common/BreadCrump";
import Images from "../../components/common/Images";
import Snake from "../../assets/images/7grkegytV4qrcMb9zSQT8V.jpg";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product name 1",
      price: 44.0,
      quantity: 1,
      image: Snake,
    },
    {
      id: 2,
      name: "Product name 2",
      price: 44.0,
      quantity: 1,
      image: Snake,
    },
    {
      id: 3,
      name: "Product name 3",
      price: 44.0,
      quantity: 1,
      image: Snake,
    },
    {
      id: 4,
      name: "Product name 4",
      price: 44.0,
      quantity: 1,
      image: Snake,
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item,
      ),
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <Container>
      <div className="py-8">
        {/* Breadcrumb Section */}
        <div className="mb-14">
          <BreadCrump pageLabel="Cart" rootpage="Home" />
        </div>

        {/* Cart Table Container */}
        <div className="w-full mb-14">
          {/* Header Row */}
          <div className="bg-[#F5F5F3] grid grid-cols-4 px-5 py-4 text-base font-bold text-blackTwo">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>

          {/* Dynamic Mapable Products */}
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              const itemTotal = item.price * item.quantity;

              return (
                <div
                  key={item.id}
                  className="grid grid-cols-4 items-center px-5 py-8 border-b border-[#F0F0F0]"
                >
                  {/* Product Info & Remove */}
                  <div className="flex items-center gap-5">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-xl font-bold text-gray hover:text-red-500 transition-colors cursor-pointer"
                      title="Remove product"
                    >
                      ×
                    </button>
                    <div className="w-25 h-[100px] bg-[#F5F5F3] flex items-center justify-center overflow-hidden flex-shrink-0">
                      <Images
                        src={item.image}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-bold text-blackTwo">{item.name}</span>
                  </div>

                  {/* Product Unit Price */}
                  <div className="font-bold text-blackTwo text-xl">
                    ${item.price.toFixed(2)}
                  </div>

                  {/* Quantity */}
                  <div>
                    <div className="flex items-center border border-[#F0F0F0] w-[114px] h-[36px]">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="px-3 text-gray hover:text-black transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        className="w-full text-center focus:outline-none text-gray select-none"
                        readOnly
                      />
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="px-3 text-gray hover:text-black transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Calculated Total */}
                  <div className="font-bold text-blackTwo text-xl">
                    ${itemTotal.toFixed(2)}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-gray-500 font-bold border-b border-[#F0F0F0]">
              Your cart is empty!
            </div>
          )}

          {/* Coupon & Update Cart Options */}
          <div className="flex flex-col sm:flex-row justify-between items-center px-5 py-6 border-b border-[#F0F0F0] gap-4">
            <div className="flex items-center gap-6">
              <div className="border border-[#F0F0F0] w-[239px] h-[50px] px-4 flex items-center justify-between cursor-pointer">
                <span className="text-gray text-base">SIZE</span>
                <span className="text-gray text-xs">▼</span>
              </div>
              <button className="font-bold text-blackTwo text-base hover:underline cursor-pointer">
                Apply coupon
              </button>
            </div>
            <button className="font-bold text-blackTwo text-base hover:underline cursor-pointer">
              Update cart
            </button>
          </div>
        </div>

        {/* Cart Totals Summary */}
        <div className="flex justify-end">
          <div className="w-full lg:w-[644px]">
            <h2 className="text-2xl font-bold text-blackTwo mb-6 text-right">
              Cart totals
            </h2>

            <div className="mb-6">
              <div className="flex justify-between border border-[#F0F0F0] p-4 text-base">
                <span className="font-bold text-blackTwo">Subtotal</span>
                <span className="text-gray-white-two">
                  {subtotal.toFixed(2)} $
                </span>
              </div>
              <div className="flex justify-between border-b border-x border-[#F0F0F0] p-4 text-base">
                <span className="font-bold text-blackTwo">Total</span>
                <span className="text-blackTwo font-bold">
                  {subtotal.toFixed(2)} $
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-[#262626] text-white px-10 py-4 font-bold text-sm hover:bg-black transition-colors cursor-pointer">
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
