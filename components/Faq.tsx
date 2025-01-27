import { pl } from '@/config/languages';
import Link from "next/link";

const Faq = () => {
    return (
        <div className='w-full bg-[#18181b] py-10 mt-[100px] mb-[750px]'>
            <section className='container max-md:px-5 flex flex-row max-md:flex-col w-full gap-10'>
                <div
                    className="order-2 max-md:order-1 h-full py-5 flex items-center rounded text-green-primary border border-green-primary bg-green-primary px-10 bg-opacity-[7%] hover:bg-opacity-15 w-1/2 max-md:w-full text-center justify-center sticky top-[100px] z-10 max-md:z-[99] max-md:bg-opacity-100 max-md:hover:bg-opacity-100 max-md:text-white">
                    <h1 className='text-4xl max-md:text-3xl font-bold'>{pl.faq}</h1>
                </div>

                <div className="order-1 w-1/2 max-md:order-2 max-md:w-full flex flex-col gap-14">
                    {pl.questions.slice(0,5).map(({question, description}, index) => (
                        <div key={index}
                             className="w-full flex flex-col gap-3 relative justify-center duration-150 ease-in-out h-[13em] items-center px-5 rounded text-white bg-transparent border border-white/25 hover:bg-white hover:bg-opacity-[3%] overflow-hidden">
                            <span className='text-[14rem] max-md:text-[19rem] bg-gradient-to-t from-white/15 to-0 bg-clip-text text-transparent inline-block font-bold absolute left-0 -top-14 max-md:-top-28'>{index + 1}</span>
                            <h2 className='text-2xl font-bold'>{question}</h2>
                            <p className='text-zinc-400'>{description}</p>
                        </div>
                    ))}
                    <Link className='duration-150 ease-in-out w-full py-3 text-center items-center rounded border border-white/25 hover:bg-white hover:bg-opacity-[3%]' href='/faq'>Zobacz wszystkie pytania</Link>
                </div>
            </section>
        </div>
    );
};

export default Faq;
