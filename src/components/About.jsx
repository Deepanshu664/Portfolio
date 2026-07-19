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
gap-10
"
>


{/* left */}


<div className="w-1/2">


<h1
className="
text-5xl
font-bold
text-cyan-400
mb-8
"
>
About Me
</h1>



<p
className="
text-gray-300
text-lg
leading-8
"
>

Hi, I'm Deepanshu.
I am a BCA student and Frontend Developer.
I create modern, responsive and user-friendly websites.
Currently I am learning backend development
and building full stack projects.

</p>



<button

className="
mt-10
px-8
py-3
rounded-full
bg-gradient-to-r
from-cyan-400
to-purple-500
font-bold
hover:scale-105
transition
"

>

Download Resume

</button>


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
p-6
rounded-xl
bg-white/10
border
border-cyan-400
hover:-translate-y-2
transition
"
>

🎓 BCA Student

</div>




<div
className="
p-6
rounded-xl
bg-white/10
border
border-purple-400
hover:-translate-y-2
transition
"
>

💻 Frontend Developer

</div>




<div
className="
p-6
rounded-xl
bg-white/10
border
border-cyan-400
hover:-translate-y-2
transition
"
>

🚀 Learning Backend

</div>



</div>



</section>


)

}


export default About;