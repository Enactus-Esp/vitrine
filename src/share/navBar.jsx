import logo from '../assets/logo.png'
import arrow from '../assets/arrow.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdKeyboardArrowDown} from 'react-icons/md';


function NavBar() {
  return (
    <div className='flex items-center w-[100%] fixed bg-white justify-between'>
        <div className='flex text-yellow items-center px-4' >
            <img src={logo} className='' />
            <span className='text-yellow flex flex-row w-20 text-xl font-light'>Enactus ESP</span>
        </div>
        
        <nav className=' text-lg font-light w-auto hidden md:flex xl:text-2xl'>
            <ol className='mx-4 lg:mx-8 '>Présentation</ol>
            <ol className='flex mx-4 lg:mx-8 '>Nos Activités</ol>
            <ol className='mx-4 lg:mx-8 ' >Blog</ol>
            <ol className='mx-4 lg:mx-8 '>Contact</ol>
        </nav>
        <div className=' justify-end  hidden lg:flex lg:mr-8 '>
            <div className=' flex border border-black py-1 px-2 rounded-lg w-12 justify-between items-center'>
                <span className='font-bold text-sm'>EN</span>
                <img src={arrow} className='w-2 h-2 '/>
            </div>
            <span className='flex text-white text-sm   bg-yellow rounded-lg ml-8 font-bold items-center px-1'>
                ESPACE MEMBRE
            </span>

        </div>
    
        <MdKeyboardArrowDown className='hidden md:flex lg:hidden w-8 h-8 m-2' />
        <GiHamburgerMenu className='md:hidden justify-self-end  w-8 h-8 m-2' />
    </div>
  );
}

export default NavBar;
