import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade, revealNoDelay } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { ThemeContext } from '@/context/theme'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import Image from 'next/image'
import image1 from '../../public/images/03.jpg'
import SanityPageService from '../../services/sanityPageService'

const query = `{
  "journal": *[_type == "journal"] | order(postDate desc) {
    title,
    postDate,
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Journal(initialData) {
  const { data: { journal } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)
  const [themeContext, setThemeContext] = useContext(ThemeContext);
  const [introContext, setIntroContext] = useContext(IntroContext);

  const revealImage = {
    initial: { y: 0 },
    enter: { 
      y: '100%',
      transition: { duration: 1.25, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      y: '100%',
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 0);
  }, []);

  return (
    <Layout>
      <NextSeo title="Journal" />

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
                className="min-h-screen flex flex-wrap "
              >
                <m.div variants={fade} className="bg-black text-pink selection:bg-pink selection:text-black w-full flex flex-wrap">
                <m.main variants={fade} className="p-4 md:p-6 relative pb-16 md:pb-24 xl:pb-32 w-full flex">

                  <article className="flex flex-wrap w-full">
                    <div className="w-full relative z-10">
                      <Link href="/">
                        <a className="block w-full">
                          <svg className="w-full" viewBox="0 0 1771 308" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M159.678 4.8v215.982c0 48.138-30.672 77.532-75.828 77.532-46.434 0-78.81-31.098-78.81-77.532H.78c0 51.972 38.766 86.052 93.72 86.052 54.528 0 93.72-33.654 93.72-89.886V4.8h-28.542ZM358.766.54C277.826.54 207.11 64.866 207.11 153.9c0 89.034 70.716 153.36 151.656 153.36 80.94 0 151.656-64.326 151.656-153.36C510.422 64.866 439.706.54 358.766.54Zm0 302.46c-70.716 0-120.558-58.362-120.558-149.1S288.05 4.8 358.766 4.8c70.716 0 120.558 58.362 120.558 149.1S429.482 303 358.766 303ZM764.585 4.8h-4.26v179.772c0 69.438-40.044 114.594-103.092 114.594-61.77 0-100.11-43.026-100.11-110.334V4.8h-28.116v178.494c0 78.81 51.546 123.966 120.984 123.966 72.42 0 114.594-48.99 114.594-122.688V4.8ZM1015.93 303l-65.177-118.428h-25.986l-12.354-22.578c60.492-5.964 93.717-37.062 93.717-77.958 0-45.582-41.319-79.236-116.721-79.236h-89.46V303h28.116V163.272h61.344c6.39 0 12.354-.426 17.892-.852L984.407 303h31.523ZM882.593 159.012h-54.528V9.06h54.528c63.048 0 93.72 32.802 93.72 74.976s-30.672 74.976-93.72 74.976ZM1276.45 4.8v256.452L1074.95 4.8h-35.36V303h4.26V9.912l232.6 297.348h4.26V4.8h-4.26ZM1544.92 303h31.1L1433.31.54h-.85L1296.14 303h4.68l44.31-98.406h153.36L1544.92 303Zm-198.09-102.666 73.27-161.88 76.26 161.88h-149.53Zm272.96 98.406V4.8h-28.11V303h178.49v-4.26h-150.38Z" fill="currentColor"/></svg>
                        </a>
                      </Link>
                    </div>

                    <div className="w-full mt-auto">
                      <div className="font-serif leading-none tracking-tight mt-12 md:mt-16 xl:mt-24">

                        <ul className="journal-list">
                          {journal?.map((item, i) => {
                            return (
                              <li className={`block border-b border-pink ${ i == 0 && 'border-t'}`} key={i}>
                                <Link href={`/journal/${item.slug.current}`}>
                                  <a className="block relative py-4 md:py-6 xl:py-7">
                                    <div className="flex flex-wrap items-end overflow-hidden w-full">
                                      <m.span variants={revealNoDelay} className="block w-full pb-1 md:pb-0 md:w-[110px] xl:w-[200px] text-xs md:text-sm xl:text-base">P/{ i < 9 && (0)}{i + 1}</m.span>
                                      <m.span variants={revealNoDelay} className="block text-2xl md:text-3xl md:leading-tight xl:text-4xl xl:leading-tight">{item.title}</m.span>
                                      <m.span variants={revealNoDelay} className="block ml-auto">
                                        <svg className="w-[20px] md:w-[24px] xl:w-[28px] mb-[5px]" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 13.906h23.296l-8.454 8.454 2.259 2.259 12.31-12.31L17.1 0l-2.258 2.258 8.453 8.454H0v3.194Z" fill="currentColor"/></svg>
                                      </m.span>
                                    </div>
                                  </a>
                                </Link>
                              </li>    
                            )
                          })}
                        </ul>

                      </div>
                    </div>
                  </article>
                </m.main>

                <m.footer variants={fade} className="p-4 md:p-6 relative w-full flex items-end">
                  <div className="flex flex-wrap w-full">
                    <span className="block w-full md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-[5px] md:mb-0">© Palmar Agency 2021</span>
                    
                    <span className="block w-full md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-[5px] md:mb-0 md:mr-[15vw] xl:mr-[20vw]">Site by <a href="https://shiftwalk.studio" rel="noopener noreferrer" target="_blank" className="group relative">Shiftwalk <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></span>

                    <span className="hidden md:block w-full md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-[5px] md:mb-0">
                      <Link href="/"><a className="group relative">Back to home <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></Link>
                    </span>
                    
                    <span className="block w-1/2 md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight ml-auto"><Link href="/contact"><a className="group relative">Contact Us <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></Link></span>

                    <span className="block w-1/2 md:w-auto text-right md:hidden ml-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0">
                      <Link href="/"><a className="group relative">Back to home <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a></Link>
                    </span>
                  </div>
                </m.footer>
                </m.div>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}


export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}