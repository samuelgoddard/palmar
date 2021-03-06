import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { IntroContext } from '@/context/intro'
import { ThemeContext } from '@/context/theme'
import Link from 'next/link'
import Image from 'next/image'

import image1 from '../public/images/01.jpg'
import image2 from '../public/images/02.jpg'
import image3 from '../public/images/04.jpg'
import image4 from '../public/images/05.jpg'
import image5 from '../public/images/06.jpg'

export default function Home() {
  const containerRef = useRef(null)
  
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [themeContext, setThemeContext] = useContext(ThemeContext);

  useEffect(() => {    
    setTimeout(() => {
      setIntroContext(true)
    }, 4000);
  }, []);

  let colorThemes = ['bg-pink text-black selection:bg-black selection:text-pink', 'bg-green text-black selection:bg-black selection:text-green', 'bg-black text-pink selection:bg-pink selection:text-black', 'bg-brown text-pink selection:bg-pink selection:text-brown', 'bg-off-white text-black selection:bg-black selection:text-white'];
  

  const reveal = {
    initial: { y: '100%' },
    enter: { 
      y: 0,
      transition: { delay: introContext ? 0 : 3, duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      y: '100%',
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }

  const revealImage = {
    initial: { y: 0 },
    enter: { 
      y: '-100%',
      transition: { delay: introContext ? 0 : 3, duration: 1, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      y: '-100%',
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }

  const revealX = {
    initial: { x: '100%' },
    enter: { 
      x: 0,
      transition: { delay: introContext ? 0 : 3, duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      x: '100%',
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }

  return (
    <Layout>      
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
              >
                <m.main variants={fade} className={`p-4 md:p-6 h-screen relative ${colorThemes[themeContext]}`}>

                <div className="absolute top-0 right-0 left-0 md:left-auto md:bottom-0 z-[10000] px-6 md:px-[20px] py-3 md:py-6 hidden md:block">
                  <span className="h-full flex flex-row md:flex-col font-sans uppercase text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight">
                    <span className="block w-auto mb-[4vh] text-rotate text-center overflow-hidden">
                      <m.span variants={revealX} className="block">
                        Built
                      </m.span>
                    </span>
                    <span className="block flex-1 text-rotate text-center overflow-hidden">
                      <m.span variants={revealX} className="block">
                        on
                      </m.span>
                    </span>
                    <span className="block flex-1 text-rotate text-center overflow-hidden">
                      <m.span variants={revealX} className="block">
                        trust
                      </m.span>
                    </span>
                    <span className="block flex-1 text-rotate text-center overflow-hidden">
                      <m.span variants={revealX} className="block">
                        and
                      </m.span>
                    </span>
                    <span className="block flex-1 text-rotate text-center overflow-hidden">
                      <m.span variants={revealX} className="block">
                        true
                      </m.span>
                    </span>
                    <span className="block flex-1 text-rotate text-center overflow-hidden">
                      <m.span variants={revealX} className="block">
                        creative
                      </m.span>
                    </span>
                    <span className="block w-auto mt-[4vh] text-rotate text-center overflow-hidden">
                      <m.span variants={revealX} className="block">
                        spirit
                      </m.span>
                    </span>
                  </span>
                </div>

                {/* Mobile */}
                <div className="block md:hidden absolute z-100 bottom-0 right-0 w-[100vw] mb-[5vw]">
                    <div className="relative flex flex-row space-x-[20px] md:space-x-[50px] overflow-x-hidden">
                      <div className="animate-marqueeH whitespace-nowrap flex flex-row space-x-[20px] md:space-x-[50px]">
                      <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image1}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image2}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image3}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image4}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image5}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                      </div>

                      <div className="absolute top-0 animate-marqueeH2 whitespace-nowrap flex flex-row space-x-[20px] md:space-x-[50px]">
                      <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image1}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image2}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image3}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image4}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-[65vw] overflow-hidden">
                          <Image
                            alt="Hand model"
                            src={image5}
                            className="w-[65vw] object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop */}

                  <div className="hidden md:block absolute z-100 top-0 right-0 md:bottom-0 w-[100vw] md:w-[38%] xl:w-[40%] 3xl:w-[42%] h-[100vh] overflow-hidden mr-[60px]">
                    <div className="relative flex flex-col space-y-[20px] md:space-y-[50px] overflow-y-hidden">
                      <div className="transform animate-marquee whitespace-nowrap flex flex-col space-y-[20px] md:space-y-[50px] w-full">
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image1}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image2}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image3}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image4}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image5}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image1}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image2}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image3}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                      </div>

                      <div className="absolute top-0 transform animate-marquee2 whitespace-nowrap flex flex-col space-y-[20px] md:space-y-[50px] w-full">
                      <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image1}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image2}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image3}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image4}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image5}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image1}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image2}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                        <div className="h-full w-full overflow-hidden relative">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 ${colorThemes[themeContext]}`}></m.span>

                          <Image
                            alt="Hand model"
                            src={image3}
                            className="w-full object-cover object-center scale-105"
                            layout="responsive"
                            priority={true}
                            width={1334???}
                            height={1613}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <article className="md:flex md:flex-wrap h-full">
                    <div className="mb-[12.5vw] md:mb-auto w-full">
                      <svg className="w-full md:w-11/12" viewBox="0 0 1723 361" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M111.281 5.63H.934v349.554h32.954V203.877h77.393c98.364 0 139.807-44.943 139.807-100.872 0-57.926-45.437-97.376-139.807-97.376Zm0 193.253H33.888V10.623h77.393c70.403 0 104.855 35.954 104.855 92.382 0 58.925-35.95 95.878-104.855 95.878ZM481.446 355.184h36.449L350.626.636h-.998l-159.78 354.548h5.493l51.928-115.353h179.752l54.425 115.353Zm-232.18-120.347 85.882-189.758 89.376 189.758H249.266ZM564.21 350.191V5.629h-32.954v349.555h209.211v-4.993H564.21ZM1114.31 5.63h-36.45L940.55 311.24 800.743 5.63h-38.946v349.554h4.993V10.623l158.78 349.555h.5l155.29-349.056v344.062h32.95V5.629ZM1419.31 355.184h36.45L1288.49.636h-1l-159.78 354.548h5.5l51.92-115.353h179.76l54.42 115.353Zm-232.18-120.347 85.88-189.758 89.38 189.758h-175.26ZM1722.27 355.184l-76.39-138.823h-30.46l-14.48-26.466c70.9-6.991 109.85-43.445 109.85-91.384 0-53.432-48.44-92.882-136.81-92.882h-104.86v349.555h32.95V191.393h71.91c7.49 0 14.48-.5 20.97-.999l90.37 164.79h36.95Zm-156.28-168.785h-63.92V10.623h63.92c73.89 0 109.84 38.451 109.84 87.888 0 49.437-35.95 87.888-109.84 87.888Z" fill="currentColor"/></svg>
                    </div>
                    
                    <div className="2xl:flex 2xl:flex-wrap 2xl:items-end 2xl:w-[53vw] md:mt-auto relative z-[100]">
                      <div className="max-w-[280px] md:max-w-[550px] mb-6 xl:mb-10 2xl:mb-0 ml-[-2px] md:ml-0 -mt-5 md:mt-0">
                        <h1 className="font-serif text-[32px] md:text-[48px] xl:text-[54px] 2xl:text-[60px] leading-[1.35]  md:leading-none tracking-tighter mb-[-8px]">
                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                              <span className="block translate-y-[-8px]">
                                A leading parts-
                              </span>
                            </m.span>
                          </span>

                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                              <span className="block translate-y-[-8px]">
                              modelling agency
                              </span>
                            </m.span>
                          </span>

                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                              <span className="block translate-y-[-8px]">
                              with a passion for
                              </span>
                            </m.span>
                          </span>

                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                              <span className="block translate-y-[-8px]">
                              positively raising
                              </span>
                            </m.span>
                          </span>

                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                              <span className="block translate-y-[-8px]">
                                the hiring of <span className="">Black</span>,
                              </span>
                            </m.span>
                          </span>

                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px] md:mb-0">
                              <span className="block translate-y-[-8px]">
                                <span className="">Brown</span> & other <span className="">Ethnic</span>
                              </span>
                            </m.span>
                          </span>

                          <span className="block overflow-hidden">
                            <m.span variants={reveal} className="block mb-[-10px]">
                              <span className="block translate-y-[-8px]">
                                hand models.
                              </span>
                            </m.span>
                          </span>
                        </h1>
                      </div>

                      <div className="2xl:ml-auto flex space-x-4 md:space-x-6">
                        <Link href="/journal">
                          <a className="block uppercase text-[12px] md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
                              <m.span variants={reveal} className="block">
                              Journal

                              <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                            </m.span>
                          </a>
                        </Link>

                        <Link href="/contact">
                          <a className="block uppercase  text-[12px] md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
                            <m.span variants={reveal} className="block">
                              Contact
                              
                              <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                            </m.span>
                          </a>
                        </Link>

                        <a href="https://www.instagram.com/palmaragency/" target="_blank" rel="noopener noreferrer" className="block uppercase text-[12px] md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
                          <m.span variants={reveal} className="block">
                            Instagram
                            
                            <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                          </m.span>
                        </a>
                        
                        <Link href="/terms">
                          <a className="block uppercase  text-[12px] md:text-base 2xl:text-[14px] 3xl:text-base group overflow-hidden">
                            <m.span variants={reveal} className="block">
                              Terms
                              
                              <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                            </m.span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </article>
                </m.main>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
