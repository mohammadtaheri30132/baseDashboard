import React from 'react';

const Content = ({children}) => {
    return (
        <div className='content bg-main-second p-8 rounded-tr-3xl h-[calc(100vh-100px)]' >
            {children}
        </div>
    );
};

export default Content;
