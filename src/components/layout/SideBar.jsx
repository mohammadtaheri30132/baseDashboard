import React from 'react';
import {DeviceMessage, HomeTrendUp, Logout, Profile} from "iconsax-react";
import {useNavigate} from "react-router-dom";
import { NavLink } from "react-router-dom";

const SideBar = () => {
   const navigation= useNavigate()
    const logout = () => {
        localStorage.clear()
        navigation('/login',{replace:true})
    }
    return (
        <aside className=' w-[20%] xl:w-[18%] pt-3 p-8  '>
            <div>
                <img src="./logo.png" height={200} alt="logo"/>
            </div>

            <div className='mt-10  '>
                <NavLink to='dashboard'
                         className={({ isActive }) => isActive ? 'hover-nav rounded-xl relative flex active-svg bg-active-nav active-nav-light px-4 py-3  mt-5 items-center' : 'hover-nav rounded-xl relative flex    px-4 py-3  mt-5 items-center' }>
                    <HomeTrendUp size="30" variant="Bulk"/>
                    <div>

                    </div>
                    <p className='text-text-nav mx-4 font-medium  '>صفحه اصلی</p>
                </NavLink>
                <NavLink to='template'
                         className={({ isActive }) => isActive ? 'hover-nav rounded-xl relative flex active-svg bg-active-nav active-nav-light px-4 py-3  mt-5 items-center' : 'hover-nav rounded-xl relative flex    px-4 py-3  mt-5 items-center' }>
                    <DeviceMessage size="32" variant="Bulk"/>
                    <p className='text-text-nav mx-4 font-medium'>راهنما</p>
                </NavLink>
                <NavLink  to='profile'
                          className={({ isActive }) => isActive ? 'hover-nav rounded-xl relative flex active-svg bg-active-nav active-nav-light px-4 py-3  mt-5 items-center' : 'hover-nav rounded-xl relative flex    px-4 py-3  mt-5 items-center' }>
                    <Profile size="32" variant="Bulk"/>
                    <p className='text-text-nav mx-4 font-medium'>پروفایل</p>
                </NavLink>
                <a href='#' onClick={logout}
                   className='flex hover-nav  defult-svg rounded-xl  px-4 py-3  mt-5 items-center'>
                    <Logout size="32" color="#d9e3f0"/>
                    <p className='text-text-nav mx-4 font-medium'>خروج</p>
                </a>
            </div>
        </aside>
    );
};

export default SideBar;
