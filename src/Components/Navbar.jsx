import React from 'react'

const Navbar = () => {
    return (
        <div>


            <nav className='group relative  py-1  flex   justify-between items-center cursor-pointer h-22 '>
                <div className=" hover:bg-black   hover:delay-250 transition delay-700 duration-300 ease-in">
                    <div className="logo animate-pulse delay-1000 font-bold mx-5 absolute top-4 text-lg cursor-pointer ">
                     
                        <img className='h-[70px] w-[70px]' src="https://cdn2.spatial.io/assets/v1/thumbnails/6631e0ba7e7b2cffbf4b8653/customLogo/r/3ea7a4b03fdb6393f3ce24b8e3c8f0bfddd16216221b1fd65ef74ff61359daed/1718271902" alt="" />
                    </div>
                    <div className="absolute top-4 left-[20%] space-x-2 transition delay--200 hover:bg-black duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                        <ol className='flex space-x-4'>
                            <ul>
                                <li className='hover:text-green-700 font-bold uppercase text-sm'>Case Studies</li>
                                <div className="group text-[9px] text-white space-y-2 my-2 text-start  cursor-pointer  ">
                                    <li className='invisible group-hover:visible hover:underline  '><span>case studies </span></li>
                                    
                                </div>

                            </ul>
                            <ul>
                                <li className='hover:text-green-700 font-bold uppercase text-sm'>Areas of experties </li>
                                <div className="group text-[9px] text-white space-y-2 my-2 text-start  cursor-pointer ">
                                    <li className='invisible group-hover:visible hover:underline  '><span>Ai & Ml </span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>FinTech</span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>Real Estate</span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>E-commerce</span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>Web-3</span></li>
                                </div>
                            </ul>
                            <ul>
                                <li className='hover:text-green-700 font-bold uppercase text-sm'>UIUX Design </li>
                                <div className="group text-[9px] text-white space-y-2 my-2 text-start  cursor-pointer ">
                                    <li className='invisible group-hover:visible hover:underline  '><span>UX Audit</span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>UI Design</span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>UX Design</span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>UX- Research</span></li>
                                </div>
                            </ul>
                            <ul>

                                <li className='hover:text-green-700 font-bold uppercase text-sm'> PRoduct design</li>
                                <div className="group text-[9px] text-white space-y-2 my-2 text-start  cursor-pointer ">
                                    <li className='invisible group-hover:visible hover:underline  '><span>SaaS</span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>Web App </span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>Mobile App </span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>Webite Design</span></li>
                                </div>


                            </ul>
                            <ul>
                                <li className='hover:text-green-700 font-bold uppercase text-sm'>Design Process</li>
                                <div className="group text-[9px] text-white space-y-2 my-2 text-start  cursor-pointer ">
                                    <li className='invisible group-hover:visible hover:underline  '><span>MVP</span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>Relaunch</span></li>
                                  
                                </div>
                            </ul>

                            <ul>
                                <li className=' hover:text-green-700 font-bold uppercase text-sm '>About Agency</li>
                                <div className="group text-[9px] text-white space-y-2 my-2 text-start  cursor-pointer ">
                                    <li className='invisible group-hover:visible hover:underline  '><span>Our Stroy </span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>Client Feadback</span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>Careers</span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span></span></li>
                                    <li className='invisible group-hover:visible hover:underline'><span>News & Article</span></li>
                                </div>
                            </ul>
                        </ol>
                        <div className="bootom bg-[#0BA34E] invisible group-hover:visible w-full  h-0 border items-center justify-center   transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 my-1.5 space-y-2 gap-1.5 "></div>

                    </div>


                    <button className='flex animate-bounce delay-200  absolute top-3 cursor-pointer  right-3 rounded-2xl bg-blue-600 px-3 my-2 py-2 items-center justify-center '>Let's Talk <svg className='hover:bg-blue-600   h-6 w-[5vh]   delay-1000' fill="none" viewBox="0 0 20 20">
                        <path fill="#fff"
                            d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z">
                        </path>
                    </svg></button>

                </div>
            </nav>
        </div>
    )
}

export default Navbar


