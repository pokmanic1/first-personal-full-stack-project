import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AuthContent from '../utility/AuthContent'
function Navbar() {

    useEffect(() => {
        const burger = document.getElementById("burgerBtn")
        const menu = document.getElementById("burgerMenu")

        if (!burger || !menu) return

        const handleClick = () => {
            menu.classList.toggle("hidden")
        }

        burger.addEventListener("click", handleClick)

        return () => {
            burger.removeEventListener("click", handleClick)
        }
    }, [])

    return (
        <nav className='relative  min-w-[375px] w-full pr-[20px] md:px-[40px] sticky z-50 top-0 left-0 bg-white border-b-2 border-gray-300'>
            <div className='w-full h-[60px] flex justify-between items-center text-black'>

                <Link to="/" className='w-[20%]'>
                    <img
                        src="../../public/favicon.svg"
                        className='w-[40px] mt-[10px]'
                        alt="logo"
                    />
                </Link>

                <div className='hidden md:flex items-center   md:text-[14px] lg:text-[16px]  gap-[20px]  lg:gap-[30px]  w-[80%] flex justify-center items-center'>
                    <Link to="/service">Service</Link>
                    <Link to="/booking">Booking</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/tips">Tips</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className='hidden md:flex items-center gap-[5px]  md:gap-[15px] lg:gap-[30px]  md:text-[14px] lg:text-[16px]  w-[20%] mr-1'>

                    <div className='w-full flex items-center justify-center gap-4 ml-auto'> <AuthContent /></div>
                </div>
                <button id="burgerBtn" className="md:hidden flex flex-col gap-1">
                    <span className="w-6 h-[1px] bg-black"></span>
                    <span className="w-6 h-[1px] bg-black"></span>
                    <span className="w-6 h-[1px] bg-black"></span>
                </button>
            </div>

            <div id="burgerMenu" className="hidden    md:hidden z-10 flex flex-col justify-start items-start gap-4 py-4 absolute top-[60px] left-0 bg-white w-full pl-[10px]">
                <Link to="/service" className='border-b border-gray-300'>Service</Link>
                <Link to="/booking" className='border-b border-gray-300'>Booking</Link>
                <Link to="/team" className='border-b border-gray-300'>Team</Link>
                <Link to="/tips" className='border-b border-gray-300'>Tips</Link>
                <Link to="/contact" className='border-b border-gray-300'>Contact</Link>
                <div className='w-full flex items-center justify-center ml-auto'><AuthContent /></div>
            </div>  
        </nav>
    )
}

export default Navbar