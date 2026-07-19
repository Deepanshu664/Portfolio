import React from "react";


function Navbar() {
return (

<nav className="
flex
justify-between
items-center
px-10
py-5
bg-[#1a1a40]
backdrop-blur-md
border-b
border-white/10
">


{/* logo */}

<div className="
text-3xl
font-bold
text-cyan-400
">

Deepanshu

</div>



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
hover:text-cyan-400
transition
"
>
Home
</a>


<a
href="#skills"
className="
hover:text-cyan-400
transition
"
>
Skills
</a>


<a
href="#projects"
className="
hover:text-cyan-400
transition
"
>
Projects
</a>


<a
href="#about"
className="
hover:text-cyan-400
transition
"
>
About
</a>


<a
href="#contact"
className="
hover:text-cyan-400
transition
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