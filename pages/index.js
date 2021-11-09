import { useRef } from 'react'
import Layout from '@/components/layout'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Home() {
  const containerRef = useRef(null)
  let colorThemes = ['bg-pink text-black', 'bg-green text-black', 'bg-black text-pink', 'bg-brown text-pink', 'bg-off-white text-black'];
  let currentColorTheme = Math.floor(Math.random()*colorThemes.length);

  return (
    <Layout>
      <NextSeo title="Home" />

      <div className="grain fixed w-full h-full inset-0 pointer-events-none z-100"></div>      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container" className={`${colorThemes[currentColorTheme]}`}>
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <m.main variants={fade} className="p-6 h-screen">
                  <article className="flex flex-wrap h-full">
                    <div className="mb-auto w-full">
                      <svg className="w-full" viewBox="0 0 1723 361" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M111.281 5.63H.934v349.554h32.954V203.877h77.393c98.364 0 139.807-44.943 139.807-100.872 0-57.926-45.437-97.376-139.807-97.376Zm0 193.253H33.888V10.623h77.393c70.403 0 104.855 35.954 104.855 92.382 0 58.925-35.95 95.878-104.855 95.878ZM481.446 355.184h36.449L350.626.636h-.998l-159.78 354.548h5.493l51.928-115.353h179.752l54.425 115.353Zm-232.18-120.347 85.882-189.758 89.376 189.758H249.266ZM564.21 350.191V5.629h-32.954v349.555h209.211v-4.993H564.21ZM1114.31 5.63h-36.45L940.55 311.24 800.743 5.63h-38.946v349.554h4.993V10.623l158.78 349.555h.5l155.29-349.056v344.062h32.95V5.629ZM1419.31 355.184h36.45L1288.49.636h-1l-159.78 354.548h5.5l51.92-115.353h179.76l54.42 115.353Zm-232.18-120.347 85.88-189.758 89.38 189.758h-175.26ZM1722.27 355.184l-76.39-138.823h-30.46l-14.48-26.466c70.9-6.991 109.85-43.445 109.85-91.384 0-53.432-48.44-92.882-136.81-92.882h-104.86v349.555h32.95V191.393h71.91c7.49 0 14.48-.5 20.97-.999l90.37 164.79h36.95Zm-156.28-168.785h-63.92V10.623h63.92c73.89 0 109.84 38.451 109.84 87.888 0 49.437-35.95 87.888-109.84 87.888Z" fill="currentColor"/></svg>
                    </div>

                    <div className="max-w-[580px] mt-auto">
                      <h1 className="font-serif text-[38px] md:text-[48px] xl:text-[54px] 2xl:text-[64px] leading-none tracking-tighter">Palmar is a divergent parts modelling agency representing <span className="italic">black</span>, <span className="italic">asian</span> and <span className="italic">ethnic</span> hand models.</h1>
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
