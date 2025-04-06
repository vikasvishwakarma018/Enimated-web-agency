import React ,{useEffect , useRef} from 'react'
 
const Contain = () => {
  return (
    <div>
        <div className="container bg-[#111] text-white">     
        <div className="page1  h-[100vh] w-full flex flex-col items-center justify-center">
          <h1 className=' text-7xl font-bold uppercase animate-[wiggle_1s_ease-in-out_infinite] '>AI<span className='text-green-700'>&</span>ML PRODUCT 
            <br />
           <span className='text-green-700'>D</span>ESIGN AGENCY</h1>
          <p className='mt-[3vh] items-center justify-center  mb-2 pt-5 '>We with AI &amp; ML&nbsp;<span className='text-green-600'>businesses </span>, guiding them from series A 
                     to series D and beyond with
          our expertise in </p>
          <div className='flex mt-1 space-x-4 mx-3 my-2  items-center justify-center py-2'>
                <h4 className='border-white border-2 rounded-xl px-2  space-x-1.5 hover:bg-green-400 hover:text-black cursor-pointer hover:transition-colors'>Brand design</h4>
                <h4 className='border-white border-2 rounded-xl px-2 space-x-1.5 hover:bg-green-400 hover:text-black cursor-pointer hover:transition-colors'>User Experience</h4>
                <h4 className=''>and</h4>
                <h4 className='border-white border-2 rounded-xl px-2 space-x-1.5 hover:bg-green-400 hover:text-black cursor-pointer hover:transition-colors'>Digital product design</h4>
            </div>
            <div id="moving-div flex ">
                <div id="blur-left  "></div>
              
                <div className=" animate-move flex gap-4 mt-3 my-2" >
                    <img src="https://lazarev.kiev.ua/la24/forbes.svg" alt=""/>
                    <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt=""/>
                    
                    <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt=""/>
                    <img src="https://lazarev.kiev.ua/la24/wf.svg" alt=""/>
                    <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt=""/>
                    <img src="https://lazarev.kiev.ua/la24/rd.svg" alt=""/>
                    <img src="https://lazarev.kiev.ua/la24/forbes.svg" alt=""/>
                    <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt=""/>      
                </div>
               <div id="blur-right"></div>
               
       </div>
       </div>
    
  
        <div className="page2 h-[100vh] w-[100%] bg-[#111]" >

        <video className="h-full w-full  rounded-xl "  loop muted autoPlay>
      <source src="../page2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div> 


  </div>
  </div>

  )
}

export default Contain
