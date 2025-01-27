import {pl} from '@/config/languages'

import Navbar from "@/components/Navbar";
import Information from '@/components/Information'
import Header from "@/components/Header";
import Faq from '@/components/Faq'
import FeaturedCourses from '@/components/FeaturedCourses';
import Head from "next/head";



export default function Home() {
  return (
      <>
          <Head>
              <title>{pl.siteName}</title>
          </Head>
          <main>
              <div className='w-full'>
                  <header className='w-full'>
                      {/*<Information msg={{ text: pl.information1, text2: pl.information2 }} />*/}
                      <Navbar/>
                      <Header/>
                  </header>
                  <FeaturedCourses/>
                  <Faq/>
              </div>
          </main>
      </>
  );
}
