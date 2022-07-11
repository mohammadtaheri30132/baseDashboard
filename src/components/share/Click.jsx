import React from 'react';

const Click = ({children, justOpacity = false, onClick, className}) => {
    return (
        <div onClick={onClick}
             className={` ${justOpacity ? "" : "active:scale-[0.95]" + " " + className} active:opacity-80`}>
            {children}
        </div>
    );
};

export default Click;
