import { useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Founders() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Founders Message" />

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
                <m.main variants={fade} className="p-6 relative pb-16 md:pb-24 xl:pb-32 bg-off-white text-off-black">

                  <article className="flex flex-wrap">
                    <div className="w-full relative z-10">
                      <Link href="/">
                        <a className="block w-full">
                          <svg className="w-full" viewBox="0 0 1723 361" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M111.281 5.63H.934v349.554h32.954V203.877h77.393c98.364 0 139.807-44.943 139.807-100.872 0-57.926-45.437-97.376-139.807-97.376Zm0 193.253H33.888V10.623h77.393c70.403 0 104.855 35.954 104.855 92.382 0 58.925-35.95 95.878-104.855 95.878ZM481.446 355.184h36.449L350.626.636h-.998l-159.78 354.548h5.493l51.928-115.353h179.752l54.425 115.353Zm-232.18-120.347 85.882-189.758 89.376 189.758H249.266ZM564.21 350.191V5.629h-32.954v349.555h209.211v-4.993H564.21ZM1114.31 5.63h-36.45L940.55 311.24 800.743 5.63h-38.946v349.554h4.993V10.623l158.78 349.555h.5l155.29-349.056v344.062h32.95V5.629ZM1419.31 355.184h36.45L1288.49.636h-1l-159.78 354.548h5.5l51.92-115.353h179.76l54.42 115.353Zm-232.18-120.347 85.88-189.758 89.38 189.758h-175.26ZM1722.27 355.184l-76.39-138.823h-30.46l-14.48-26.466c70.9-6.991 109.85-43.445 109.85-91.384 0-53.432-48.44-92.882-136.81-92.882h-104.86v349.555h32.95V191.393h71.91c7.49 0 14.48-.5 20.97-.999l90.37 164.79h36.95Zm-156.28-168.785h-63.92V10.623h63.92c73.89 0 109.84 38.451 109.84 87.888 0 49.437-35.95 87.888-109.84 87.888Z" fill="currentColor"/></svg>
                        </a>
                      </Link>
                    </div>

                    <div className="w-full flex flex-wrap">
                      <div className="w-full md:w-5/12 lg:w-1/2 xl:w-7/12 mt-[-10vw] md:mt-[-13vw] mb-6 md:mb-0 overflow-hidden" data-scroll data-scroll-speed={1.3}>
                        <img className="w-full scale-105" src="/images/03.jpg" alt="dog" />
                      </div>
                      
                      <div className="w-full md:max-w-[380px] xl:max-w-[400px] 2xl:max-w-[440px] 3xl:max-w-[500px] mx-auto font-serif text-xl xl:text-2xl leading-tight tracking-tight content md:mt-16 xl:mt-24">
                        <p>Hello, we are Palmar, a divergent parts-modelling agency repping Black, Asian and all other Ethnic minority hand models across the UK.</p>

                        <p>Palmar blazes its own trail; disturbs the status quo; provides opportunity and support.</p>

                        <p>The agency was founded in view of the fact that there are prejudices in the parts-modelling industry, ethnic parts-models are underrepresented in commercial and editorial advertising campaigns and brands can do more to welcome inclusivity.</p>

                        <p>Palmar Agency concentrates principally on the individual identity and wellbeing of its models, we open the door for trusted and longstanding connections in true and creative spirit. We are over and above a traditional modelling agency, we are a budding creative studio for online content too. The overall desire is to impel diversity through intentional targeted marketing.</p>

                        <p>Palmar is presently shooting content for its launch in October, and we are charged to show you all the magic we have conjured with <a href="#">@kelliefrenchstudio</a>.</p>

                        <p>We are taking new model applications and fáilte client enquiries. Get in touch with us at <a href="#">hello@palmar.agency</a> — we would love to join forces!</p>

                        <div className="max-w-[320px] bg-blend-color-burn bg-off-white mt-8 mb-4">
                          <img src="/images/signature.png" alt="Vanessa Signature" className="w-full mix-blend-darken" />
                        </div>

                        <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] tracking-tight md:leading-[1.15] xl:leading-[1.15]">Vanessa Boamah<br/>Founder</span>
                      </div>
                    </div>
                  </article>
                </m.main>

                <m.footer variants={fade} className="p-6 relative bg-off-white text-off-black">
                  <div className="flex">
                    <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8">© Palmar Agency 2021</span>
                    
                    <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8 md:mr-24">Site by <a href="https://shiftwalk.studio" rel="noopener noreferrer" target="_blank" className="group relative">Shiftwalk <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-3px]"></span></a></span>

                    <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight mr-8">
                      <Link href="/"><a className="group relative">Back to home <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-3px]"></span></a></Link>
                    </span>
                    
                    <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight ml-auto"><Link href="/contact"><a className="group relative">Contact Us <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-3px]"></span></a></Link></span>
                  </div>
                </m.footer>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
