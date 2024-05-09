import React from 'react'
import { FaPlus } from "react-icons/fa";

const Others = () => {
  return (
    <div className='flex w-full justify-center'>
        {/* main */}
        <div className='w-10/12 flex sm:flex-row flex-col gap-12 justify-between items-center '>

            {/* logo */}
            <div className='flex justify-center gap-6'>
                <div className='px-5 py-6 rounded-full shadow-[0px_0px_30px_rgba(6,_40,_110,_0.5)]'>
                    <img src="/assets/logoIcon.png" alt="" className='w-[44.69px] h-[34.54px]' />
                </div>
                <div className='flex flex-col gap-2'>
                    {/* published by */}
                    <div className='text-[#696671] text-[12.4px] font-bold'>
                        Published by 
                    </div>

                    {/* logo text */}
                    <div>
                        <img src="/assets/logoText.png" alt="" className='w-[115.14px] h-[34.54px]'/>
                    </div>
                </div>
            </div>

            {/* create flashcard */}
            <div className='flex justify-center items-center gap-3'>
                <button className='rounded-full bg-gradient-to-b from-[#06286E] to-[#164EC0] text-white p-3'>
                    <FaPlus fontSize={30} className=''/>
                </button>

                <button className='text-[28px] font-semibold bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text'>
                    Create Flashcard
                </button>

            </div>
        </div>
    </div>
  )
}

export default Others