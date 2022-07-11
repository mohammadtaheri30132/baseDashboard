import React from 'react';
import SideBar from "./SideBar";
import Header from "./Header";
import Content from "./Content";

const AuthLayout = ({children}) => {
    return (
        <main className='min-h-[100vh] bg-main w-full flex justify-between overflow-x-hidden '>
            <SideBar/>
            <section className=' xl:w-[82%]  w-[80%]'>
                <Header/>
                <Content>
                    {children}
                </Content>
            </section>
        </main>
    );
};

export default AuthLayout;
