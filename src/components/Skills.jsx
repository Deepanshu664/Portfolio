import React from "react";
import {
FaHtml5,
FaCss3Alt,
FaJs,
FaReact,
FaPython,
FaGitAlt
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";


function Skills(){


const skills = [
{
name:"HTML",
icon:<FaHtml5/>,
color:"text-orange-500"
},

{
name:"CSS",
icon:<FaCss3Alt/>,
color:"text-blue-500"
},

{
name:"JavaScript",
icon:<FaJs/>,
color:"text-yellow-400"
},

{
name:"React",
icon:<FaReact/>,
color:"text-cyan-400"
},

{
name:"Python",
icon:<FaPython/>,
color:"text-blue-400"
},

{
name:"Tailwind CSS",
icon:<SiTailwindcss/>,
color:"text-sky-400"
},

{
name:"Git",
icon:<FaGitAlt/>,
color:"text-orange-600"
}

];



return (

<section id="skills"
className="
min-h-screen
bg-[#0f172a]
text-white
px-10
py-20
"
>


<h1
className="
text-5xl
font-bold
text-center
text-cyan-400
mb-14
"
>
Skills
</h1>



<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-8
"
>


{
skills.map((skill)=>(


<div

key={skill.name}

className="
p-8
rounded-xl
bg-white/10
border
border-cyan-400
flex
flex-col
items-center
gap-4
text-xl
font-semibold
hover:-translate-y-3
hover:bg-cyan-400
hover:text-black
transition
"

>


<div className={`text-6xl ${skill.color}`}>
 {skill.icon}
</div>


<p>
{skill.name}
</p>


</div>


))

}


</div>


</section>

)

}


export default Skills;