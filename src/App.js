import avatar from "./Images/dev-ed-wave.png"; 
import design from "./Images/design.png";
import consulting from "./Images/consulting.png";
import code from "./Images/code.png";
import web1 from "./Images/web1.png";
import web2 from "./Images/web2.png";
import web3 from "./Images/web3.png";
import web4 from "./Images/web4.png";
import web5 from "./Images/web5.png";
import web6 from "./Images/web6.png";
import user from "./Images/avatar.png";
import {BsFillMoonStarsFill, BsLinkedin, BsTwitter, BsYoutube} from "react-icons/bs";
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App p-10 md:px-20 lg:px-30" style={{background: darkMode? "#0F182D" :"",color: darkMode? "white" : "" }}>
      <main>
        <nav className="justify-between flex items-center">
          <h2 style={{color: darkMode? "white" : "" }}>PORTFOLIO</h2>
          <ul className="flex items-center">
            <li className="mr-5 cursor-pointer">
              <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} style={{color: darkMode? "white" : "" }}/>
            </li>
            <li>
              <a href="#" className="bg-cyan-500 text-white py-2 px-3 text-sm rounded-lg">Resume</a>
            </li>
          </ul>
        </nav>

        <section className="my-20 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-cyan-500 font-semibold md:text-5xl">Dimitri Marco</h1>
          <p className="my-3 text-xl font-medium md:text-2xl">Developer and Designer.</p>
          <p className="text-center text-sm md:text-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti illum corporis eaque explicabo.</p>
          <ul className="my-10 text-4xl text-gray-500 flex justify-evenly list-none gap-16">
            <a href="#"><BsLinkedin /></a>
            <a href="#"><BsTwitter /></a>
            <a href="#"><BsYoutube /></a>
          </ul>
          <div className="w-80 h-80 bg-gradient-to-b from-cyan-400 rounded-full overflow-hidden my-10">
              <img src={avatar} alt="" className="object-cover mt-5" />
          </div>
        </section>
      </main>

      <section>
        <h2 className="font-semibold text-3xl text-cyan-400" >Services I Offer</h2>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sint! Sed blanditiis voluptas ipsam? Id minus distinctio laboriosam in dolore eligendi, quae quas ratione doloremque maxime sunt odit consequatur corrupti.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto cum incidunt.</p>
        <div className=" grid gap-5 md:grid-cols-1 lg:grid-cols-3">
          <div className=' p-10 my-10 flex flex-col justify-center items-center gap-2 shadow-lg rounded-lg' style={{boxShadow: darkMode ? "0px 15px 15px rgba(0,0,0,0.25)": "", background: darkMode? "#16223d": "whitesmoke"}}>
            <img src={design} alt="" className='w-1/4'/>
            <h3>Beautiful Designs</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipi sicing elit. Accusantium, magni fjkehf knsas.</p>
            <spanc className="text-cyan-400">Design tools I use</spanc>
            <ul className="list-none">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Illustrator</li>
            </ul>
          </div>
          <div className=' p-10 my-10 flex flex-col justify-center items-center gap-2 shadow-lg rounded-lg' style={{boxShadow: darkMode ? "0px 15px 15px rgba(0,0,0,0.25)": "", background: darkMode? "#16223d": "whitesmoke"}}>
            <img src={consulting} alt="" className='w-1/4'/>
            <h3>Beautiful Designs</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipi sicing elit. Accusantium, magni fjkehf knsas.</p>
            <spanc className="text-cyan-400">Design tools I use</spanc>
            <ul className="list-none">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Illustrator</li>
            </ul>
          </div>
          <div className=' p-10 my-10 flex flex-col justify-center items-center gap-2 shadow-lg rounded-lg' style={{boxShadow: darkMode ? "0px 15px 15px rgba(0,0,0,0.25)": "", background: darkMode? "#16223d": "whitesmoke"}}>
            <img src={code} alt="" className='w-1/4'/>
            <h3>Beautiful Designs</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipi sicing elit. Accusantium, magni fjkehf knsas.</p>
            <spanc className="text-cyan-400">Design tools I use</spanc>
            <ul className="list-none">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Illustrator</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='my-20'>
      <h2 className="font-semibold text-3xl text-cyan-400">My Designs</h2>
      <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sint! Sed blanditiis voluptas ipsam? Id minus distinctio laboriosam in dolore eligendi, quae quas ratione doloremque maxime sunt odit consequatur corrupti.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto cum incidunt.</p>
        <div className="my-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img src={web1} alt="" className="rounded-lg object-cover"/>
          </div>
          <div>
            <img src={web2} alt="" className="rounded-lg object-cover"/>
          </div>
          <div>
            <img src={web3} alt="" className="rounded-lg object-cover"/>
          </div>
          <div>
            <img src={web4} alt="" className="rounded-lg object-cover"/>
          </div>
          <div>
            <img src={web5} alt="" className="rounded-lg object-cover"/>
          </div>
          <div>
            <img src={web6} alt="" className="rounded-lg object-cover"/>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-3xl text-cyan-400">Testimonials</h2>
        <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto cum incidunt.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="p-10 my-10 flex flex-col gap-2 shadow-lg rounded-lg" style={{boxShadow: darkMode ? "0px 15px 15px rgba(0,0,0,0.25)": "", background: darkMode? "#16223d": "whitesmoke"}}>
            <div className="flex gap-4 items-center mb-3">
              <img src={user} alt="" className="w-10 h-10 rounded-full"/>
              <div>
                <h4>Dev Ed</h4>
                <p className="text-sm text-gray-500">Web Developer</p>
              </div> 
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi omnis quisquam praesentium rem necessitatibus voluptatibus dignissimos consequuntur nobis exercitationem modi.</p>
          </div>

          <div className="p-10 my-10 flex flex-col gap-2 shadow-lg rounded-lg" style={{boxShadow: darkMode ? "0px 15px 15px rgba(0,0,0,0.25)": "", background: darkMode? "#16223d": "whitesmoke"}}>
            <div className="flex gap-4 items-center mb-3">
              <img src={user} alt="" className="w-10 h-10 rounded-full"/>
              <div>
                <h4>Dev Ed</h4>
                <p className="text-sm text-gray-500">Web Developer</p>
              </div> 
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi omnis quisquam praesentium rem necessitatibus voluptatibus dignissimos consequuntur nobis exercitationem modi.</p>
          </div>

          <div className="p-10 my-10 flex flex-col gap-2 shadow-lg rounded-lg" style={{boxShadow: darkMode ? "0px 15px 15px rgba(0,0,0,0.25)": "", background: darkMode? "#16223d": "whitesmoke"}}>
            <div className="flex gap-4 items-center mb-3">
              <img src={user} alt="" className="w-10 h-10 rounded-full"/>
              <div>
                <h4>Dev Ed</h4>
                <p className="text-sm text-gray-500">Web Developer</p>
              </div> 
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi omnis quisquam praesentium rem necessitatibus voluptatibus dignissimos consequuntur nobis exercitationem modi.</p>
          </div>
        </div>
      </section>

      <section className="my-20">
        <h2 className="font-semibold text-3xl text-cyan-400">Contact Me</h2>
        <br />
        <div className="flex flex-col rounded-lg p-10 bg-gray-700" style={{background: darkMode ? "": "whitesmoke", boxShadow: !darkMode? "0px 5px 10px rgba(0,0,0,0.25)": ""}}>
          <form action="" className="flex flex-wrap gap-5 text-sm lg:text-base flex-row justify-between">
            <input type="email" placeholder="example@gmail.com" className="bg-transparent border-none outline-none"/>
            <button type="submit" className="px-3 py-2 bg-cyan-400 rounded-lg cursor-pointer text-white lg:px-10">Submit</button>
          </form>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-400">
        <hr />
        <p>Copyright ©️ 2022. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
