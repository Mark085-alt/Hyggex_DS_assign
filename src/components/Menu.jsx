import React from "react";
import { GoHome } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";

// this is current path and will be fetched from URL
const currentPath = "flashcard/mathematics/realtionandfunction";

const options = ["Flashcard", "Mathematics", "Relation and Function"];

const Menu = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex text-[18px] text-[#696671] font-medium gap-1 w-10/12 sm:flex-row flex-col">
        {/* home icon */}
        <div>
          <GoHome fontSize={30} />
        </div>

        {/* options */}
        <div className="flex gap-1 sm:flex-row flex-col">
          {options.map((option, index) => (
            <span
              className="flex justify-start items-center gap-1"
              key={index}
            >
              <FaChevronRight className="text-[#06286E]" fontSize={14} />
              <span
                className={`${
                  index === options.length - 1
                    ? "text-[#06286E]"
                    : "text-[#696671]"
                } gap-1`}
              >
                {option}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
