import React from 'react'
import './App.css';
import { Parallax } from 'react-scroll-parallax';
import scroll from './assets/img/animation_ln7vabgx_small.gif'







const By = () =>{

    return(

        <div className='flex flex-col justify-center items-center text-black w-full min-h-screen'>
            <Parallax 
                opacity={[0,10]} easing="easeInQuad">
                    <h1 className='text-9xl tracking-widest z-50'>GOODBYE :{")"}</h1>
            </Parallax>


            



        </div>

    )

}


export default By;