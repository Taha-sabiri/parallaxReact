import React from 'react'
import './App.css';
import { Parallax } from 'react-scroll-parallax';
import scroll from './assets/img/animation_ln7vabgx_small.gif'







const Header = () =>{

    return(

        <div className='flex flex-col justify-center items-center text-black w-full min-h-screen'>
            <Parallax 
                scale={[1,0]} easing="easeInQuad">
                    <h1 className='text-9xl tracking-widest z-50'>WElCOME</h1>
            </Parallax>


            <div className='-z-40 absolute bottom-10'>
            <Parallax
            opacity={[50,-30]} 
            >
            <img src={scroll} className='w-90 -mt-24 '/>
            </Parallax>
            </div>
            



        </div>

    )

}


export default Header;