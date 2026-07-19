import React from "react";


function Projects(){
const projects=[

{
title:"Todo App",
desc:"A simple task management application where users can add, delete and manage daily tasks.",
tech:"HTML | JavaScript | CSS",
github:"#",
demo:"#"
},

{
title:"UI Clone",
desc:"A responsive website UI clone created to practice frontend design and layouts.",
tech:"HTML | CSS | JavaScript",
github:"#",
demo:"#"
},

{
title:"3D Car Racing Game",
desc:"A browser based 3D racing game with car model, controls and interactive environment.",
tech:"Three.js | JavaScript",
github:"#",
demo:"#"
}

];



return (

<section id="projects"
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

Projects

</h1>



<div
className="
grid
md:grid-cols-3
gap-8
"
>


{
projects.map((project)=>(


<div
key={project.title}

className="
bg-white/10
border
border-cyan-400
rounded-xl
p-8
hover:-translate-y-3
transition
shadow-lg
"
>


<h2
className="
text-2xl
font-bold
mb-5
text-cyan-400
"
>

{project.title}

</h2>



<p
className="
text-gray-300
mb-5
"
>

{project.desc}

</p>



<p
className="
text-sm
text-purple-300
"
>

{project.tech}

</p>



<div className="mt-6 flex gap-4">


<button
className="
px-5
py-2
rounded-full
bg-cyan-400
text-black
font-bold
"
>
GitHub
</button>


<button
className="
px-5
py-2
rounded-full
border
border-cyan-400
"
>
Demo
</button>


</div>


</div>


))

}


</div>


</section>

)

}


export default Projects;