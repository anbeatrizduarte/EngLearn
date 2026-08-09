import React from 'react';

const textVariants = {
    default: "text-text font-primary font-normal",
    title: "text-secondary font-primary font-normal",
    textSecondary: "text-primary font-primary font-normal",
    muted: "text-base text-[#878787] font-primary font-normal"
};

export function Typography({ as: Component = "span", children, variant = "", className = "", ...props }) {
    return (
        <>
            <Component className={`${textVariants[variant]} ${className}`} {...props} >
                {children}
            </Component>
        </>
    )
}