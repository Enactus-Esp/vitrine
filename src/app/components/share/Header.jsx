import {useState} from "react";

export const Header = ({active}) => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [dropMenu, setDropMenu] = useState(false);
    const [lang, setLang] = useState("en");



    const classLink = "text-lg font-semibold text-gray-600 transition duration-100 hover:text-[#FFC222] active:text-[#FFC222]";
    const classLinkActive = "inline-flex items-center gap-1 text-lg font-semibold text-[#FFC222]";

    const classLinkMobile = "block py-2 bg-main mx-4 rounded-full text-center text-lg font-semibold text-white transition duration-100 hover:text-[#FFC222] hover:bg-gray-100 active:text-[#FFC222]";
    const classLinkMobileActive = "block text-center items-center gap-1 text-lg font-semibold text-[#FFC222]";


    return (<>
        <div className="bg-white ">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <header className="flex items-center justify-between py-4 md:py-6">
                    {/* logo - start */}
                    <a href="/"
                       className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
                       aria-label="logo">
                        <img src="./logo.jpg" alt="enactus esp" className={"w-16"}/>
                        {/* Enactus-ESP */}
                    </a>
                    {/* logo - end */}

                    {/* nav - start */}
                    <nav className="hidden gap-12 lg:flex">
                        <a href="#"
                           className={active === "home" ? classLinkActive : classLink}>Présentation</a>
                        <a href="/activity"
                           className={active === "home" ? classLinkActive : classLink}>Nos Activités</a>
                        <button onClick={() => setDropMenu(!dropMenu)}
                           className={` flex items-center ${active === "home" ? classLinkActive : classLink}`}>Nos Projects <ArrowDown /></button>
                        <a href="#"
                           className={active === "home" ? classLinkActive : classLink}>Contact</a>
                    </nav>
                    {/* nav - end */}

                    {/* buttons - start */}
                    <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start items-center">

                        <img src={lang === "FR" ? "https://flagicons.lipis.dev/flags/4x3/fr.svg" : "https://flagicons.lipis.dev/flags/4x3/gb.svg"} className={"w-5 h-5"} alt=""/>
                        <select name="lang" id="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
                            <option value="GB">EN</option>
                            <option value="FR">FR</option>
                        </select>

                        <a href="#" className="inline-block rounded-lg bg-[#FFC222] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-[#C88A12] focus-visible:ring active:bg-indigo-700 md:text-base">ESPACE MEMBRE</a>
                    </div>

                    <button type="button"
                            onClick={() => setToggleMenu(!toggleMenu)}
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


            {/* menu start*/}
            <div className="flex justify-center">
                {toggleMenu &&  <div className={"block w-full  absolute md:hidden "}>
                    <nav className="bg-white space-y-2 w-full pb-6">
                        <a href="/"
                           className={active === "home" ? classLinkMobileActive : classLinkMobile}>Présentation</a>
                        <a href="/activity"
                           className={active === "home" ? classLinkMobileActive : classLinkMobile}>Nos Activités</a>
                        <a href="/mennen"
                           className={active === "home" ? classLinkMobileActive : classLinkMobile}>Men Nen</a>
                        <a href="/dimbali"
                           className={active === "home" ? classLinkMobileActive : classLinkMobile}>Dimbali</a>
                        <a href="/shery"
                           className={active === "home" ? classLinkMobileActive : classLinkMobile}>Shery</a>
                        <a href="#contact"
                           className={active === "home" ? classLinkMobileActive : classLinkMobile}>Contact</a>
                    </nav>
                </div>}

                <div className={"absolute mx-auto z-50"}>
                    {dropMenu && <Menu/>}
                </div>
            </div>
            {/* menu end*/}
        </div>
    </>)
}

const Menu = () => {

    return (
        <div className="hidden w-full overflow-hidden rounded-lg border bg-gray-50 shadow-sm lg:block ">
            <div className="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
                <div className="grid w-full grid-cols-3 gap-10">
                    {/* link - start */}
                    <a href="/mennen" className="group flex gap-4">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-main text-white shadow-lg transition duration-100 group-hover:bg-main group-active:bg-mainmd:h-12 md:w-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                            </svg>
                        </div>

                        <div>
                            <div className="mb-1 font-semibold">Men nen</div>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Ad aliquid commodi./</p>
                        </div>
                    </a>
                    {/* link - end */}

                    {/* link - start */}
                    <a href="/dimbali" className="group flex gap-4">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-main text-white shadow-lg transition duration-100 group-hover:bg-main group-active:bg-mainmd:h-12 md:w-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                            </svg>
                        </div>

                        <div>
                            <div className="mb-1 font-semibold">Dimbali</div>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Ad aliquid commodi.</p>
                        </div>
                    </a>
                    {/* link - end */}

                    {/* link - start */}
                    <a href="/shery" className="group flex gap-4">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-main text-white shadow-lg transition duration-100 group-hover:bg-main group-active:bg-mainmd:h-12 md:w-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                            </svg>
                        </div>

                        <div>
                            <div className="mb-1 font-semibold">Shery</div>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Ad aliquid commodi.</p>
                        </div>
                    </a>
                    {/* link - end */}
                </div>

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