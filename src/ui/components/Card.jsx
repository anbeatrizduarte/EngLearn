import React from 'react';

export function Card({ titleCard, descriptionCard, className = "", children, ...props }) {
    return (
        <div
            {...props}
            className={`relative w-full max-w-[20rem] mt-12 rounded-xl shadow-shadowPrimary ${className}`}
        >
            <div className='p-4 grid'>
                {children}
            </div>
        </div>
    )
}