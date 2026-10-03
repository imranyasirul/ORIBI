import { useState } from "react";
import Des from "../../components/common/Des";
import Container from "../../components/common/Container";
import BreadCrump from "../../components/common/BreadCrump";

// আপনার দেওয়া ফরম্যাট অনুযায়ী ডেটা তৈরি করা হয়েছে
const sidebarMenus = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
    description: (
      <>
        <p className="text-[#767676] mb-6">
          Hello <span className="text-gray-900 font-semibold">admin</span> (not{" "}
          <span className="text-gray-900 font-semibold">admin</span>?{" "}
          <button className="text-gray-900 font-semibold">Log out</button>)
        </p>
        <p className="text-[#767676] leading-relaxed max-w-3xl">
          From your account dashboard you can view your{" "}
          <span className="text-gray-900 font-semibold">recent orders</span>,
          manage your{" "}
          <span className="text-gray-900 font-semibold">
            shipping and billing addresses
          </span>
          , and{" "}
          <span className="text-gray-900 font-semibold">
            edit your password and account details
          </span>
          .
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Others",
    url: "/others",
    description: (
      <Des
        className="text-[#767676] leading-relaxed max-w-3xl"
        text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus laborum hic qui ullam nisi?"
      />
    ),
  },
  {
    id: 3,
    title: "Downloads",
    url: "/downloads",
    description: (
      <Des
        className="text-[#767676] leading-relaxed max-w-3xl"
        text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus laborum hic qui ullam nisi?"
      />
    ),
  },
  {
    id: 4,
    title: "Addresses",
    url: "/addresses",
    description: (
      <Des
        className="text-[#767676] leading-relaxed max-w-3xl"
        text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus laborum hic qui ullam nisi?"
      />
    ),
  },
  {
    id: 5,
    title: "Account details",
    url: "/account-details",
    description: (
      <Des
        className="text-[#767676] leading-relaxed max-w-3xl"
        text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus laborum hic qui ullam nisi?"
      />
    ),
  },
  {
    id: 6,
    title: "Logout",
    url: "/logout",
    description: (
      <Des
        className="text-[#767676] leading-relaxed max-w-3xl"
        text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus laborum hic qui ullam nisi?"
      />
    ),
  },
];

const MyAccount = () => {
  const [activeUrl, setActiveUrl] = useState("/dashboard");

  const activeMenuData = sidebarMenus.find((menu) => menu.url === activeUrl);

  return (
    <Container>
      <div>
        <BreadCrump pageLabel="My Account" rootpage="Home" />
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          <div className="w-full md:w-[250px] shrink-0">
            <ul className="flex flex-col">
              {sidebarMenus.map((menu) => (
                <li
                  key={menu.id}
                  onClick={() => setActiveUrl(menu.url)}
                  className={`py-5 border-b border-[#F0F0F0] cursor-pointer transition-colors ${
                    activeUrl === menu.url
                      ? "font-bold text-gray-900"
                      : "text-[#767676] hover:text-gray-900"
                  }`}
                >
                  {menu.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex-1 pt-4">
            {activeMenuData && activeMenuData.description}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyAccount;
