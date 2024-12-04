import React, { useState } from 'react';
import { solutions } from '../../constants'; 



const Solutions = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className="font-sans max-w-7xl mx-auto mt-20 p-5">
            <div className="text-center mb-20">
                <h2 className="h2 mb-4 md:mb-8 ">
                    Our{" "}
                    <span className=" bg-gradient-to-r from-pink-600 via-orange-600 to-orange-400 text-transparent bg-clip-text">
                        Usecases
                    </span>
                </h2>
            </div>

            <div className="flex cursor-pointer ml-2 mb-5">
                {solutions.map((solution, index) => (
                    <button
                        key={index}
                        className={`text-sm px-5 text-[1.009rem] py-2 border-none rounded-md ${activeTab === `tab${index + 1}` ? 'bg-orange-600 text-white' : ''} mr-2`}
                        onClick={() => setActiveTab(`tab${index + 1}`)}
                    >
                        {solution.text}
                    </button>
                ))}
            </div>

            {solutions.map((solution, index) => (
                <div
                    key={index}
                    id={`tab${index + 1}`}
                    className={`p-4 mt-2 border-t border-neutral-600 ${activeTab === `tab${index + 1}` ? 'block ' : 'hidden'}`}
                >
                    <div className="flex flex-col lg:flex-row space-x-0 md:space-x-10 py-14 space-y-10 lg:space-y-0 items-center">
                        <div className='w-full flex justify-center flex-col'>
                        <h1 className="text-xl sm:text-3xl lg:text-4xl text-blue-600 mb-2">
                            {solution.text}
                        </h1>
                            <p className="text-md md:text-lg mt-3 text-neutral-500">
                                {solution.description[0]}
                            </p>

                        </div>
                        <img src={solution.icon}  className='w-full md:w-[450px] rounded-md'/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Solutions;
