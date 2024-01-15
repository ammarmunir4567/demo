import React, { useEffect, useRef } from 'react'
import web from '../image/web.jpg'
import ammar from '../image/ammar.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import app1 from '../image/khan.jpeg'
import app2 from '../image/crisis.jpeg'
import app3 from '../image/campus_mate.jpeg'

export default function Home() {




  const ref = useRef(null);

  const handleClick = () => {
    // ref.current?.scrollIntoView({ behavior: 'smooth' });
    const currentRef = ref.current;
if (currentRef) {
  currentRef.scrollIntoView({ behavior: 'smooth' });
}

  };


  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, []);
  return (<>
    <div>
      {/* <Navbar onContactClick={handleClick} /> */}
      <img src={web} alt="Web Image" />

    </div>

    <div className="flex flex-row" style={{ height: "600px" }} >
      <div className="basis-1/2" style={{ overflow: "hidden" }} data-aos="fade-left" >
        <img src={ammar} alt="ammar img"/>
      </div>
      <div className="basis-1/2" data-aos="fade-right">
        <p className='text-center mt-40 text-3xl font-extrabold'>

          Skilled 6th-semester CS student with a strong foundation in programming, data structures, algorithms, and software engineering principles. Experienced in project development and honed problem-solving and critical thinking skills. Passionate about learning and dedicated to excellence.
        </p>
      </div>

    </div>


    <div className='bg-slate-200 '>
      <h1 className='text-center font-sans font-bold text-sky-400 text-4xl' style={{ paddingTop: "2%" }}>Projects done</h1>
      <div className='flex flex-row' style={{ height: "600px", marginTop: "2%" }}>

        <div className='basis-1/3 bg-neutral-50 ml-5 mb-10' data-aos="zoom-in" > <img src={app1} style={{ height: "70%" }} className='rounded-lg ml-24' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lectus id dui mollis mattis sit amet ac risus. Etiam bibendum varius purus. Vestibulum euismod ac orci a euismod. Nullam quis arcu eu ligula accumsan imperdiet. Vestibulum placerat mauris felis, malesuada tristique felis lobortis a. Praesent sollicitudin mi purus, non vestibulum neque consectetur in. Cras vulputate massa ut magna </p>
        </div>
        <div className='basis-1/3  bg-neutral-50 ml-5 mb-10' data-aos="zoom-in"> <img src={app3} style={{ height: "70%" }} className='rounded-lg ml-28' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lectus id dui mollis mattis sit amet ac risus. Etiam bibendum varius purus. Vestibulum euismod ac orci a euismod. Nullam quis arcu eu ligula accumsan imperdiet. Vestibulum placerat mauris felis, malesuada tristique felis lobortis a. Praesent sollicitudin mi purus, non vestibulum neque consectetur in. Cras vulputate massa ut magna .</p>
        </div>
        <div className='basis-1/3  bg-neutral-50 ml-5 mb-10' data-aos="zoom-in"> <img src={app2} style={{ height: "70%" }} className='rounded-lg ml-24' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lectus id dui mollis mattis sit amet ac risus. Etiam bibendum varius purus. Vestibulum euismod ac orci a euismod. Nullam quis arcu eu ligula accumsan imperdiet. Vestibulum placerat mauris felis, malesuada tristique felis lobortis a. Praesent sollicitudin mi purus, non vestibulum neque consectetur in. Cras vulputate massa ut magna .</p>
        </div>


      </div>
    </div>
{/* 
    <div ref={ref}>
      <Contact />
    </div> */}

  </>
  )
}
