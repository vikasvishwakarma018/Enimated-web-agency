// import React ,{useEffect , useRef} from 'react'
// import LocomotiveScroll  from '/src/Components/css/locomotive-scroll.css'
  
const Page3 = () => {
  // const scrollRef = useRef(null);

  // useEffect(()=> {
  //   const scroll = new LocomotiveScroll({
  //     ele: scrollRef.current , 
  //     smooth: true,
  //   });

  //   return  ()=>{
  //     scroll.destroy();
  //   }
  // },[]);


  return (
    <div>
      <div className="container h-[100vh] w-full bg-[#111] " >
        
        <div className="heading text-5xl font-bold my-2 px-20 pt-7 ">
     <h3>Featured digital </h3>
        <h3>design projects</h3>
      </div> 
      <p className='px-20  pt-5 my-2 py-2 text-xl '>Our portfolio encompasses a wide range of digital designs essential for the growth of modern businesses. From B2B SaaS and B2C mobile apps to marketing design for promotions, we display our work created for early-stage startups and enterprises at various stages of their growth.  </p>
      <div className="line  h-0.5 my-4 mx-10  w-[95%]   bg-gray-600">
        <div className="boxes flex w-full px-10 my-3 ">
            <div className="box w-1/2 sticky ">
          <button className='text-[12px]  font-semibold  space-x-50 '><span className='hover:text-green-700  hover:cursor-pointer'>Ai</span> <span className='hover:text-green-700  hover:cursor-pointer'>[2]</span></button>
          <div className="line h-[1%] ml-0 mt-1  mx-0   w-[66%]   bg-gray-600">
            </div>

          <button className='text-[12px] font-semibold   space-x-50 '><span className='hover:text-green-700  hover:cursor-pointer'>FINTECH</span> <span className='hover:text-green-700  hover:cursor-pointer'>[3]</span></button>
          <div className="line h-[1%] ml-0 mt-1  mx-0   w-[66%]   bg-gray-600">
            </div>
          <button className='text-[12px] font-semibold   space-x-50'><span className='hover:text-green-700  hover:cursor-pointer'>OTHER</span> <span className='hover:text-green-700  hover:cursor-pointer'>[16]</span></button>
          <div className="line h-[1%] ml-0 mt-1  mx-0   w-[66%]   bg-gray-600">
            </div>
          <button className='text-[12px]  font-semibold  space-x-50 '><span className='hover:text-green-700  hover:cursor-pointer'>WEB3</span> <span className='hover:text-green-700  hover:cursor-pointer'>[3]</span></button>
          <div className="line h-[1%] ml-0 mt-1  mx-0   w-[66%]   bg-gray-600">
            </div>
            </div>
            <div className="box w-1/2 ">sdf</div>
            <div className="box w-1/2">df</div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Page3
