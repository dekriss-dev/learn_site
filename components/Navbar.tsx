import {pl} from '@/config/languages'
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='fixed top-0 bg-zinc-900 z-[999999] w-full h-16 flex items-center justify-between px-10 flex-row '>
            <span className='font-extrabold text-xl'>{pl.siteName}</span>
            <div className="flex-1 max-md:hidden mx-[2%] relative flex items-center rounded-xl bg-zinc-900 border border-zinc-700 group focus:outline-none hover:border-zinc-600 pl-[45px] overflow-hidden">
                <span className='absolute left-4 cursor-not-allowed'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="stroke-zinc-700 group-hover:stroke-zinc-400 duration-150 ease-in-out feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21"
                                                                                                         x2="16.65"
                                                                                                         y2="16.65"></line></svg>
                </span>
                <input
                    className='w-full bg-transparent h-full py-3 focus:outline-none focus:border-none'
                    type='text'
                    placeholder={pl.searchPlaceholder}
                />
            </div>
            <ul className='items-center justify-center flex flex-row gap-5'>
                <Link href='#' className='text-white hover:text-zinc-200 hidden xl:block'>
                    <li>{pl.teachIn} {pl.siteName}</li>
                </Link>
                <Link href='#' className='text-white hover:text-zinc-200 group hidden xl:block'>
                    <li className='flex flex-row gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="stroke-white group-hover:stroke-zinc-200 feather feather-shopping-cart">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span>{pl.myCart}</span>
                    </li>
                </Link>
                <Link href='#' className='text-white rounded px-5 py-2 border border-white hover:bg-white hover:bg-opacity-[2%] max-md:hidden'>
                    <li>{pl.login}</li>
                </Link>
                <Link href='#' className='text-white rounded px-5 py-2 bg-green-primary bg-opacity-80 hover:bg-opacity-90 border border-green-primary max-md:hidden'>
                    <li>{pl.register}</li>
                </Link>
                <Link href='#' className='text-white rounded px-5 py-2 bg-green-primary bg-opacity-80 hover:bg-opacity-90 border border-green-primary hidden max-md:block'>
                    <li>{pl.account}</li>
                </Link>
                <Link href='#' className='text-white rounded py-2 px-2 border border-white hover:bg-white hover:bg-opacity-[2%]'>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                             className="stroke-white feather feather-settings">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                    </li>
                </Link>

            </ul>

        </nav>
    )
}

export default Navbar