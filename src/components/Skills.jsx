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
import { SiMysql } from "react-icons/si";

function Skills(){


const skills = [
{
name:"HTML",
icon:<FaHtml5/>,
color:"text-orange-500",
description:"Markup Language"
},

{
name:"CSS",
icon:<FaCss3Alt/>,
color:"text-blue-500",
description:"Styling Language"
},

{
name:"JavaScript",
icon:<FaJs/>,
color:"text-yellow-400",
description:"Programming Language"
},

{
name:"React",
icon:<FaReact/>,
color:"text-cyan-400",
description:"Frontend Library"
},

{
name:"Python",
icon:<FaPython/>,
color:"text-blue-400",
description:"Programming Language"
},

{
name:"Tailwind CSS",
icon:<SiTailwindcss/>,
color:"text-sky-400",
description:"CSS Framework"
},

{
name:"Git",
icon:<FaGitAlt/>,
color:"text-orange-600",
description:"Version Control"
},

{
name:"MySQL",
icon:<SiMysql />,
color:"text-blue-500",
description:"Database System"
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
mt-3
"
>


<div className="text-center mb-16 mt-3">

<p
className="
uppercase
tracking-[6px]
text-cyan-400
font-semibold
text-sm
"
>
My Skills
</p>

<h2
className="
text-5xl
font-bold
mt-2
"
>
Technologies I Use
</h2>

</div>



<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-12
"
>


{
skills.map((skill)=>(


<div

key={skill.name}

className="
p-5
-mt-6
rounded-xl
bg-white/10
border
border-cyan-400
flex
flex-col
items-center
gap-3
text-xl
font-semibold
hover:-translate-y-3
hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
hover:border-cyan-400
duration-300
transition
"

>


<div className={`text-6xl ${skill.color}`}>
 {skill.icon}
</div>


<p>
{skill.name}
</p>
<p className="text-gray-400 text-sm">
{skill.description}
</p>


</div>


))

}


</div>


</section>

)

}


export default Skills;