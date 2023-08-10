import React from "react";

const Card2 = () => {
    return (
        <div>
            <div className=" h-[381px] w-[252px] bg-white rounded-md ">
                {/* image section */}
                <div className=" relative h-[186px] w-full border-2">
                    <img
                        src="./assets/Sales-Analysis-3.jpg"
                        className=" w-full h-full rounded-tl-md rounded-tr-md"
                        alt=""
                    />
                    <div className=" absolute top-2 left-0 text-textColor bg-red h-[21px] text-[12px] w-[132px] ">
                        <div className="flex h-full w-full  justify-between items-center px-2">
                            <svg
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g
                                    id="ion:diamond-outline"
                                    clip-path="url(#clip0_139_224)"
                                >
                                    <path
                                        id="Vector"
                                        d="M1.31246 4.46875H12.6875M0.968475 4.77877L6.64914 11.6205C6.69042 11.6705 6.74354 11.711 6.80437 11.7389C6.86521 11.7667 6.93213 11.7812 6.99996 11.7812C7.06779 11.7812 7.13471 11.7667 7.19555 11.7389C7.25638 11.711 7.30949 11.6705 7.35078 11.6205L13.0314 4.77877C13.0873 4.71124 13.1197 4.62953 13.1243 4.54449C13.129 4.45945 13.1056 4.37512 13.0574 4.3027L11.1305 1.41451C11.0908 1.35474 11.0354 1.30538 10.9694 1.27112C10.9034 1.23686 10.829 1.21883 10.7534 1.21875H3.24648C3.17087 1.21883 3.09654 1.23686 3.03054 1.27112C2.96455 1.30538 2.90908 1.35474 2.86941 1.41451L0.942499 4.3027C0.894279 4.37512 0.870939 4.45945 0.875579 4.54449C0.880219 4.62953 0.91262 4.71124 0.968475 4.77877V4.77877Z"
                                        stroke="white"
                                        stroke-width="0.826531"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        id="Vector_2"
                                        d="M10.9375 1.625L9.625 4.46875L7 1.21875M3.0625 1.625L4.375 4.46875L7 1.21875M7 11.375L4.375 4.46875M7 11.375L9.625 4.46875"
                                        stroke="white"
                                        stroke-width="0.826531"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_139_224">
                                        <rect
                                            width="14"
                                            height="13"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className=" text-white text-[12px] font-semibold">
                                24% off
                            </p>
                            <div className=" flex justify-center items-center">
                                <button className=" bg-white text-[12px] px-1 text-red rounded-sm border-1 font-semibold">
                                    Deal!!
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" absolute top-2 right-2">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Vector">
                                <path
                                    id="Vector_2"
                                    d="M17.7556 11.6883L17.7555 11.6883L17.7517 11.6935C16.7246 13.1109 15.4916 14.3398 14.2193 15.4225L14.2108 15.4297L14.2027 15.4373C13.6199 15.9798 12.6697 16.7936 11.7803 17.4774C11.3351 17.8196 10.9132 18.123 10.5649 18.3423C10.3903 18.4522 10.2421 18.5359 10.1238 18.5922C10.067 18.6193 10.0251 18.636 9.99628 18.6463C9.81899 18.5893 9.59712 18.4569 9.33289 18.2583C9.18558 18.1476 9.0405 18.0286 8.89433 17.9086L8.88701 17.9026C8.74867 17.789 8.60489 17.671 8.47127 17.5728C5.69518 15.4623 2.79025 12.9538 1.32774 10.254C0.115554 7.67359 0.165361 4.59858 1.93537 2.73545C4.28728 0.629167 7.81864 1.05232 9.60117 3.24751L9.99951 3.73807L10.3853 3.23758C10.8628 2.61814 11.4469 2.1314 12.1416 1.77402C15.0134 0.639201 17.9479 1.80566 19.144 4.35516C19.979 6.97049 19.2745 9.64811 17.7556 11.6883Z"
                                    fill="#142B33"
                                    fill-opacity="0.4"
                                    stroke="white"
                                />
                            </g>
                        </svg>
                    </div>
                    <div className="absolute top-[45%] left-1">
                        <p>a</p>
                    </div>
                    <div className="absolute top-[45%] right-1">
                        <p>b</p>
                    </div>
                    <div className=" absolute bottom-2 left-[40%] ">bottom</div>
                </div>
            </div>
        </div>
    );
};

export default Card2;
