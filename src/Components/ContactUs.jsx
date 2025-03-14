import React from 'react';

const ContactUs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-20 my-10 px-4 bg-purple-300 relative'>
            <div className="absolute inset-0 animate-neon-glow-purple -z-10"></div>
            <div className='flex items-center justify-center gap-6 w-11/12 mx-auto '>
                <div><img src="https://img.icons8.com/?size=48&id=tnnUFgHrPmR0&format=gif" alt="Icon pic!" /></div>
                <div className='space-y-2'><p className='font-bold text-lg'>Get the latest news and offers</p> <h2 className='font-bold text-3xl'>Subscribe to our newsletter</h2></div>
            </div>
            <div>
                <div className=" mt-2 join border border-purple-950">
                    <input className="input input-bordered join-item h-[60px]" placeholder="Email" />
                    <button className="btn h-[60px] join-item bg-purple-500 hover:bg-purple-800 hover:text-white">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;