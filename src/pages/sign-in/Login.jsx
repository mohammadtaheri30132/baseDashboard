import React from 'react';
import {useNavigate} from "react-router-dom";

const Login = () => {
   const  navigate = useNavigate()
    return (
        <div className="lg:flex ">
            <div className="lg:w-1/2 xl:max-w-screen-sm ">
                <div className="py-12 bg-main rounded-bl-full lg:bg-main  flex justify-center lg:justify-start lg:px-12">
                    <div className="cursor-pointer flex items-center w-full justify-center">
                        <div>
                            <svg
                                className="w-10 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                id="Layer_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 225 225"
                                style={{ enableBackground: "new 0 0 225 225" }}
                                xmlSpace="preserve"
                            >
                                <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                "
                                    }}
                                />
                                <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                                    <g>
                                        <path
                                            id="Layer0_0_1_STROKES"
                                            className="st0"
                                            d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="text-2xl  text-white tracking-wide ml-2 font-semibold">
                            زمین نو
                        </div>
                    </div>
                </div>
                <div className="mt-10  px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                    <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-right xl:text-5xl  xl:text-bold"
                    >
                        ورود به پنل
                    </h2>
                    <div className="mt-12">
                        <form>
                            <div>
                                <div className="text-xl font-bold text-gray-700 tracking-wide">
                                    ایمیل
                                </div>
                                <input
                                    className="w-full text-sm text-main py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type=""
                                    placeholder="mike@gmail.com"
                                />
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-xl font-bold text-gray-700 tracking-wide">
                                        رمزعبور
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <input
                                    className="w-full text-sm py-2 text-main text-sm border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type=""
                                    placeholder="رمزعبور خود را وارد نمایید"
                                />
                            </div>
                            <div className="mt-10">
                                <button
                                    onClick={()=>{
                                        localStorage.setItem('localAccessToken','1')
                                        navigate("/dashboard", { replace: true });
                                    }}
                                    className="bg-main text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-main-second
                          shadow-lg"
                                >
                                    ورود
                                </button>
                            </div>
                        </form>
                        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                            ثبت نام نکرده اید ?{" "}
                            <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                                ثبت نام کنید
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden  rounded-tr-[200px] rounded-br-[200px]  lg:flex items-center justify-center bg-main flex-1 h-screen">
                <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
                    <svg

                        data-name="Layer 1"
                        width="500.13137"
                        height="599.60881"
                        viewBox="0 0 810.13137 599.60881"
                    >
                        <path
                            d="M431.33056,209.19615l8.56259,13.38287,30.54814-15.14423,15.70609-4.8021a12.192,12.192,0,0,0,4.80476-20.5245h0a12.192,12.192,0,0,0-16.94621.20031l-13.18008,13.0458Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#a0616a"
                        />
                        <path
                            d="M445.78122,221.9553l-11.41676-17.84386-43.28891,19.045a19.70986,19.70986,0,0,0-11.611,15.52114h0a19.70986,19.70986,0,0,0,11.24426,20.3954l69.00749,31.03226a20.11926,20.11926,0,0,0,26.513-9.33206h0a20.11929,20.11929,0,0,0-11.113-27.805l-51.76479-17.91931Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3b82f6"
                        />
                        <path
                            d="M902.65793,524.88009c0-5.36-1.8-9.71-4.01-9.72h-602.49c-2.22.01-4.01,4.36-4.02,9.72v220.643a2.00261,2.00261,0,0,1-1.8087,1.99364q-2.42566.23283-4.85127.43338c-.04,0-.08.01-.12006.01-.87994.08-1.75994.13995-2.63995.21h-.01q-.679-1.25541-1.34226-2.5327a2.01133,2.01133,0,0,1-.22775-.92907V512.2701c0-1.48.06-2.97.16-4.44a56.88512,56.88512,0,0,1,.75-6.02c1.69-9.29,5.51-15.58,9.85-15.6h611a4.68253,4.68253,0,0,1,1.84.38995,7.17355,7.17355,0,0,1,2.27,1.59,14.06946,14.06946,0,0,1,2.23,3.05c2.14,3.77,3.67,9.39,4.21,15.93,0,.06.01.12.01.18.14,1.62006.21,3.27.2,4.92l.14,21.43.09,12.78.27,40.1.1,14.24.44,146.2v0a2,2,0,0,1-2,2h-8.04a2,2,0,0,1-2-2Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#e6e6e6"
                        />
                        <polygon
                            points="101.479 483.961 88.516 481.633 91.326 430.523 110.459 433.959 101.479 483.961"
                            fill="#a0616a"
                        />
                        <path
                            d="M294.44182,647.76167l-39.864-7.15842.09051-.50415a15.76521,15.76521,0,0,1,18.3019-12.73035l.001.00017,8.2735-4.217,12.59413,7.96426,3.47986.62488Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#2f2e41"
                        />
                        <path
                            d="M610.80736,580.21034H531.318a8.04424,8.04424,0,0,1-8.03511-8.03516v-72.729A8.04424,8.04424,0,0,1,531.318,491.411h79.48939a8.04425,8.04425,0,0,1,8.03516,8.03516v72.729A8.04425,8.04425,0,0,1,610.80736,580.21034Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3f3d56"
                        />
                        <path
                            d="M605.21991,573.51346H536.90543a7.14243,7.14243,0,0,1-7.13433-7.13433V505.24226a7.14244,7.14244,0,0,1,7.13433-7.13434h68.31448a7.14242,7.14242,0,0,1,7.13433,7.13434v61.13687A7.14241,7.14241,0,0,1,605.21991,573.51346Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#fff"
                        />
                        <path
                            d="M598.405,515.90722H543.72029a1.78345,1.78345,0,1,1,0-3.5669H598.405a1.78345,1.78345,0,1,1,0,3.5669Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3b82f6"
                        />
                        <path
                            d="M598.405,522.95453H543.72029a1.78354,1.78354,0,0,1,0-3.56708H598.405a1.78354,1.78354,0,0,1,0,3.56708Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3b82f6"
                        />
                        <path
                            d="M567.42481,530.00183H543.72029a1.78354,1.78354,0,0,1,0-3.56708h23.70452a1.78354,1.78354,0,0,1,0,3.56708Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3b82f6"
                        />
                        <path
                            d="M598.405,544.7615H543.72029a1.78345,1.78345,0,1,1,0-3.5669H598.405a1.78345,1.78345,0,1,1,0,3.5669Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#e4e4e4"
                        />
                        <path
                            d="M598.405,551.8088H543.72029a1.78354,1.78354,0,1,1,0-3.56707H598.405a1.78353,1.78353,0,1,1,0,3.56707Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#e4e4e4"
                        />
                        <path
                            d="M567.42481,558.85611H543.72029a1.78354,1.78354,0,0,1,0-3.56708h23.70452a1.78354,1.78354,0,0,1,0,3.56708Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#e4e4e4"
                        />
                        <path
                            d="M738.942,385.93439H674.02269a3.4638,3.4638,0,0,0-3.45856,3.46748V491.95532h71.84539V389.40187A3.46567,3.46567,0,0,0,738.942,385.93439ZM706.70077,444.204a7.70188,7.70188,0,0,1-7.66591-7.66586V424.70949a7.66589,7.66589,0,0,1,15.33177,0v11.82865a7.70176,7.70176,0,0,1-7.66586,7.66586Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#2f2e41"
                        />
                        <path
                            d="M670.34128,488.675v9.89437a1.93826,1.93826,0,0,0,1.93434,1.93428h68.42246a1.944,1.944,0,0,0,1.93428-1.93428V488.675Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3f3d56"
                        />
                        <path
                            d="M846.44263,225.88816H568.93775a9.0084,9.0084,0,0,0-8.99406,8.994V422.14363a9.00266,9.00266,0,0,0,8.99406,8.994H846.44263a9.00266,9.00266,0,0,0,8.99406-8.994V234.88217A9.0084,9.0084,0,0,0,846.44263,225.88816Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3f3d56"
                        />
                        <path
                            d="M844.12626,232.3844h-272.87a4.82047,4.82047,0,0,0-4.81,4.82v182.62a4.8183,4.8183,0,0,0,4.81,4.81h272.87a4.8183,4.8183,0,0,0,4.81-4.81v-182.62A4.82047,4.82047,0,0,0,844.12626,232.3844Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#fff"
                        />
                        <path
                            d="M790.97581,503.94666H628.633a2.9864,2.9864,0,0,1-2.92236-3.60157l2.519-11.96386a2.99929,2.99929,0,0,1,2.92188-2.3711H788.45725a2.9993,2.9993,0,0,1,2.92188,2.3711l2.519,11.96386a2.98641,2.98641,0,0,1-2.92236,3.60157Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#2f2e41"
                        />
                        <rect
                            x="437.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="447.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="457.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="467.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="477.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="487.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="497.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="507.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="517.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="527.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="537.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="547.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="557.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="567.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="577.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="587.3701"
                            y="337.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="437.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="447.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="457.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="467.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="477.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="487.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="497.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="507.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="517.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="527.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="537.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="547.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="557.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="567.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="577.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="587.25194"
                            y="342.96884"
                            width={5}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <rect
                            x="485.25194"
                            y="348.96884"
                            width={40}
                            height={3}
                            rx="0.48819"
                            fill="#3f3d56"
                        />
                        <path
                            d="M825.33368,732.18206l-7.71-12.39-1.54,7.08007c-.27,1.24-.54,2.5-.79,3.75-2.18995-1.87011-4.52-3.60009-6.79981-5.26q-10.5-7.62012-20.99023-15.26l2.18994,12.69995c1.3501,7.82006,2.76025,15.80005,6.1001,22.95.37011.81006.77,1.61011,1.20019,2.39013h32.54a10.48736,10.48736,0,0,0,.54-2.24011.77469.77469,0,0,0,.00976-.15C830.59394,740.902,827.91376,736.33209,825.33368,732.18206Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#f0f0f0"
                        />
                        <path
                            d="M385.33368,732.18206l-7.71-12.39-1.54,7.08007c-.27,1.24-.54,2.5-.79,3.75-2.19-1.87011-4.52-3.60009-6.79981-5.26q-10.5-7.62012-20.99023-15.26l2.18994,12.69995c1.3501,7.82006,2.76025,15.80005,6.1001,22.95.37011.81006.77,1.61011,1.20019,2.39013h32.54a10.48736,10.48736,0,0,0,.54-2.24011.77469.77469,0,0,0,.00976-.15C390.59394,740.902,387.91376,736.33209,385.33368,732.18206Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#f0f0f0"
                        />
                        <path
                            d="M1003.875,749.49707l-275.75.30734a1.19068,1.19068,0,0,1,0-2.38137l275.75-.30733a1.19068,1.19068,0,1,1,0,2.38136Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#cacaca"
                        />
                        <path
                            d="M830.40955,257.54536H575.08619a1.0156,1.0156,0,0,1,0-2.0307H830.40955a1.0156,1.0156,0,0,1,0,2.0307Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#cacaca"
                        />
                        <ellipse
                            cx="397.53206"
                            cy="94.05187"
                            rx="5.95043"
                            ry="6.08304"
                            fill="#3f3d56"
                        />
                        <ellipse
                            cx="418.08808"
                            cy="94.05187"
                            rx="5.95043"
                            ry="6.08304"
                            fill="#3f3d56"
                        />
                        <ellipse
                            cx="438.64411"
                            cy="94.05187"
                            rx="5.95043"
                            ry="6.08304"
                            fill="#3f3d56"
                        />
                        <path
                            d="M818.03308,239.67217H803.43116a1.10585,1.10585,0,0,0,0,2.21126h14.60192a1.10585,1.10585,0,0,0,0-2.21126Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3f3d56"
                        />
                        <path
                            d="M818.03308,243.82236H803.43116a1.10585,1.10585,0,0,0,0,2.21126h14.60192a1.10585,1.10585,0,0,0,0-2.21126Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3f3d56"
                        />
                        <path
                            d="M818.03308,247.9671H803.43116a1.10585,1.10585,0,0,0,0,2.21126h14.60192a1.10585,1.10585,0,0,0,0-2.21126Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3f3d56"
                        />
                        <rect
                            x="492.18539"
                            y="162.66762"
                            width="40.58192"
                            height="8.67797"
                            rx="4.33898"
                            fill="#3b82f6"
                        />
                        <rect
                            x="471.57522"
                            y="180.02355"
                            width="81.80226"
                            height="8.67797"
                            rx="4.33898"
                            fill="#e6e6e6"
                        />
                        <rect
                            x="471.57522"
                            y="197.37949"
                            width="81.80226"
                            height="8.67797"
                            rx="4.33898"
                            fill="#e6e6e6"
                        />
                        <path
                            d="M601.18626,414.16443a29.81518,29.81518,0,0,1-1.88,10.47h-28.05a4.8183,4.8183,0,0,1-4.81-4.81v-35.28a29.62789,29.62789,0,0,1,4.74-.38A29.99813,29.99813,0,0,1,601.18626,414.16443Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#e6e6e6"
                        />
                        <path
                            d="M545.84252,442.05764c-.42,12.15-26.26,44.93-39.85,49.63-2.31.8-3.66,1.24-3.66,1.24l-4.73-1.43-57.28-17.33c-10.03,5.9-39.94995,8.9-64.5,10.4-19.54,1.19-35.69,1.43-35.69,1.43-5.76459,43.84125-17.12512,85.77838-36.29,125.06l-23-4L302.571,460.73771a16.29956,16.29956,0,0,1,11.998-13.37479l156.30361-40.8853s8.62-1.56,26.8,7.21C527.60253,428.12765,546.14251,433.21761,545.84252,442.05764Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#2f2e41"
                        />
                        <polygon
                            points="297.161 567.951 285.481 574.036 256.449 531.879 273.689 522.897 297.161 567.951"
                            fill="#a0616a"
                        />
                        <path
                            d="M498.85625,730.11712l-35.91873,18.71426-.23669-.45424a15.7652,15.7652,0,0,1,6.69577-21.26471l.00087-.00046,3.96732-8.39607,14.83512-1.40026,3.13546-1.63364Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#2f2e41"
                        />
                        <path
                            d="M515.97583,439.707c5.242,10.969-2.5262,51.97991-12.40633,62.42789l-2.62257,1.78373-.88683.4621c-5.92682,20.04751-69.5292,78.68378-69.5292,78.68378,21.48371,27.36841,34.87317,61.01721,43.416,98.42663l-19.08552,8.81719-69.92623-104.39a16.29956,16.29956,0,0,1,.2017-18.43659L413.664,526.8465l46.4836-90.03967C493.36306,435.78213,512.15692,431.72882,515.97583,439.707Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#2f2e41"
                        />
                        <path
                            d="M544.23571,446.32506c-100.39319-15.26742-109.54-28.99721-110.52179-28.75267l-.8714.21651,14.54479-24.58472,5.33518-6.302-4.10353-2.93272,1.62829-12.18355c1.26983-4.93557,2.2981-10.7485,1.75-11.52686-1.13145-1.25253-3.65023-3.53035-3.67529-3.553l-.32386-.29286,3.78085-8.822,5.0636-70.53353,13.05489-26.026,26.94511-15.974,23.7502.28749,20.87194,19.35936a44.6736,44.6736,0,0,1,24.53351,48.53856l-10.60179,55.99828-3.90014,28.86309,6.36405,6.36346-3.95979,3.95979-2.35416,13.48379,2.41142,15.27074c1.88476,13.87544-6.49613,14.70247-7.11524,14.87544-.037.01074-1.85768,4.77678-1.93462,4.77678C544.71525,446.83442,544.699,446.39552,544.23571,446.32506Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3b82f6"
                        />
                        <path
                            d="M538.96487,501.99984A10.96209,10.96209,0,0,0,537.6798,485.24l11.01272-37.36658-19.36076,5.91234-7.48966,34.57751a11.02152,11.02152,0,0,0,17.12277,13.63661Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#a0616a"
                        />
                        <path
                            d="M540.75268,476.07225l-20.927-9.387,16.78623-69.70945-31.26135-75.88654a27.638,27.638,0,0,1,19.86987-37.57349h0A27.66746,27.66746,0,0,1,557.951,304.87871l19.01235,90.46662Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3b82f6"
                        />
                        <path
                            d="M458.12281,209.78939l7.64942-31.81355a4.227,4.227,0,0,1,5.0925-3.11826l6.93358,1.66715a4.227,4.227,0,0,1,3.11825,5.0925l-7.64942,31.81355a4.227,4.227,0,0,1-5.0925,3.11826l-6.93358-1.66715A4.227,4.227,0,0,1,458.12281,209.78939Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3f3d56"
                        />
                        <path
                            d="M471.28588,176.67527a2.278,2.278,0,0,0-2.74428,1.68038l-7.64942,31.81356a2.278,2.278,0,0,0,1.68038,2.74428l6.93358,1.66714a2.278,2.278,0,0,0,2.74428-1.68038l7.64943-31.81356a2.278,2.278,0,0,0-1.68039-2.74428Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#3b82f6"
                        />
                        <circle cx="308.43172" cy="45.69893" r="33.95752" fill="#a0616a" />
                        <path
                            d="M519.02886,218.59979l1.22266-6.87793a20.90944,20.90944,0,0,0-12.11231-22.4956l-1.04883-.50733.86426-.46191a1.33421,1.33421,0,0,0-.79443-2.50049l-.98145.12207a3.49409,3.49409,0,0,1-3.29639-5.4585,30.32834,30.32834,0,0,1-10.6748,2.29541c-5.30811-.04-9.91992-2.62744-11.74951-6.59228a9.51282,9.51282,0,0,1-.81055-3.11817c-5.60693,2.20948-8.63037,8.83252-8.66162,8.90186l-1.65771,3.69922.70947-3.99121c.02148-.12158,2.19189-12.20947,5.33838-19.709h0c3.3833-8.06347,17.46728-12.31347,38.62451-11.64111,20.66553.64941,25.25,24.21191,25.64355,26.4917,5.8711,5.64893,3.7378,16.34424,1.93213,22.24316-2.92431,9.55323-8.69482,19.05909-11.87451,19.55957a1.46707,1.46707,0,0,1-1.49756-.6372,4.22228,4.22228,0,0,0-2.88916-1.91846c-2.56933-.36523-5.22119,1.74121-5.24756,1.76221Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#2f2e41"
                        />
                        <path
                            d="M471.875,749.49707l-275.75.30734a1.19069,1.19069,0,0,1,0-2.38137l275.75-.30733a1.19068,1.19068,0,1,1,0,2.38136Z"
                            transform="translate(-194.93432 -150.19559)"
                            fill="#cacaca"
                        />
                    </svg>

                </div>
            </div>
        </div>

    );
};

export default Login;
