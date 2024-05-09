import React, { useState } from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { MdLightbulbOutline } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { BiFullscreen } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const menu = ["Study", "Quiz", "Test", "Game", "others"];

const questions = [
  "9 + 6 + 7x - 2x - 3",
  "9 + 5 + 7x - 2x - 3",
  "9 + 4 + 7x - 2x - 3",
  "9 + 3 + 7x - 2x - 3",
  "9 + 2 + 7x - 2x - 3",
  "9 + 1 + 7x - 2x - 3",
  "9 + 0 + 7x - 2x - 3",
  "8 + 0 + 7x - 2x - 3",
  "7 + 0 + 7x - 2x - 3",
  "6 + 0 + 7x - 2x - 3",
];

const Flashcard = () => {
  const [option, setOption] = useState(menu[0]);

  const [problemId, setProblemId] = useState(0);

  // function to move on provious problem
  function prevHandler() {
    // if problem  is first then return
    if (problemId < 1) return;
    setProblemId(problemId - 1);
  }

  // function to move on next problem
  function nextHandler() {
    // if problem  is last then return
    if (problemId >= questions.length - 1) return;
    setProblemId(problemId + 1);
  }

  return (
    <div className="min-h-screen w-full flex-col justify-center items-center flex overflow-hidden">
      {/* Question display section */}
      <div className="flex flex-col gap-10">
        {/* Menubar */}
        <div className="flex justify-center items-center sm:gap-10 gap-2">
          {menu.map((menuItem) => (
            <button onClick={() => setOption(menuItem)} key={menuItem}>
              <span
                className={`sm:text-xl text-lg transition-all duration-200 ease-in-out border-b-2 pb-3 sm:px-3 px-1 ${
                  menuItem === option
                    ? "font-bold border-[#06286E] text-[#06286E]"
                    : "text-[#696671] border-white font-medium"
                }`}
              >
                {menuItem}
              </span>
            </button>
          ))}
        </div>
        {/* Question section  | Controls section */}
        <div>
          {/* Question section  */}
          <div className="sm:w-[712px] text-white justify-center items-center text-center flex rounded-3xl h-96 bg-gradient-to-bl from-[#051A91] to-[#1F80EB]  relative">
            {/* button for sound and hint */}
            <div className="w-full absolute top-0 sm:p-8 p-9 justify-between items-center flex">
              <button className="">
                <MdLightbulbOutline fontSize={35} />
              </button>

              <button className="">
                <HiMiniSpeakerWave fontSize={35} />
              </button>
            </div>

            {/* Main question display */}
            <div className="flex justify-center items-center w-full">
              <span className="font-semibold sm:text-4xl text-3xl">
                {questions[problemId]}
              </span>
            </div>
          </div>

          {/* Control section */}
          <div className="w-full flex justify-between items-center px-12 py-8 mr-3">
            {/* Reload button */}
            <button className="text-[#06286E]">
              <TbReload fontSize={30} />
            </button>

            {/* Previous | Next button */}
            <div className=" flex justify-center sm:gap-11 gap-5 items-center">
              {/* Previous button */}
              <button
                onClick={prevHandler}
                className="bg-gradient-to-b rounded-full text-white p-2 from-[#06286E] to-[#164EC0]"
              >
                <FaChevronLeft fontSize={30} />
              </button>

              {/* Question index */}
              <div>
                <span className="text-2xl font-bold">
                  {problemId + 1}/{questions.length}
                </span>
              </div>

              {/* Next button */}
              <button
                onClick={nextHandler}
                className="bg-gradient-to-b rounded-full text-white p-2 from-[#06286E] to-[#164EC0]"
              >
                <FaChevronRight fontSize={30} />
              </button>

            </div>

            {/* Full-Screen button */}
            <button className="text-[#06286E] ml-2">
              <BiFullscreen fontSize={30} />
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Flashcard;
