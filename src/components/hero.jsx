import React from 'react';
import img from '../assets/Deepanshu.png';

function Hero() {
  return (
    <section id="home"
      className="
min-h-[560px]
flex
justify-between
items-center
px-10
bg-[#0f172a]
text-white
"
    >
      {/* content */}

      <div
        className="
w-[50%]
h-[520px]
bg-[#1a1a40]
p-10
rounded-2xl
backdrop-blur-md
shadow-[0_0_40px_rgba(0,255,255,0.2)]
hover:-translate-y-2
transition
"
      >
        <h1
          className="
text-5xl
font-bold
text-center
mb-8
"
        >
          Frontend Developer
        </h1>

        <div className="mt-8 text-xl">
          <p>Hi I'm Deepanshu</p>

          <span
            className="
text-2xl
font-semibold
"
          >
            Frontend Developer Creating Modern Websites
          </span>
        </div>

        <div
          className="
flex
justify-center
gap-5
mt-10
"
        >
          <button
            className="
px-7
py-3
rounded-full
bg-gradient-to-r
from-cyan-400
to-purple-500
font-bold
hover:scale-110
transition
"
          >
            My Projects
          </button>

          <button
            className="
px-7
py-3
rounded-full
border
border-cyan-400
hover:bg-cyan-400
hover:text-black
transition
"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* image */}

      <div
        className="
w-1/2
flex
justify-center
"
      >
        <img
          src={img}
          className="
w-[500px]
h-[500px]
rounded-full
object-cover
border-4
border-cyan-400
shadow-[0_0_40px_rgba(0,255,255,0.6)]
hover:scale-105
transition
"
        />
      </div>
    </section>
  );
}

export default Hero;
