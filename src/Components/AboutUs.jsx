import React from 'react';

const AboutUs = () => {
    return (
        <div className='my-10'>
            <h2 className="text-3xl font-extrabold mb-8 flex justify-center items-center mx-auto">
                Our Partners
            </h2>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
                <div className='h-[100px]'><img className='h-full w-full object-cover rounded-full' src="https://i.ibb.co.com/k5N0msf/3d-render-help-calligraphic-with-human-hand-pen-tool-created-clipping-path-included-jpeg-easy-compos.jpg" alt="Logo icon!" /></div>
                <div className='h-[100px]'><img className='h-full w-full object-cover rounded-full' src="https://i.ibb.co.com/4NhzYc4/vip-typography-3d-golden-font.jpg" alt="Logo icon!" /></div>
                <div className='h-[100px]'><img className='h-full w-full object-cover rounded-full' src="https://i.ibb.co.com/X72r8mB/3d-render-new-text-calligraphic-pen-tool-created-clipping-path-included-jpeg-easy-composite.jpg" alt="Logo icon!" /></div>
                <div className='h-[100px]'><img className='h-full w-full object-cover rounded-full' src="https://i.ibb.co.com/PQSN3CS/minimalist-pastel-golden-black-word-concept.jpg" alt="Logo icon!" /></div>
                <div className='h-[100px]'><img className='h-full w-full object-cover rounded-full' src="https://i.ibb.co.com/4thh7Sz/blue-splash-text-blot-against-yellow-background.jpg" alt="Logo icon!" /></div>
                <div className='h-[100px]'><img className='h-full w-full object-cover rounded-full' src="https://i.ibb.co.com/qyNt0N0/noir-word-black-3d-text-style.jpg" alt="Logo icon!" /></div>
            </div>
        </div>
    );
};

export default AboutUs;