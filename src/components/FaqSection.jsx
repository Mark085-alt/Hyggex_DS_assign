import React , {useState} from "react";
import {FaChevronDown} from 'react-icons/fa';


const faqs = [
    {
        question: "Can education flashcards be used for all age groups?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem placeat commodi animi, facilis quod excepturi dolor. Tenetur cumque est ut.",
        id: "1"
    },
    {
        question: "How do education flashcards work?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem placeat commodi animi, facilis quod excepturi dolor. Tenetur cumque est ut.        ",
        id: "2"
    },
    {
        question: "Can education flashcards be used for test preparation?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem placeat commodi animi, facilis quod excepturi dolor. Tenetur cumque est ut.",
        id: "3"
    }
]


function FaqDropdown({ faq }) {
    const [showAnswer, setShowAnswer] = useState(false)
    return <div className='border-[1px] h-full transition-all duration-500 ease-in-out w-full flex-col gap-3 flex relative border-[#217EEC] p-6 rounded-xl'>

        {/* Question */}
        <div className='flex justify-between gap-5 flex-row-reverse items-center'>
            <button
                onClick={() => setShowAnswer(!showAnswer)}
                className={`${showAnswer ? "rotate-180" : ""} p-[2px] transition-all duration-200 ease-in-out`}>
                <FaChevronDown />
            </button>

            <p className='font-semibold text-black'>{faq.question}</p>

        </div>

        {/* Answer*/}
        <span className={`${showAnswer ? "block" : "hidden"} transition-all duration-1000 ease-in-out`}>
            {faq.answer}
        </span>

    </div>
}

const FaqSection = () => {


  return (
    <div>
      {/* FAQ section */}
      <div className="w-full flex justify-start items-start">
        <div className="flex flex-col gap-8 w-[800px]">
          {faqs.map((faq) => (
            <FaqDropdown faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
