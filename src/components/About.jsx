import React from "react";


function About(){


return (

<section id="about"
className="
min-h-screen
bg-[#0f172a]
text-white
px-10
py-20
flex
items-center
justify-between
gap-12
"
>


{/* left */}


<div className="w-1/2">


<div className="mb-10">

<p
className="
uppercase
tracking-[6px]
text-cyan-400
font-semibold
text-sm
"
>
About Me
</p>

<h2
className="
text-5xl
font-bold
mt-3
"
>
Who Am I?
</h2>

</div>



<p
className="
text-gray-300
text-md
lg:text-lg
leading-11
lg:leading-8
"
>

I’m a passionate Frontend Developer currently pursuing my
Bachelor of Computer Applications (BCA).

I enjoy building modern, responsive and user-friendly web
applications using React, JavaScript and Tailwind CSS.

Currently, I'm learning Backend Development to become a
Full Stack Developer and continuously improving my skills
through real-world projects.

</p>
<div
className="
flex
gap-1
mt-10
lg:gap-20

"
>

<div>
<h2 className="text-2xl lg:text-4xl font-bold text-cyan-400">
1+
</h2>

<p className="text-gray-400">
Years Learning
</p>
</div>

<div>
<h2 className="text-2xl lg:text-4xl font-bold text-cyan-400">
3+
</h2>

<p className="text-gray-400">
Projects
</p>
</div>

<div>
<h2 className="text-2xl lg:text-4xl font-bold text-cyan-400">
8+
</h2>

<p className="text-gray-400">
Technologies
</p>
</div>

</div>
</div>


{/* right cards */}

<div
className="
w-1/2
grid
gap-6
"
>



<div
className="
p-2
rounded-2xl
bg-white/5
backdrop-blur-lg
border
border-cyan-400/30
hover:border-cyan-400
hover:-translate-y-2
duration-300
mt-4
"
>

<div className="text-2xl mb-4">
🎓
</div>

<h3 className="text-xl font-bold">
BCA Student
</h3>

<p className="text-gray-400 mt-3 leading-6">
Currently pursuing Bachelor of Computer Applications with
a strong interest in Web Development.
</p>

</div>




<div
className="
p-2
rounded-2xl
bg-white/5
backdrop-blur-lg
border
border-purple-400/30
hover:border-purple-400
hover:-translate-y-2
duration-300
"
>

<div className="text-2xl mb-4">
💻
</div>

<h3 className="text-xl font-bold">
Frontend Developer
</h3>

<p className="text-gray-400 mt-3 leading-6">
Building responsive and interactive websites using React,
JavaScript, HTML, CSS and Tailwind CSS.
</p>

</div>




<div
className="
p-3
rounded-2xl
bg-white/5
backdrop-blur-lg
border
border-cyan-400/30
hover:border-cyan-400
hover:-translate-y-2
duration-300
"
>

<div className="text-2xl mb-4">
🚀
</div>

<h3 className="text-xl font-bold">
Learning Backend
</h3>

<p className="text-gray-400 mt-3 leading-6">
Currently learning Node.js, Express and MySQL to become
a Full Stack Developer.
</p>

</div>



</div>



</section>


)

}


export default About;