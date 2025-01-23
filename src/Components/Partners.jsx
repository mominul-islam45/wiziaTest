import React from 'react'

function Partners() {
    const partnersList = [
      './BackHub logo.png',
      './CableLabs logo.png',
      './DBS logo.png',
      './EasyEuro logo.png',
      './AMD logo.png'
    ]
  return (
    <section className='bg-light_bg py-14'>
        <p className=' uppercase text-cyan text-center mb-5'>our trusted partners</p>
        <div className='flex gap-x-8 gap-y-2 flex-wrap justify-center md:px-4'>
        {partnersList.map((item,i)=>(
            <div key={i}>
                <img src={item} alt="Partner Logo" className='hover:scale-125 transition-transform'/>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Partners