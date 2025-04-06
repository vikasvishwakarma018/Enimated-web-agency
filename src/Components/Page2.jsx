import React ,{useEffect , useRef} from 'react'

const Page2 = () => {
  return (
    <div>
         <div className="page3 mx-auto px-40  py-4  bg-gray-100 h-[100vh] w-full text-black flex justify-center">
  <div className="left w-1/2 ">

  <h2 className="font-bold text-3xl space-y-3 my-3">Success Stories Shaped by Our User Experience Design Agency</h2>
  <img className="h-[40%] w-full " src="https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=1024x1024&w=is&k=20&c=BdevKMKtOgXoPwbZE9v_PU_q94-G5LgboedYsvyKP-g=" alt="" />
  </div>

  <div className="right px-40 space-y-5 ">
    <h1 className="uppercase  text-lg text-gray-600 font-bold   hover:underline hover:font-bold  hover:text-black  ">patnersheep mentaly</h1>
    <p className="text-lg font-bold ">Along with taking the lead in designing AI-powered solutions, we embody a partnership mentality. This exact commitment has been the bedrock of our clients’ successes.  When you choose to collaborate with us, we promise to be right where your audience's changing desires meet your ambitious business goals. We don't settle for mediocrity; we strive for excellence in every Figma pixel, every touchpoint, and every UX interaction.</p>

    <h1 className="uppercase hover:underline hover:font-bold  hover:text-black text-lg text-gray-600 font-bold  ">result</h1>
    <p className="text-lg font-bold ">That is how we've built 50+ sustainable startup products and helped 400+ brands secure millions in funding, achieve successful acquisitions, and establish themselves as globally recognized companies.</p>
    </div>

   </div>
   <div className="boxes flex  mx-auto px-30 w-full space-x-2 gap-2 bg-gray-100 h-[100vh] relative  ">

  <div className="box w-[30%] h-[40%]  border border-black rounded-2xl bg-gray-200">
 <h1 className="font-semibold text-5xl absolute top-10 items-center justify-center mx-2  text-black  "> $500M  </h1> 
<p className="text-gray-500 absolute top-45 text-sm flex gap-30 items-center font-200 justify-center  px-2  ">
  <p className="w-1/2" >in funding secured owning to our disigns </p>
  <p className="w-1/2">/001</p>
</p>
  </div>
  <div className="box w-[30%] h-[40%] border border-black rounded-2xl bg-gray-200 ">
  <h1 className=" font-semibold  text-5xl absolute top-10 items-center justify-center mx-2  text-black  "> +1 millon   </h1> 
<p className="text-gray-500 absolute top-45 text-sm flex gap-30 items-center font-200 justify-center px-2  ">
  <p className="w-1/2" >increse in customer base</p>
  <p className="w-1/2">/002</p>
  </p>
  </div>
  <div className="box w-[30%] h-[40%] border border-black  rounded-xl bg-gray-200">
  <h1 className="font-semibold text-5xl absolute top-10 items-center justify-center mx-2  text-black  ">1 000 000+</h1> 
<p className="text-gray-500 absolute top-42 text-sm flex gap-30 items-center font-200 justify-center px-2  ">
  <p className="w-1/2 " >of active markplace users</p>
  <p className="w-1/2">/003</p>
  </p>  
  </div>
  
<div className="videos flex relative  gap-1"></div>
  <video className="h-[45%] absolute bottom-10  left-30  rounded-lg "  loop muted autoPlay>
      <source src="../animation2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  <video className="h-[45%] absolute bottom-10  right-30  rounded-lg"  loop muted autoPlay>
      <source src="https://media.istockphoto.com/id/1955047198/video/business-teamwork-and-sticky-notes-by-white-board-in-talking-brainstorming-and-web-design.mp4?s=mp4-640x640-is&k=20&c=JYiDRFnzxWPJkaKGZ7cdQjtbU6rOihhIBqZ8ZniB4Fc=" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
</div>
 
<div className="boxes flex  mx-auto px-30 w-full space-x-2 gap-2 bg-gray-100 h-[100vh] relative  ">
<div className="box w-[30%] h-[40%]  border border-black rounded-2xl bg-gray-200">
 <h1 className="font-semibold text-5xl absolute top-10 items-center justify-center mx-2  text-black  "> $500M  </h1> 
<p className="text-gray-500 absolute top-45 text-sm flex gap-30 items-center font-200 justify-center  px-2  ">
  <p className="w-1/2" >in funding secured owning to our disigns </p>
  <p className="w-1/2">/001</p>
</p>
  </div>
  <div className="box w-[30%] h-[40%] border border-black rounded-2xl bg-gray-200 ">
  <h1 className=" font-semibold  text-5xl absolute top-10 items-center justify-center mx-2  text-black  "> +1 millon   </h1> 
<p className="text-gray-500 absolute top-45 text-sm flex gap-30 items-center font-200 justify-center px-2  ">
  <p className="w-1/2" >increse in customer base</p>
  <p className="w-1/2">/002</p>
  </p>
  </div>
  <div className="box w-[30%] h-[40%] border border-black  rounded-xl bg-gray-200">
  <h1 className="font-semibold text-5xl absolute top-10 items-center justify-center mx-2  text-black  ">1 000 000+</h1> 
<p className="text-gray-500 absolute top-42 text-sm flex gap-30 items-center font-200 justify-center px-2  ">
  <p className="w-1/2 " >of active markplace users</p>
  <p className="w-1/2">/003</p>
  </p>  
  </div>
  <video className="h-[45%] absolute bottom-10  left-90  items-center justify-center rounded-lg"  loop muted autoPlay>
      <source src="../animation3.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

  </div>

  
    </div>
  )
}

export default Page2
