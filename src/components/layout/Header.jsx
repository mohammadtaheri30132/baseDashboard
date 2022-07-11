import React from 'react';
import {NotificationBing} from "iconsax-react";

const Header = () => {
    return (
        <header className='bg-main  w-full h-[100px] flex items-center justify-between p-5'>
            <p className='font-bold text-xl'>محمد طاهری عزیز ،به زمین نو خوش آمدی 👋</p>
            <div className='defult-svg cursor-pointer'>
                <NotificationBing size="32" />
            </div>
        </header>
    );
};

export default Header;
