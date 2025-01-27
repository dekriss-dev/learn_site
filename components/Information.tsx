import Link from "next/link";
import {useState} from "react";

type InformationProps = {
    msg: {text: string, text2: string}
}

const Information: React.FC<InformationProps> = ({msg}) => {

    const [isVisible, setIsVisible] = useState(true)

    const close = () => {
        console.log('Closed topbar')
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <section className="bg-green-primary relative items-center justify-center text-center p-4 flex flex-row w-full">
            <Link href='#' className="hover:text-zinc-200 duration-150 ease-in-out text-white text-md text-center font-bold">{msg.text} <span className='font-normal'>| {msg.text2}</span></Link>
            <button onClick={close} className='max-md:hidden absolute right-5 group'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="duration-150 ease-in-out group-hover:stroke-zinc-200 feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6"
                                                                                                    x2="18"
                                                                                                    y2="18"></line></svg>
            </button>
        </section>
    )
}

export default Information