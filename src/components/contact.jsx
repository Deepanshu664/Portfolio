import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Contact(){


return (

<section id="contact"
className="
min-h-screen
bg-[#0f172a]
text-white
px-10
py-20
flex
flex-col
items-center
"
>


<h1
className="
text-5xl
font-bold
text-cyan-400
mb-12
"
>
Contact Me
</h1>



<div
className="
w-full
max-w-xl
bg-white/10
border
border-cyan-400
rounded-xl
p-8
"
>



<input

placeholder="Your Name"

className="
w-full
p-3
mb-5
rounded-lg
bg-black/30
outline-none
"

/>



<input

placeholder="Your Email"

className="
w-full
p-3
mb-5
rounded-lg
bg-black/30
outline-none
"

/>



<textarea

placeholder="Message"

rows="5"

className="
w-full
p-3
mb-5
rounded-lg
bg-black/30
outline-none
"

/>




<button

className="
px-8
py-3
rounded-full
bg-gradient-to-r
from-cyan-400
to-purple-500
font-bold
"

>

Send Message

</button>



<div
className="
flex
gap-8
justify-center
mt-10
text-4xl
"
>


<FaGithub/>

<FaLinkedin/>

<FaEnvelope/>


</div>


</div>



</section>

)

}


export default Contact;