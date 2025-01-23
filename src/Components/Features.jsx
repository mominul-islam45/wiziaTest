import React from 'react'

function Features() {

    const featuresList = [
        {
            icon: './src/assets/Vector3.png',
            title: 'You’re in Control',
            description: 'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.'
        },
        {
            icon: './src/assets/Vector5.png',
            title: 'Infinitely Scalable',
            description: 'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.'
        },
        {
            icon: './src/assets/Vector5.png',
            title: 'Incredibly Flexible',
            description: 'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.'
        }
    ]

  return (
    <div className='py-20 px-6 sm:px-12 md:px-20 lg:px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 items-baseline max-w-[1700px] mx-auto'>
        {featuresList.map(({icon,title,description},i)=>(
            <div key={i} className='text-white hover:-translate-y-4 transition-transform'>
                <img src={icon} alt="Icon" className='scale-90 sm:scale-100'/>
                <h6 className='text-2xl sm:text-[28px] font-semibold mt-8'>{title}</h6>
                <p className='text-lg sm:text-[22px] font-light font-work_sans mt-4'>{description}</p>
            </div>
        ))}
    </div>
  )
}

export default Features