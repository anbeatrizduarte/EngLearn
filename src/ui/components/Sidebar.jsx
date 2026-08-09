import React from 'react';
import { Typography } from '../foundations/Typography';
import { Link } from 'react-router-dom';

export function Sidebar({ isOpen }) {

    return (
        <div className={`fixed inset-y-0 left-0 w-40 bg-[#E5EFEE] z-10 transition-transform duration-300 border-r-2 border-muted ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
            <div className='mx-4 mt-20'>
                <Typography variant="title" className='text-xl'>GERAL</Typography>
                <div className=''>
                    <Link to="/">
                        <div className='mt-4 hover:bg-primary/20 rounded-sm hover:cursor-pointer'>
                            <Typography variant="default" className='text-lg pl-1'>Home</Typography>
                        </div>
                    </Link>

                    <div className='mt-4 hover:bg-primary/20 rounded-sm hover:cursor-pointer'>
                        <Typography variant="default" className='text-lg pl-1'>Pomodoro</Typography>
                    </div>

                    <Link to="/vocabulary">
                        <div className='mt-4 hover:bg-primary/20 rounded-sm hover:cursor-pointer'>
                            <Typography variant="default" className='text-lg pl-1'>Vocabulário</Typography>
                        </div>
                    </Link>

                    <Link to="/pronunce">
                        <div className='mt-4 hover:bg-primary/20 rounded-sm hover:cursor-pointer'>
                            <Typography variant="default" className='text-lg pl-1'>Pronúncia</Typography>
                        </div>
                    </Link>

                    <div className='mt-4 hover:bg-primary/20 rounded-sm hover:cursor-pointer'>
                        <Typography variant="default" className='text-lg pl-1'>How to Study?</Typography>
                    </div>

                </div>
            </div>

        </div>
    )
}