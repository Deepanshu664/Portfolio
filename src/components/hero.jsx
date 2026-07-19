import React from 'react';
import img from '../assets/Deepanshu.png';

function Hero() {
  return (
   <section
id="home"
className="
min-h-[calc(100vh-88px)]
pt-24
grid
grid-cols-1
lg:grid-cols-2
items-center
gap-16
max-w-7xl
mx-auto
px-6
lg:px-12
"
>
      {/* content */}

<div
  className="
max-w-xl
w-full
"
>
<h1
className="
text-5xl
lg:text-6xl
font-extrabold
leading-tight
whitespace-nowrap
mb-6
"
>
<span className="text-white">Frontend </span>

<span className="text-cyan-400">
Developer
</span>
</h1>

        <div className=" text-2xl font-semibold">
          <p className="text-lg text-gray-400">
Hello, I'm
</p>

<h2 className="text-4xl
lg:text-4xl
font-bold
mt-2">
Deepanshu
</h2>

          <p
className="
mt-3
text-lg
leading-8
text-gray-400
max-w-lg
"
>
            I build responsive and modern web applications
            using React, JavaScript and Tailwind CSS.
          </p>
        </div>

        <div
          className="
flex
justify-start
gap-5
mt-10

"
        >
         <a
href="#projects"
className="
px-7
py-3
rounded-full
bg-gradient-to-r
from-cyan-400
to-purple-500
font-bold
hover:scale-110
duration-300
"
>
View Projects
</a>

         <a
href="/resume.pdf"
className="
px-7
py-3
rounded-full
border
border-cyan-400
text-white
hover:bg-cyan-400
hover:text-black
duration-300
font-bold
hover:scale-110
duration-300
"
>
Download Resume
</a>
        </div>
      </div>

      {/* image */}

      <div
        className="
w-full
flex
justify-center
items-center
"
      >
        <img
          src={img}
          className="
w-[420px]
h-[420px]
rounded-full
object-contain
border-4
border-cyan-400
shadow-[0_0_60px_rgba(34,211,238,0.6)]
hover:scale-105
transition-all
duration-500

"
        />
      </div>
    </section>
  );
}

export default Hero;
