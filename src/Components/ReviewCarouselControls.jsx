import React from 'react'

function ReviewCarouselControls({slides, currentIndex, setCurrentIndex}) {

  const prevBtn = ()=>{
    setCurrentIndex(currentIndex === 0? slides.length -1: currentIndex -1)
  }
  const nextBtn = ()=>{
    setCurrentIndex(currentIndex === slides.length -1 ? 0: currentIndex +1)
  }

  const goToSlide = (i)=>(
    setCurrentIndex(i)
  )
 
  return (
    <>
      <button onClick={prevBtn} className=' group hidden md:block rotate-180 bg-light_bg p-2 rounded-md absolute top-[250px] md:left-[60px] lg:left-[100px] xl:left-[150px]'>
        <img src="../Vector.svg" alt="" className='group-hover:opacity-50 transition-opacity'/>
      </button>

      <button onClick={nextBtn} className='group hidden md:block bg-light_bg p-2 rounded-md absolute top-[250px] md:right-[60px] lg:right-[100px] xl:right-[150px]'>
        <img src="./Vector.svg" alt="" className='group-hover:opacity-50 transition-opacity'/>
      </button>

      {/* Dots */}
      <div className='flex justify-center gap-x-6 pt-8'>
        {slides.map((slide,i)=>(
          <div key={i}>
            <div onClick={()=> goToSlide(i)} className={`size-[10px] rounded-full ${i === currentIndex ? 'bg-cyan': 'bg-light_bg'} cursor-pointer`}></div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ReviewCarouselControls