import { useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Contact() {
  const containerRef = useRef(null)

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
                <m.div variants={fade} className="min-h-screen bg-black text-pink flex flex-wrap">
                  <m.main variants={fade} className="p-6 relative pb-16 md:pb-24 xl:pb-32 w-full mb-auto">

                    <article className="flex flex-wrap">
                      <div className="w-full md:w-11/12 xl:w-10/12 relative z-10 mb-16 md:mb-28 xl:mb-40">
                        <svg className="w-full" viewBox="0 0 1354 367" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M245.579 5.57V171.18H34.25V5.571H.723v355.6H34.25V176.259h211.328v184.912h34.036V5.571h-34.036Zm293.937 5.08V5.57H327.172v355.601h212.344v-5.08H360.7v-172.72h163.576v-5.08H360.7V10.651h178.816Zm67.762 345.441V5.571H573.75v355.6h212.852v-5.08H607.278Zm239.634 0V5.571h-33.528v355.6h212.856v-5.08H846.912ZM1172.87.491c-96.52 0-180.853 76.708-180.853 182.88s84.333 182.88 180.853 182.88c96.52 0 180.84-76.708 180.84-182.88S1269.39.491 1172.87.491Zm0 360.68c-84.33 0-143.77-69.596-143.77-177.8 0-108.204 59.44-177.8 143.77-177.8 84.32 0 143.76 69.596 143.76 177.8 0 108.204-59.44 177.8-143.76 177.8Z" fill="currentColor"/></svg>
                      </div>

                      <div className="w-full md:w-11/12 xl:w-10/12 mx-auto overflow-hidden">
                        <div className="flex flex-wrap">
                          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12 xl:pr-24">
                            <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-1">All enquiries</span>

                            <a href="mailto:hello@palmar.agency" className="block font-serif text-blush underline text-xl md:text-2xl font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 hover:text-white transition-colors ease-in-out duration-500 focus:text-white">hello@palmar.agency</a>

                            <hr className="border-b border-t-0 border-current my-6 md:my-8 xl:my-12 opacity-50" />

                            <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 mb-1">Social</span>

                            <a href="https://www.instagram.com/palmaragency/" target="_blank" rel="noopener noreferrer" className="block font-serif text-blush underline text-xl md:text-2xl font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 hover:text-white transition-colors ease-in-out duration-500 focus:text-white">Instagram</a>
                          </div>         
                          <div className="w-full md:w-1/2">
                            <form>
                              <label for="name" className="sr-only">Your Name</label>
                              <input type="text" id="name" className="transition-colors ease-in-out duration-500 bg-transparent text-blush border-blush border w-full p-6 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-6 focus:outline-none focus:border-pink placeholder-blush focus:text-pink" placeholder="Your Name" />

                              <label for="enquiry" className="sr-only">Enquiry Type</label>
                              <input type="select" id="enquiry" className="transition-colors ease-in-out duration-500 bg-transparent text-blush border-blush border w-full p-6 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-6 focus:outline-none focus:border-pink placeholder-blush focus:text-pink" placeholder="Enquiry Type" />

                              <label for="email" className="sr-only">Email Address</label>
                              <input type="email" id="email" className="transition-colors ease-in-out duration-500 bg-transparent text-blush border-blush border w-full p-6 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-6 focus:outline-none focus:border-pink placeholder-blush focus:text-pink" placeholder="Email Address" />

                              <label for="upload" className="sr-only">Upload Images</label>
                              <input type="text" id="upload" className="transition-colors ease-in-out duration-500 bg-transparent text-blush border-blush border w-full p-6 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-6 focus:outline-none focus:border-pink placeholder-blush focus:text-pink" placeholder="Upload Images" />

                              <button type="submit" className="block transition-colors ease-in-out duration-500 bg-pink hover:bg-blush text-black w-full p-6 font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight">Send Message</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </article>
                  </m.main>

                  <m.footer variants={fade} className="p-6 relative bg-black text-pink w-full mt-auto">
                    <div className="flex">
                      <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8">© Palmar Agency 2021</span>
                      
                      <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 md:mr-24">Site by <a href="https://shiftwalk.studio" rel="noopener noreferrer" target="_blank" className="underline">Shiftwalk</a></span>

                      <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8"><Link href="/"><a className="underline">Back to home</a></Link></span>
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