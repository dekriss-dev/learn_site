import {Courses} from '@/data/Courses'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedCourses = () => {
    const featuredCourses = Courses.filter(course => course.featured).slice(0,4)
    return (
        <section className='container w-full mt-[50px] py-5'>
            <div className="flex flex-col gap-7 max-md:justify-center max-md:items-center max-md:text-center">
                <h1 className='text-3xl font-bold'>Wyróżnione kursy</h1>
                <p className='w-1/2 break-words text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam et optio, numquam recusandae aut saepe suscipit minima! Quaerat, velit?</p>
                <div className="w-full flex max-md:flex-col justify-between gap-5 flex-wrap">
                    {featuredCourses.map((course, index) => (
                        <div key={index} className="flex gap-5 flex-col xl:w-[24%] md:w-[48.5%] text-start max-md:w-full py-3 rounded bg-zinc-900/15 border border-zinc-900 px-4 relative group">
                            <Image src={course.img} alt={`Thumbnail of course ${course.title}`} width={500} height={1000} className='rounded'/>
                            <h2 className='text-xl font-bold'>{course.title}</h2>
                            <p>{course.description}</p>
                            <div className="flex flex-row gap-1 items-start">
                                <span className='font-bold mr-2 text-white'>{course.starsValue}</span>
                                <div className="flex flex-row">
                                    {Array(5).fill(null).map((_, index) => (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className={`${index < course.stars ? "stroke-green-primary fill-green-primary" : 'stroke-zinc-500'} fill-0 feather feather-star`}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    ))}
                                </div>
                                <span className='text-zinc-300'>({course.participants})</span>
                            </div>
                            {/*<div className='mt-5 mb-5 flex flex-col items-center text-center justify-center'>*/}
                            {/*    <span className='text-xl text-zinc-200'>Cena:</span>*/}
                            {/*    <span className='font-bold text-3xl'><span className='text-xl text-zinc-200'>.99 PLN</span></span>*/}
                            {/*</div>*/}
                            <div className="flex flex-row flex-wrap justify-between mt-2">
                                <div className='w-full mt-2 bg-white/10 hover:bg-white/15 rounded py-2 text-center text-lg font-bold'>Cena kursu: { course.price - 1}<span className='text-sm text-zinc-200 uppercase'>.99 {course.currency}</span></div>
                                <Link href='#' className='w-full mt-2 bg-green-primary bg-opacity-80 hover:bg-opacity-90 border border-green-primary duration-150 ease-in-out rounded py-2 text-center flex items-center justify-center gap-2 flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="stroke-white feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                    <span>Zakup <span className='font-semibold text-white'>{course.title}</span></span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedCourses;