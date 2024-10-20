import { useState } from 'react';
import { dedu_backend } from 'declarations/dedu_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  
  
  return (
    <main className='h-screen'>
    


  <header className="w-full">
   
                <nav className="main-nav flex items-center p-5 justify-between bg-indigo-400 w-full text-white">
                          <div className=' flex items-center justify-between mx-auto px-5'>
                          <div className='flex gap-5 items-center'>
                          <a href="index.html" className=" text-3xl font-semibold">
                        <h1>DEDU</h1>
                    </a>
                   
                    <div className="search-input hidden text-white lg:block">
                      <form id="search" action="#">
                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" className="outline-none px-5 text-white p-2 rounded-full text-sm bg-white bg-opacity-15 " onkeypress="handle" />
                        <i className="fa fa-search"></i>
                      </form>
                    </div>  </div>
                  
                    <ul className="nav lg:flex items-center hidden gap-3">
                      <li className="scroll-to-section"><a href="#top" className="active p-2 px-5 rounded-full text-sm hover:bg-indigo-400">Home</a></li>
                      <li className="scroll-to-section"><a href="#services" className='p-2 px-5 rounded-full text-sm hover:bg-indigo-400 '>Services</a></li>
                      <li className="scroll-to-section"><a href="#courses" className='p-2 px-5 rounded-full text-sm hover:bg-indigo-400 '>Courses</a></li>
                      <li className="scroll-to-section"><a href="#team" className='p-2 px-5 rounded-full text-sm hover:bg-indigo-400 '>Team</a></li>
                      <li className="scroll-to-section"><a href="#events" className='p-2 px-5 rounded-full text-sm hover:bg-indigo-400 '>Events</a></li>
                      <li className="scroll-to-section" ><a href="" className='p-2 px-5 rounded-full text-sm  bg-white text-black'>Connect Wallet</a></li>
                  </ul>   
                    <a className='menu-trigger'>
                        {/* <span>Menu</span> */}
                    </a>
                          </div>
                    

                </nav>
  </header>


  <div className="main-banner bg-indigo-400 h-[90%] rounded-b-[10%]" id="top">
  <div className='w-full flex items-center container mx-auto px-5 justify-center h-full' >
    <div className='bg-black w-full flex flex-col items-start  min-h-[60%] lg:w-[60%] overflow-hidden rounded-3xl'style={{
    background:"linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/bg.jpg)",
    backgroundRepeat:"no-repeat"
  }}>
    <span className='my-5 mx-5 mt-12 bg-indigo-500 px-5 rounded-full text-white'>
      Courses
    </span>
    <div className='m-5 text-6xl lg:mr-80 text-white font-semibold'>
    With DEDU, Everything Is Easier
    </div>
    <div className='p-5 font-bold text-white lg:mr-56'>
    We offer skill development courses and certifications tailored to the needs of West African youth. By providing affordable, accessible, and verifiable education, DEdu aims to bridge the skill gap and enhance employability in the region. 
    </div>
    <div className='flex items-center gap-5 m-5 mb-12'>
    <div className='text-indigo-500 bg-white text-[1.4rem] rounded-full cursor-pointer px-5 p-2'>
      Request a Demo
    </div>
    <div className='text-sm text-white'>
      What is DEDU?
    </div>
    </div>
        
    </div>
 
  </div>

  </div>
    </main>
  );
}

export default App;
