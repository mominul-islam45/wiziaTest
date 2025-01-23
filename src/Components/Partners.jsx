import React from 'react'
import BackHub from '/BackHub logo.png'
import CableLabs from '/CableLabs logo.png'
import DBS from '/DBS logo.png'
import EasyEuro from '/EasyEuro logo.png'
import AMD from '/AMD logo.png'


function Partners() {
    const partnersList = [BackHub, CableLabs, DBS, EasyEuro, AMD]
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