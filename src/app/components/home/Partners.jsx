

export const Partners = () => {

    return (<>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
                    <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">Trusted by the
                        best</h2>

                    <p className="max-w-md text-center text-gray-400 lg:text-right">Filler text is dummy text which has
                        no meaning however looks very similar to real text.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-4 lg:gap-8">
                   {/* logo - start */}
                    <div
                        className="flex h-16 items-center justify-center rounded-lg  p-4 text-gray-400 sm:h-32">
                            <img src="./images-2.png" className="h-32" alt="" />
                    </div>
                   {/* logo - end */}

                   {/* logo - start */}
                    <div
                        className="flex h-16 items-center justify-center rounded-lg sm:h-32">
                        <img src="./vibefm_player-radio_img.jpg" className="h-32" alt="" />
                    </div>
                   {/* logo - end */}

                   {/* logo - start */}
                    <div
                        className="flex h-16 items-center justify-center rounded-lg sm:h-32">
                        <img src="./visuel-open-data.png" className="h-32" alt="" />
                    </div>
                   {/* logo - end */}

                   {/* logo - start */}
                    <div
                        className="flex h-16 items-center justify-center rounded-lg  sm:h-32">
                        <img src="./IVENSUR_CCDOC_2020_LOGO-WEB.png" alt="" />
                    </div>
                   {/* logo - end */}

                   {/* logo - start */}
                    {/* <div
                        className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                        <svg className="h-6 w-auto sm:h-8" width="151" height="39" viewBox="0 0 151 39"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M49.5227 7.72727V22.75C49.5227 25.9091 47.3409 28.1818 43.7955 28.1818C40.2614 28.1818 38.0682 25.9091 38.0682 22.75V7.72727H34.5568V23.0341C34.5568 27.9205 38.2159 31.3864 43.7955 31.3864C49.375 31.3864 53.0455 27.9205 53.0455 23.0341V7.72727H49.5227ZM61.6619 7.72727H58.1506V31H61.6619V7.72727ZM69.2188 7.72727H65.1506L72.5256 19.3636L65.1051 31H69.196L74.7869 22.0227H74.9688L80.5597 31H84.6506L77.3551 19.3636L84.6051 7.72727H80.5369L74.9688 16.8295H74.7869L69.2188 7.72727ZM96.5568 31H110.614V27.9773H100.068V7.72727H96.5568V31ZM119.426 31.3864C122.312 31.3864 123.938 29.9205 124.585 28.6136H124.722V31H128.04V19.4091C128.04 14.3295 124.04 13.3182 121.267 13.3182C118.108 13.3182 115.199 14.5909 114.062 17.7727L117.256 18.5C117.756 17.2614 119.028 16.0682 121.312 16.0682C123.506 16.0682 124.631 17.2159 124.631 19.1932V19.2727C124.631 20.5114 123.358 20.4886 120.222 20.8523C116.915 21.2386 113.528 22.1023 113.528 26.0682C113.528 29.5 116.108 31.3864 119.426 31.3864ZM120.165 28.6591C118.244 28.6591 116.858 27.7955 116.858 26.1136C116.858 24.2955 118.472 23.6477 120.438 23.3864C121.54 23.2386 124.153 22.9432 124.642 22.4545V24.7045C124.642 26.7727 122.994 28.6591 120.165 28.6591ZM132.838 31H136.156V28.2841H136.44C137.054 29.3977 138.304 31.3409 141.486 31.3409C145.713 31.3409 148.781 27.9545 148.781 22.3068C148.781 16.6477 145.668 13.3182 141.452 13.3182C138.213 13.3182 137.043 15.2955 136.44 16.375H136.236V7.72727H132.838V31ZM136.168 22.2727C136.168 18.625 137.759 16.2045 140.724 16.2045C143.804 16.2045 145.349 18.8068 145.349 22.2727C145.349 25.7727 143.759 28.4432 140.724 28.4432C137.804 28.4432 136.168 25.9432 136.168 22.2727Z"/>
                            <path
                                d="M5.71591 8H0.136364L7.28409 19.6364L0 31.2727H5.63636L10.4091 23.3295H10.5909L15.3636 31.2727H21.0227L13.7614 19.6364L20.8636 8H15.3068L10.5909 15.9318H10.4091L5.71591 8Z"/>
                        </svg>
                    </div> */}
                   {/* logo - end */}

                   {/* logo - start */}
                    {/* <div
                        className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                        <svg className="h-6 w-auto sm:h-8" width="160" height="39" viewBox="0 0 160 39"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M43.5455 13.5455H46.2727C46.1477 10.0341 42.9091 7.40909 38.4091 7.40909C33.9545 7.40909 30.4545 10 30.4545 13.9091C30.4545 17.0455 32.7273 18.9091 36.3636 19.9545L39.2273 20.7727C41.6818 21.4545 43.8636 22.3182 43.8636 24.6364C43.8636 27.1818 41.4091 28.8636 38.1818 28.8636C35.4091 28.8636 32.9545 27.6364 32.7273 25H29.8182C30.0909 28.8182 33.1818 31.4091 38.1818 31.4091C43.5455 31.4091 46.5909 28.4545 46.5909 24.6818C46.5909 20.3182 42.4545 18.9091 40.0455 18.2727L37.6818 17.6364C35.9545 17.1818 33.1818 16.2727 33.1818 13.7727C33.1818 11.5455 35.2273 9.90909 38.3182 9.90909C41.1364 9.90909 43.2727 11.25 43.5455 13.5455ZM57.9517 31.3636C62.679 31.3636 65.8608 27.7727 65.8608 22.3636C65.8608 16.9091 62.679 13.3182 57.9517 13.3182C53.2244 13.3182 50.0426 16.9091 50.0426 22.3636C50.0426 27.7727 53.2244 31.3636 57.9517 31.3636ZM57.9517 28.9545C54.3608 28.9545 52.7244 25.8636 52.7244 22.3636C52.7244 18.8636 54.3608 15.7273 57.9517 15.7273C61.5426 15.7273 63.179 18.8636 63.179 22.3636C63.179 25.8636 61.5426 28.9545 57.9517 28.9545ZM72.6364 7.72727H69.9545V31H72.6364V7.72727ZM84.6392 31.3636C89.3665 31.3636 92.5483 27.7727 92.5483 22.3636C92.5483 16.9091 89.3665 13.3182 84.6392 13.3182C79.9119 13.3182 76.7301 16.9091 76.7301 22.3636C76.7301 27.7727 79.9119 31.3636 84.6392 31.3636ZM84.6392 28.9545C81.0483 28.9545 79.4119 25.8636 79.4119 22.3636C79.4119 18.8636 81.0483 15.7273 84.6392 15.7273C88.2301 15.7273 89.8665 18.8636 89.8665 22.3636C89.8665 25.8636 88.2301 28.9545 84.6392 28.9545ZM96.642 31H99.3239V20.0909C99.3239 17.5341 101.188 15.7273 103.278 15.7273C105.312 15.7273 106.733 17.0568 106.733 19.0455V31H109.46V19.6364C109.46 17.3864 110.869 15.7273 113.324 15.7273C115.233 15.7273 116.869 16.7386 116.869 19.3182V31H119.551V19.3182C119.551 15.2159 117.347 13.3182 114.233 13.3182C111.733 13.3182 109.903 14.4659 109.006 16.2727H108.824C107.96 14.4091 106.438 13.3182 104.142 13.3182C101.869 13.3182 100.188 14.4091 99.4602 16.2727H99.233V13.5455H96.642V31ZM131.545 31.3636C136.273 31.3636 139.455 27.7727 139.455 22.3636C139.455 16.9091 136.273 13.3182 131.545 13.3182C126.818 13.3182 123.636 16.9091 123.636 22.3636C123.636 27.7727 126.818 31.3636 131.545 31.3636ZM131.545 28.9545C127.955 28.9545 126.318 25.8636 126.318 22.3636C126.318 18.8636 127.955 15.7273 131.545 15.7273C135.136 15.7273 136.773 18.8636 136.773 22.3636C136.773 25.8636 135.136 28.9545 131.545 28.9545ZM146.23 20.5C146.23 17.4545 148.116 15.7273 150.685 15.7273C153.173 15.7273 154.685 17.3523 154.685 20.0909V31H157.366V19.9091C157.366 15.4545 154.991 13.3182 151.457 13.3182C148.821 13.3182 147.185 14.5 146.366 16.2727H146.139V13.5455H143.548V31H146.23V20.5Z"/>
                            <circle cx="7" cy="20" r="7"/>
                        </svg>
                    </div> */}
                   {/* logo - end */}
                </div>
            </div>
        </div>
    </>)
}