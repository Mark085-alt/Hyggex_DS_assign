import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const options = [
  {
    label: "Home",
    path: "/",
    id: "home",
  },
  {
    label: "Flashcard",
    path: "/flashcard",
    id: "flashcard",
  },
  {
    label: "Contact",
    path: "/contact",
    id: "contact",
  },
  {
    label: "FAQ",
    path: "/faq",
    id: "faq",
  },
];

function Logo() {
  return (
    <div className="w-[191px] h-[39px]">
      <img src="/assets/logo.png" alt="error" className="object-cover" />
    </div>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden flex items-center justify-end mr-10 ">
        <button className="text-[#06286E]" onClick={clickHandler}>
          <RxHamburgerMenu fontSize={30} />
        </button>
      </div>

      {isOpen ? (
        <div className="w-full flex justify-center items-center">
          {/* main div */}
          <div className="w-10/12 flex justify-between">
            {/* logo */}
            <div className="">
              <Logo></Logo>
            </div>

            {/* navbar options */}
            <div className="hidden lg:flex gap-10 text-[18px] items-center">
              {/* Hide on smaller screens */}
              <div className="flex gap-10 text-[#3A3740]">
                {options.map((option) => (
                  <Link to={option.path} key={option.id}>
                    {option.label}
                  </Link>
                ))}
              </div>
              <div className="text-[#FFFFFF] px-[40px] py-[13px] bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-3xl">
                <button>Login</button>
              </div>
            </div>

            {/* Responsive Navbar for smaller screens */}
          </div>
        </div>
      ) : (
        <div className="overflow-hidden">
          <div className="h-[100vh] w-full mt-0 bg-white">
            <div className="flex flex-col justify-center items-center font-bold gap-24 mt-10 text-[24px]">
              {options.map((option) => (
                <Link to={option.path} key={option.id}>
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
