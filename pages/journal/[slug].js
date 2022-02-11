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
import BlockContent from '@sanity/block-content-to-react'

const query = `{
  "current": *[_type == "journal" && slug.current == $slug][0]{
    title,
    content,
    supportingImage {
      ...,
      asset->
    },
    slug {
      current
    }
  },
}`

const pageService = new SanityPageService(query)

export default function JournalSlug(initialData) {
  const { data: { current } } = pageService.getPreviewHook(initialData)()
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
      <NextSeo title={current?.title ? current.title : "Journal Entry"} />

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
                <m.main variants={fade} className="p-4 md:p-6 relative pb-16 md:pb-24 xl:pb-32 bg-off-white text-black selection:bg-black selection:text-off-white">

                  <article className="flex flex-wrap">
                    <div className="w-full relative z-10">
                      <Link href="/">
                        <a className="block w-full xl:w-[89%]">
                          <svg className="w-full" viewBox="0 0 1723 361" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M111.281 5.63H.934v349.554h32.954V203.877h77.393c98.364 0 139.807-44.943 139.807-100.872 0-57.926-45.437-97.376-139.807-97.376Zm0 193.253H33.888V10.623h77.393c70.403 0 104.855 35.954 104.855 92.382 0 58.925-35.95 95.878-104.855 95.878ZM481.446 355.184h36.449L350.626.636h-.998l-159.78 354.548h5.493l51.928-115.353h179.752l54.425 115.353Zm-232.18-120.347 85.882-189.758 89.376 189.758H249.266ZM564.21 350.191V5.629h-32.954v349.555h209.211v-4.993H564.21ZM1114.31 5.63h-36.45L940.55 311.24 800.743 5.63h-38.946v349.554h4.993V10.623l158.78 349.555h.5l155.29-349.056v344.062h32.95V5.629ZM1419.31 355.184h36.45L1288.49.636h-1l-159.78 354.548h5.5l51.92-115.353h179.76l54.42 115.353Zm-232.18-120.347 85.88-189.758 89.38 189.758h-175.26ZM1722.27 355.184l-76.39-138.823h-30.46l-14.48-26.466c70.9-6.991 109.85-43.445 109.85-91.384 0-53.432-48.44-92.882-136.81-92.882h-104.86v349.555h32.95V191.393h71.91c7.49 0 14.48-.5 20.97-.999l90.37 164.79h36.95Zm-156.28-168.785h-63.92V10.623h63.92c73.89 0 109.84 38.451 109.84 87.888 0 49.437-35.95 87.888-109.84 87.888Z" fill="currentColor"/></svg>
                        </a>
                      </Link>

                      <span className="hidden xl:block w-1/2 md:w-auto font-sans uppercase text-sm md:text-base xl:text-lg ml-auto font-normal leading-[1.15] md:leading-[1.15] tracking-tight mb-[5px] md:mb-0 fixed top-0 right-0 m-6 overflow-hidden pb-[4px]">
                        <Link href="/journal"><a className="group ">
                          <m.span variants={revealNoDelay} className="block">All Articles <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></m.span></a></Link>
                      </span>
                    </div>

                    <div className="w-full flex flex-wrap items-start">
                      <div className="w-full md:w-5/12 lg:w-1/2 xl:w-7/12 mt-[13px] md:mt-[-13vw] mb-6 md:mb-0 overflow-hidden" data-scroll data-scroll-speed={1.3}>
                        <div className="relative overflow-hidden">
                          <m.span variants={revealImage} className={`block z-[1000] w-full h-full absolute inset-0 bg-off-white`}></m.span>

                          <Image
                            alt="Hand model"
                            src={current.supportingImage.asset.url}
                            className="scale-105 w-full absolute inset-0 object-cover object-center"
                            priority={true}
                            layout="responsive"
                            objectFit
                            width={1200}
                            height={1600}
                          />
                        </div>
                      </div>
                      
                      <div className="w-11/12 md:w-full md:max-w-[380px] xl:max-w-[400px] 2xl:max-w-[440px] 3xl:max-w-[500px] md:mx-auto font-serif text-xl xl:text-2xl leading-tight tracking-tight content md:mt-16 xl:mt-24">

                        <h1 className="title uppercase">{current.title}</h1>

                        <BlockContent serializers={{ container: ({ children }) => children }} blocks={current.content} />

                        <div className="max-w-[320px] bg-blend-color-burn bg-off-white mt-8 md:mt-16 mb-4">
                          <img src="/images/signature.png" alt="Vanessa Signature" className="w-full mix-blend-darken" />
                        </div>

                        <span className="block font-sans uppercase text-sm md:text-base xl:text-lg font-normal leading-[1.15] tracking-tight md:leading-[1.15] xl:leading-[1.15]">Vanessa Boamah<br/>Founder</span>
                      </div>
                    </div>
                  </article>
                </m.main>

                <m.footer variants={fade} className="p-4 md:p-6 relative bg-off-white text-black">
                  <div className="flex flex-wrap">
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

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('journal')
  return {
    paths: paths,
    fallback: false,
  };
}