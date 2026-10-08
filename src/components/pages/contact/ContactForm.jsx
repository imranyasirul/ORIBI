import React from "react";


import Container from "../../common/Container";
import BreadCrump from "../../common/BreadCrump";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <Container>
      <div className="pb-35">
        <div className=" pt-31">
          <BreadCrump pageLabel="Contacts" rootpage="Home" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-8">Fill up a Form</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name here"
                required
                className="border-b border-gray-300 py-2 outline-none focus:border-black text-sm bg-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email here"
                required
                className="border-b border-gray-300 py-2 outline-none focus:border-black text-sm bg-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1">Message</label>
              <textarea
                placeholder="Your message here"
                rows="3"
                required
                className="border-b border-gray-300 py-2 outline-none focus:border-black text-sm resize-none bg-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#222222] hover:bg-black text-white font-medium py-3 px-10 text-sm mt-4 w-max transition duration-300"
            >
              Post
            </button>
          </form>
        </div>
      </div>

      <div></div>
    </Container>
  );
};

export default ContactForm;
