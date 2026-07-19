import React from "react";


function Navbar() {
return (

<nav
className="
fixed
top-0
left-0
w-full
z-50
flex
items-center
justify-between
px-8
lg:px-16
py-5
bg-[#1a1a40]/80
backdrop-blur-xl
border-b
border-white/10
"
>


{/* logo */}

<a
href="#home"
className="
text-3xl
font-extrabold
tracking-wide
text-cyan-400
hover:text-white
transition
duration-300
"
>
Deepanshu
</a>



{/* links */}

<div className="
hidden
md:flex
gap-10
text-white
font-semibold
">


<a
href="#home"
className="
relative
hover:text-cyan-400
transition
duration-300
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-cyan-400
after:transition-all
hover:after:w-full
"
>
Home
</a>


<a
href="#skills"
className="
relative
hover:text-cyan-400
transition
duration-300
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-cyan-400
after:transition-all
hover:after:w-full
"
>
Skills
</a>


<a
href="#projects"
className="
relative
hover:text-cyan-400
transition
duration-300
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-cyan-400
after:transition-all
hover:after:w-full
"
>
Projects
</a>


<a
href="#about"
className="
relative
hover:text-cyan-400
transition
duration-300
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-cyan-400
after:transition-all
hover:after:w-full
"
>
About
</a>


<a
href="#contact"
className="
relative
hover:text-cyan-400
transition
duration-300
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-cyan-400
after:transition-all
hover:after:w-full
"
>
Contact
</a>


</div>



{/* mobile icon */}

<div className="
md:hidden
text-white
text-4xl
">

☰

</div>



</nav>

)

}


export default Navbar;