import React from 'react'
import { Button } from '@heroui/react'

// Button End Icon
export const UpperArrowIcon = ()=>{
    return(
        <img src="./src/assets/Vector.png" alt="" />
    )
}
function Hero() {
    
  return (
    <section className='w-full bg-[url(./assets/Img.png)] sm:bg-cover bg-contain'>
        <div className='text-white w-full md:w-[600px] xl:w-[700px] 2xl:w-[1000px] pt-16 sm:pt-28 pb-20 space-y-2 sm:space-y-4 px-6 sm:px-12 md:px-20 xl:px-28 2xl:px-52 text-center md:text-start'>
            <h6 className='text-cyan text-base sm:text-2xl'>AI SDRs (aiDRs)</h6>
            <h2 className='text-[40px] md:text-6xl font-bold leading-tight sm:leading-none'>More <span className='font-medium italic'>leads, <br /></span> less <span className='font-medium italic'>people.</span></h2>
            <p className='font-work_sans font-light  text-lg sm:text-xl'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
            <Button variant='flat' radius='full' endContent={<UpperArrowIcon/>} className='bg-cyan text-dark_bg font-work_sans font-medium w-full sm:w-fit'>Sign Up for the Beta</Button>
        </div>
    </section>
  )
}

export default Hero