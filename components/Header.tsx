import {pl} from "@/config/languages";
import Image from "next/image"
import laptopMockup from '@/public/laptopMockup.png'
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
    return (
        <div
            className='w-full min-h-[92vh] mt-[62px] bg-[#18181b] relative overflow-hidden flex items-center justify-center text-center flex-col'>
            <div className="w-[350px] h-[350px] bg-gradient-to-t from-green-primary to-green-950 blur-[150px] rounded-full absolute -bottom-5 -right-[150px] opacity-50"/>
            <div className="w-[350px] h-[350px] bg-gradient-to-t from-green-primary to-green-950 blur-[150px] rounded-full absolute -top-5 -left-[150px] opacity-50"/>
            <section
                className='container max-md:px-[5%] flex text-center flex-row max-md:flex-col items-center justify-center max-md:items-start max-md:justify-center gap-10'>

                <div
                    className="max-md:order-2 w-[45%] max-md:w-full flex flex-col items-center justify-center text-center gap-10">
                    <h1 className='flex flex-col text-[3.50rem] max-md:text-[2.7rem] bg-gradient-to-b from-zinc-200 to-zinc-500 bg-clip-text text-transparent font-semibold max-w-full leading-[1.2]'><span
                        className='font-bold'>{pl.title1} {pl.title2} {pl.title3} </span>
                        <span className='font-bold ml-2 bg-gradient-to-b from-green-primary to-green-700 bg-clip-text inline-block text-transparent'>
                        <Typewriter
                            words={[pl.phrase1, pl.phrase2]}
                            typeSpeed={120}
                            deleteSpeed={60}
                            loop={true}
                            cursor={true}
                            cursorStyle={'|'}
                        />
                    </span>
                    </h1>
                    <p className='max-w-full text-zinc-400'>{pl.description}</p>
                    <div className="flex items-center justify-center flex-row max-md:flex-col gap-5 w-full">
                        <Link href='#'
                              className='rounded flex-1 max-md:w-full max-md:text-center py-2 bg-green-primary text-white hover:bg-green-secondary'>{pl.register}</Link>
                        <Link href='#'
                              className='rounded flex-1 max-md:w-full max-md:text-center py-2 border border-green-primary hover:bg-green-primary hover:bg-opacity-5 duration-150 ease-in-out text-green-primary'>{pl.learnMore}</Link>
                    </div>
                </div>
                {/*<div className="max-md:order-1 w-[65%] max-md:w-full">*/}
                {/*    <Image src={laptopMockup} alt={`${pl.siteName} site screen`} className='w-full'/>*/}
                {/*</div>*/}
            </section>
        </div>
    )
}

export default Header