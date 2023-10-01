import React from 'react'
import './App.css';
import { Parallax } from 'react-scroll-parallax';
import scroll from './assets/img/animation_ln7vabgx_small.gif'







const Contact = () =>{

    return(

        <div className='flex flex-col justify-center items-center text-black w-full min-h-screen'>
            <Parallax 
                scale={[1,0]} easing="easeInQuad">
                    <h1 className='text-9xl tracking-widest z-50'>CONTACT ME</h1>
                    
            </Parallax>

            <div className='flex space-x-8 mt-7'>
                         <Parallax 
                        scale={[1,0]} easing="easeInQuad" opacity={[10,-20]}>
                        <button class="bg-transparent   font-semibold  py-3 px-20 border border-black hover:border-transparent hover:scale-105 duration-300 rounded">
                            GITHUB
                        </button>
                        </Parallax>


                        <Parallax 
                        scale={[1,0]} easing="easeInQuad" opacity={[10,-20]}>
                        <button class="bg-transparent   font-semibold  py-3 px-20 border border-black hover:scale-105 duration-300 rounded">
                            GMAIL
                        </button>
                        </Parallax>

                        <Parallax 
                        scale={[1,0]} easing="easeInQuad" opacity={[10,-20]} >
                        <button class="bg-transparent   font-semibold  py-3 px-20 border border-black hover:scale-105 duration-300 rounded">
                            FACEBOOK
                        </button>
                        </Parallax>
                    </div>

            


            
            



        </div>

    )

}


export default Contact;