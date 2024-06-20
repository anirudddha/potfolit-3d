
import CTA from "../componets/CTA";
import { experiences, skills } from "../constants";

import leetcode from '../assets/icons/leetcode.png'
import cf from '../assets/icons/cf.png'

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='' style={{color:"#4157FF",textShadow:"2px 2px black"}}>
          {" "}
          Aniruddha
        </span>{" "}
        
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am currently pursuing a degree in Electronics and Communication Engineering at Vellore Institute of Technology (VIT), Chennai. My academic journey has been marked by a passion for technology and a drive to innovate in the field of electronics and communication.
          <br /><br />
          In addition to my academic pursuits, I am an avid competitive programmer. I thrive on solving complex problems and continually enhancing my coding skills through various competitions and coding challenges. My proficiency in algorithms and data structures has been honed through rigorous practice and participation in numerous contests.
          <br /><br />
          Moreover, I am a dedicated React developer with a strong foundation in front-end development. I enjoy building dynamic, user-friendly web applications and exploring new frameworks and technologies in the realm of web development. My projects reflect my commitment to creating efficient and visually appealing user interfaces.        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 className='subhead-text my-3'>Achivments in CP</h3>
      <div className="container my-8">
        <h1 style={{ marginTop: "20px" }}>🔵 <img src={leetcode} style={{ height: "200px", margin: "auto" }} alt="" /> </h1>
        <p style={{ paddingLeft: "25px", fontSize: "20px", display: "flex", marginTop: "40px" }}><h3 style={{ margin: "auto", marginTop: "-30px" }}>Knight on Leetcode </h3></p>

        <p style={{ paddingLeft: "25px", fontSize: "20px", display: "flex", marginTop: "40px" }}><h3 style={{ margin: "auto" }}>Achived in Top 5% on <a href="https://leetcode.com/u/BlackPerl06/" style={{ color: "blue" }}>Leetcode </a> Users  </h3></p>
      </div>
      <hr />
      <div className="container my-8">
        <h1 style={{ marginTop: "20px" }}>🔵 <img src={cf} style={{ height: "100px", margin: "auto" }} alt="" /> </h1>
        <p style={{ paddingLeft: "25px", fontSize: "20px", display: "flex", marginTop: "40px" }}><h3 style={{ margin: "auto", marginTop: "-5px" }}>Specialist on CodeForces </h3></p>

        <p style={{ paddingLeft: "25px", fontSize: "20px", display: "flex", marginTop: "40px" }}><h3 style={{ margin: "auto" }}>Achived in Top 1400+ rating on <a href="https://leetcode.com/u/BlackPerl06/" style={{ color: "blue" }}>CodeForces</a>  </h3></p>
      </div>
      <hr />

      <hr className='border-slate-200' />

      {/* <CTA /> */}
    </section>
  );
};

export default About;