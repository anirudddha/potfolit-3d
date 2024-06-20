import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

import './homeinfo.css';

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 3)
    return (
      <h1 className='mx-5 box'>
        Hi, I'm
        <span className='blue-gradient_text font-semibold drop-shadow anii' style={{color:"#4157FF",textShadow:"2px 2px black"}} > Aniruddha</span>
        👋

      </h1>
    );

  if (currentStage === 4) {
    return (
      <div className=''>
        <p className='font-medium sm:text-xl text-center'>
          Worked with many coding languages and frameworks <br /> and picked up many skills along the way
        </p>
        <Link to='/about' className='neo-btnn'>
          See more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 1) {
    return (
      <div className=''>
        <p className='font-medium text-center sm:text-xl '>
          Designed multiple projects over the years.
        </p>

        <Link to='/projects' className='neo-btnn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 2) {
    return (
      <div className=''>
      <p className='font-medium sm:text-xl text-center'>
      Let's connect! <br /> Reach out to me directly for collaborations
      </p>

      <Link to='/contact' className='neo-btnn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;