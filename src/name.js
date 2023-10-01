import React from 'react'
import './App.css';
import { Parallax } from 'react-scroll-parallax';
import TAHA from './assets/img/scxzv.jpg'







const Name = () =>{

    return(

        <div className='flex flex-col justify-center items-center text-black w-full min-h-screen'>
        <Parallax 
            translateX={['-300','600']} easing="easeInQuad">
                <h1 className='text-9xl tracking-widest z-50 font-light'>I'M </h1>
        </Parallax>
        <Parallax 
            translateX={['200','-600']} easing="easeInQuad">
                <h1 className='text-9xl tracking-widest z-50 font-light '>TAHA SABIRI</h1>
        </Parallax>
        



    
        



    </div>
    
    )

}


export default Name;