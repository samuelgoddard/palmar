import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'

export default function Contact() {
  const containerRef = useRef(null)
  const [formType, setFormType] = useState('client');
  const [introContext, setIntroContext] = useContext(IntroContext);

  const reveal = {
    initial: { y: '100%' },
    enter: { 
      y: 0,
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
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
      <NextSeo title="Contact" />

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
                <m.div variants={fade} className="min-h-screen bg-black text-pink selection:bg-pink selection:text-black flex flex-wrap">
                  <m.main variants={fade} className="p-4 md:p-6 relative pb-16 md:pb-24 xl:pb-32 w-full mb-auto">

                    <article className="flex flex-wrap">
                      <div className="w-full md:w-11/12 xl:w-10/12 relative z-10 mb-16 md:mb-28 xl:mb-40">
                        <svg className="w-full" viewBox="0 0 1354 367" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M245.579 5.57V171.18H34.25V5.571H.723v355.6H34.25V176.259h211.328v184.912h34.036V5.571h-34.036Zm293.937 5.08V5.57H327.172v355.601h212.344v-5.08H360.7v-172.72h163.576v-5.08H360.7V10.651h178.816Zm67.762 345.441V5.571H573.75v355.6h212.852v-5.08H607.278Zm239.634 0V5.571h-33.528v355.6h212.856v-5.08H846.912ZM1172.87.491c-96.52 0-180.853 76.708-180.853 182.88s84.333 182.88 180.853 182.88c96.52 0 180.84-76.708 180.84-182.88S1269.39.491 1172.87.491Zm0 360.68c-84.33 0-143.77-69.596-143.77-177.8 0-108.204 59.44-177.8 143.77-177.8 84.32 0 143.76 69.596 143.76 177.8 0 108.204-59.44 177.8-143.76 177.8Z" fill="currentColor"/></svg>
                      </div>

                      <div className="w-full md:w-11/12 xl:w-10/12 mx-auto overflow-hidden">
                        <div className="flex flex-wrap">
                          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12 xl:pr-24">
                            <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-5 relative overflow-hidden">
                              <m.span variants={reveal} className="block">All enquiries</m.span>
                            </span>

                            <a href="mailto:hello@palmar.agency" className="inline-block group font-serif text-blush relative text-xl md:text-2xl font-normal leading-[1.15] md:leading-[1.2] mr-8  transition-colors ease-in-out duration-500 overflow-hidden group">
                              <m.span variants={reveal} className="block">
                                hello@palmar.agency 

                                <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                              </m.span>
                            </a>

                            <hr className="border-b border-t-0 border-current my-6 md:my-8 xl:my-12 opacity-50" />

                            <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-5 relative overflow-hidden">
                              <m.span variants={reveal} className="block">Social</m.span>
                            </span>

                            <div><a href="https://www.instagram.com/palmaragency/" target="_blank" rel="noopener noreferrer" className="group inline-block font-serif mb-3 text-blush relative text-xl md:text-2xl font-normal leading-[1.15] md:leading-[1.2] tr  transition-colors ease-in-out duration-500 overflow-hidden">
                              <m.span variants={reveal} className="block">Instagram 
                              
                              <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                              </m.span>
                            </a>
                            </div>

                            <div><a href="https://twitter.com/palmaragency/" target="_blank" rel="noopener noreferrer" className="group inline-block font-serif mb-3 text-blush relative text-xl md:text-2xl font-normal leading-[1.15] md:leading-[1.2] tracking-tight mr-8 transition-colors ease-in-out duration-500 overflow-hidden">
                              <m.span variants={reveal} className="block">Twitter 
                              
                              <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                              </m.span>
                            </a>
                            </div>

                            <div><a href="https://www.tiktok.com/@palmaragency/" target="_blank" rel="noopener noreferrer" className="group inline-block font-serif mb-3 text-blush relative text-xl md:text-2xl font-normal leading-[1.15] md:leading-[1.2] tracking-tight mr-8 transition-colors ease-in-out duration-500 overflow-hidden">
                              <m.span variants={reveal} className="block">TikTok 
                              
                              <span className="block border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500"></span>
                              </m.span>
                            </a>
                            </div>
                          </div>         
                          <div className="w-full md:w-1/2">
                            <span className="block font-sans uppercase text-sm md:text-sm font-normal tracking-tight text-blush mb-3">
                              <m.span variants={reveal} className="block">You want to</m.span>
                            </span>

                            <div className="mb-8 flex">
                              <button
                                className={`block transition-colors ease-in-out duration-500 text-black w-1/2 py-6 px-3 font-sans uppercase text-sm xl:text-base font-normal leading-[1.15] md:leading-[1.2] tracking-tight border-blush border mr-4 ${ formType == 'client' ? 'bg-blush ' : 'bg-transparent text-blush' }`}
                                onClick={() => setFormType('client')}
                              >
                                <span className="block relative overflow-hidden">
                                  <m.span variants={reveal} className="block">Ask A Question</m.span>
                                </span>
                              </button>
                            
                              <button
                                className={`block transition-colors ease-in-out duration-500 bg-pink text-black w-1/2 py-6 px-3 font-sans uppercase text-sm xl:text-base font-normal leading-[1.15] md:leading-[1.2] tracking-tight border-blush border ${ formType == 'model' ? 'bg-blush ' : 'bg-transparent text-blush' }`}
                                onClick={() => setFormType('model')}
                              >
                                <span className="block relative overflow-hidden">
                                  <m.span variants={reveal} className="block">Be A Palmar Model</m.span>
                                </span>
                              </button>
                            </div>

                            { formType == 'client' && (
                              <form
                                action="https://formspree.io/f/mrgjwkqd"
                                method="POST"
                              >
                                <label for="name" className="block font-sans uppercase text-sm md:text-sm font-normal tracking-tight text-blush mb-3">Your Name *</label>
                                <input type="text" name="name" id="name" required className="transition-colors ease-in-out duration-500 bg-transparent text-blush border-blush border w-full px-6 py-5 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-3 md:mb-6 focus:outline-none focus:border-pink placeholder-blush focus:text-pink" placeholder="" />

                                <label for="email" className="block font-sans uppercase text-sm md:text-sm font-normal tracking-tight text-blush mb-3">Your Email *</label>
                                <input type="email" name="email" id="email" required className="transition-colors ease-in-out duration-500 bg-transparent text-blush border-blush border w-full px-6 py-5 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-3 md:mb-6 focus:outline-none focus:border-pink placeholder-blush focus:text-pink" placeholder="" />

                                <label for="Message" className="block font-sans uppercase text-sm md:text-sm font-normal tracking-tight text-blush mb-3" required>Your Message *</label>
                                <textarea id="Message" name="message" className="transition-colors ease-in-out duration-500 bg-transparent text-blush border-blush border w-full px-6 py-5 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-3 md:mb-6 focus:outline-none focus:border-pink placeholder-blush focus:text-pink" />

                                <button type="submit" className="block transition-colors ease-in-out duration-500 bg-pink hover:bg-blush text-black w-full px-6 py-5 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight">
                                  <span className="block relative overflow-hidden">
                                    <m.span variants={reveal} className="block">Send Message</m.span>
                                  </span>
                                </button>
                              </form>
                            )}

                            { formType == 'model' && (
                              <form
                                action="https://formspree.io/f/xbjwvyoe"
                                method="POST"
                              >
                                <label for="name" className="block font-sans uppercase text-sm md:text-sm font-normal tracking-tight text-blush mb-3">Your Name *</label>
                                <input type="text" name="name" id="name" required className="transition-colors ease-in-out duration-500 bg-transparent text-blush border-blush border w-full px-6 py-5 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-3 md:mb-6 focus:outline-none focus:border-pink placeholder-blush focus:text-pink" />

                                <label for="email" className="block font-sans uppercase text-sm md:text-sm font-normal tracking-tight text-blush mb-3">Your Email *</label>
                                <input type="email" name="email" id="email" required className="transition-colors ease-in-out duration-500 bg-transparent text-blush border-blush border w-full px-6 py-5 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-3 md:mb-6 focus:outline-none focus:border-pink placeholder-blush focus:text-pink" />
                                
                                <div className="flex flex-wrap">
                                  <div className="w-full xl:w-1/2 xl:pr-6">
                                    <label for="insta" className="block font-sans uppercase text-sm md:text-sm font-normal tracking-tight text-blush mb-3">Instagram Handle</label>
                                    <input type="text" name="insta" id="insta" className="transition-colors ease-in-out duration-500 bg-transparent text-blush border-blush border w-full px-6 py-5 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-3 md:mb-6 focus:outline-none focus:border-pink placeholder-blush focus:text-pink"  />
                                  </div>

                                  <div className="w-full xl:w-1/2">
                                    <label for="portfolio" className="block font-sans uppercase text-sm md:text-sm font-normal tracking-tight text-blush mb-3">Portfolio URL</label>
                                    <input type="text" name="portfolio" id="portfolio" className="transition-colors ease-in-out duration-500 bg-transparent text-blush border-blush border w-full px-6 py-5 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-3 md:mb-6 focus:outline-none focus:border-pink placeholder-blush focus:text-pink"  />
                                  </div>
                                </div>

                                {/* <label for="image" className="block font-sans uppercase text-sm md:text-sm font-normal tracking-tight text-blush mb-3">Upload Images</label>

                                <p className="text-sm font-serif text-blush max-w-[420px] mb-5">Your shots do not have to be professional but, clear and taken against a plain background. Nails must be free of polish or enhancements. A bonus if your photos display your creativity.</p>

                                <input type="file" name="upload" multiple id="image" className="custom-file-input transition-colors ease-in-out duration-500 bg-transparent text-blush border-blush border w-full px-6 py-5 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-3 md:mb-6 focus:outline-none focus:border-pink placeholder-blush focus:text-pink" /> */}

                                <button type="submit" className="block transition-colors ease-in-out duration-500 bg-pink hover:bg-blush text-black w-full px-6 py-5 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight">
                                  <span className="block relative overflow-hidden">
                                    <m.span variants={reveal} className="block">Send Message</m.span>
                                  </span>
                                </button>
                              </form>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  </m.main>

                  <m.footer variants={fade} className="p-4 md:p-6 relative bg-black text-pink w-full mt-auto mb-[-4px]">
                    <div className="flex flex-wrap">
                      <span className="block w-full md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-[5px] md:mb-0 overflow-hidden">
                        <m.span variants={reveal} className="block">© Palmar Agency 2021</m.span>
                      </span>
                      
                      <span className="block w-1/2 md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0 md:mr-24 overflow-hidden pb-[4px]">
                        <m.span variants={reveal} className="block">
                          Site by <a href="https://shiftwalk.studio" rel="noopener noreferrer" target="_blank" className="group relative">Shiftwalk <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></a>
                        </m.span>
                      </span>

                      <span className="hidden xl:block w-1/2 md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg ml-auto font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0 fixed top-0 right-0 m-6 overflow-hidden pb-[4px]">
                        <Link href="/"><a className="group ">
                          <m.span variants={reveal} className="block">Back to home <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></m.span></a></Link>
                      </span>

                      <span className="block w-auto md:w-auto text-right xl:hidden ml-auto font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0">
                        <Link href="/">
                          <a className="group relative overflow-hidden block pb-[4px]">
                            <m.span variants={reveal} className="block">Back to home <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></m.span>
                          </a>
                        </Link>
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
