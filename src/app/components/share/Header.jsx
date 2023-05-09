import {useState} from "react";
import logo from "../../../assets/logo.svg";

export const Header = ({active}) => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [lang, setLang] = useState("en");



    const classLink = "text-lg font-semibold text-gray-600 transition duration-100 hover:text-[#FFC222] active:text-[#FFC222]";
    const classLinkActive = "inline-flex items-center gap-1 text-lg font-semibold text-[#FFC222]";


    return (<>
        <div className="bg-white lg:pb-12">
            <div className="mx-auto maxW-screen-2xl px-4 md:px-8">
                <header className="flex items-center justify-between py-4 md:py-8">
                    {/* logo - start */}
                    <a href="/"
                       className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
                       aria-label="logo">
                        <img src={logo} alt="enactus esp" className={"w-16"}/>
                        Enactus-ESP
                    </a>
                    {/* logo - end */}

                    {/* nav - start */}
                    <nav className="hidden gap-12 lg:flex">
                        <a href="#"
                           className={active === "home" ? classLinkActive : classLink}>Présentation</a>
                        <a href="#"
                           className={active === "home" ? classLinkActive : classLink}>Nos Activité</a>
                        <a href="#"
                           className={active === "home" ? classLinkActive : classLink}>Blog</a>
                        <a href="#"
                           className={active === "home" ? classLinkActive : classLink}>Contact</a>
                    </nav>
                    {/* nav - end */}

                    {/* buttons - start */}
                    <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start items-center">

                        <img src={lang === "FR" ? "https://flagicons.lipis.dev/flags/4x3/fr.svg" : "https://flagicons.lipis.dev/flags/4x3/gb.svg"} className={"w-5 h-5"} alt=""/>
                        <select name="lang" id="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
                            <option value="FR">FR</option>
                            <option value="GB">EN</option>
                        </select>

                        <a href="#" className="inline-block rounded-lg bg-[#FFC222] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-[#C88A12] focus-visible:ring active:bg-indigo-700 md:text-base">ESPACE MEMBRE</a>
                    </div>

                    <button type="button"
                            className="inline-flex items-center gap-2 roundedLg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"/>
                        </svg>

                        Menu
                    </button>
                    {/* buttons - end */}
                </header>


            </div>
        </div>
    </>)
}

const Menu = () => {

    return (
        <div className="hidden w-full overflow-hidden roundedLg border bg-gray-50 shadow-sm lg:block">
            <div className="mx-auto flex maxW-screenLg items-center gap-8 p-8">
                <div className="grid w-2/3 grid-cols-2 gap-8">
                    {/* link - start */}
                    <a href="#" className="group flex gap-4">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center roundedLg bg-indigo-500 text-white shadowLg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                            </svg>
                        </div>

                        <div>
                            <div className="mb-1 font-semibold">Growth</div>
                            <p className="text-sm text-gray-500">This is a section of some simple filler text,
                                also known as placeholder text.</p>
                        </div>
                    </a>
                    {/* link - end */}

                    {/* link - start */}
                    <a href="#" className="group flex gap-4">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center roundedLg bg-indigo-500 text-white shadowLg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                            </svg>
                        </div>

                        <div>
                            <div className="mb-1 font-semibold">Security</div>
                            <p className="text-sm text-gray-500">This is a section of some simple filler text,
                                also known as placeholder text.</p>
                        </div>
                    </a>
                    {/* link - end */}

                    {/* link - start */}
                    <a href="#" className="group flex gap-4">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center roundedLg bg-indigo-500 text-white shadowLg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                            </svg>
                        </div>

                        <div>
                            <div className="mb-1 font-semibold">Cloud</div>
                            <p className="text-sm text-gray-500">This is a section of some simple filler text,
                                also known as placeholder text.</p>
                        </div>
                    </a>
                    {/* link - end */}

                    {/* link - start */}
                    <a href="#" className="group flex gap-4">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center roundedLg bg-indigo-500 text-white shadowLg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path
                                    d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                            </svg>
                        </div>

                        <div>
                            <div className="mb-1 font-semibold">Analytics</div>
                            <p className="text-sm text-gray-500">This is a section of some simple filler text,
                                also known as placeholder text.</p>
                        </div>
                    </a>
                    {/* link - end */}
                </div>

                {/* promo - start */}
                <div className="w-1/3 overflow-hidden roundedLg border">
                    <div className="h-48 bg-gray-100">
                        <img
                            src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?auto=format&q=75&fit=crop&w=320"
                            loading="lazy" alt="Photo by Fakurian Design"
                            className="h-full w-full object-cover object-center"/>
                    </div>

                    <div className="flex items-center justify-between gap-2 bgWhite p-3">
                        <p className="text-sm text-gray-500">This is some simple filler text.</p>

                        <a href="#"
                           className="inline-block shrink-0 roundedLg border bgWhite px-3 py-1 text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-50 focus-visible:ring active:bg-gray-100">More</a>
                    </div>
                </div>
                {/* promo - end */}
            </div>
        </div>
    )
}

const ArrowDown = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800"
             viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"/>
        </svg>
    )
}