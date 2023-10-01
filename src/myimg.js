import React from 'react'
import './App.css';
import { Parallax } from 'react-scroll-parallax';
import TAHA from './assets/img/scxzv.jpg'







const Myimg = () =>{

    return(

        <div className='flex  justify-center items-center text-black w-full min-h-screen '>
    
            
           <Parallax className='w-1/5' rotateY={[-580, 0]}  easing="easeInQuad" >

                    <img src={TAHA} />
           </Parallax>
           <Parallax className='w-1/5 -z-10 text-left' translateX={['-283px','500px'] } opacity={[10,-3]}  easing="easeInQuad"  >
                    <h1 className='text-4xl mb-4'>ABOUT ME</h1>
                    <p className='font-light leading-2'>Voluptate labore tempor proident aliqua voluptate Lorem. Cupidatat enim eiusmod cupidatat est magna minim occaecat elit proident. In duis esse labore voluptate. Incididunt ullamco labore reprehenderit nisi ullamco eu incididunt sint deserunt. Amet tempor ex enim cupidatat dolore non id elit deserunt non.</p>
           </Parallax>
      
                

    </div>
    
    )

}


export default Myimg;