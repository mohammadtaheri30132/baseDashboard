import React from 'react';

const Modal = ({children,showModal, setShowModal,}) => {
    const [animationBackground, setAnimationBackground] = React.useState(false)


    React.useEffect(() => {
        showModal && (
            setTimeout(() => {
                setAnimationBackground(true)
            }, 50)
        )
        showModal == false && closeModal()

    }, [showModal])

    const closeModal = () => {
        setAnimationBackground(false)
        setTimeout(() => {
            setShowModal(false)
        }, 50)
    }

    return (

        <>
            <div onClick={closeModal}
                 className={`${animationBackground ? "opacity-80" : "opacity-0"} ${showModal ? " flex" : "opacity-0 hidden"} right-0 top-0 left-0 h-screen w-full fixed bg-[#F3F5F6] transition-all duration-700  z-40 w-full `}></div>
            <div
                className={`$${animationBackground ? "bottom-0" : "-bottom-full"}  ${showModal ? " flex" : " hidden"} p-5 absolute left-0 right-0 shadow-[0_0_30px_#E6E5F6] transition-all duration-500  z-50  w-full  bg-[#fff] border-[#E6E5F6]  h-min	   border-solid  border-[1px] rounded-tr-[50px] rounded-tl-[50px]         `}>
                {children}

            </div>
        </>
    )
};

export default Modal;
