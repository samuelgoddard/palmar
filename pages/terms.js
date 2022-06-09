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

export default function Terms() {
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
      <NextSeo title={"Terms"} />

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
                        <Link href="/"><a className="group ">
                          <m.span variants={revealNoDelay} className="block">Back Home <span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span></m.span></a></Link>
                      </span>
                    </div>

                    <div className="w-full flex flex-wrap items-start">
                      <div className="w-11/12 md:w-full md:max-w-[380px] xl:max-w-[550px] 2xl:max-w-[620px] 3xl:max-w-[700px] md:mx-auto font-serif text-xl xl:text-[22px] leading-tight tracking-tight content mt-12 md:mt-16 xl:mt-24">

                        <h1 className="title uppercase">Privacy Notice - The Palmar Group Ltd</h1>

                        <h2>1. Who We Are?</h2>

                        <p>This is the privacy notice (“Privacy Notice”) of The Palmar Group Ltd (referred to in this Privacy Notice as “we”, “us” or “our”).We are committed to protecting your privacy,</p>

                        <p>This Privacy Notice applies when you use our website and services.</p>
                        
                        <p>We collect information that identifies you personally as an individual, such as your name, photograph, contact details, and information that can be linked with this, or other information, in order to identify you (“Personal Data”).</p>

                        <h2>2. Quick Guide to Contents</h2>
                        <ul>
                          <li>What personal information do we collect about you?</li>
                          <li>How do we use your personal information?</li>
                          <li>How long do we keep your personal information for?</li>
                          <li>Who do we share your personal information with?</li>
                          <li>What happens if you do not provide us with the information we request?</li>
                          <li>Do we make automated decisions concerning you?</li>
                          <li>Do we transfer your personal information outside the EEA?</li>
                          <li>What are your rights?</li>
                          <li>How do we contact you?</li>
                          <li>How do you contact us?</li>
                        </ul>

                        <h2>3. What personal information do we collect about you?</h2>

                        <p>We collect and process your information in the following ways:</p>
                        
                        <p>1. Information you give us</p>
                        
                        <p>1.1. We process Personal Data that we need to contact you including your name, email address, telephone number and postal address. You might share this information with us by telephone, through our website or by e-mail. We use the personal information you have provided to us to reply with the information you have asked us for. It is your responsibility to inform us of any changes to your Personal Data.</p>

                        <p>1.2. We process information relating to transactions, such as purchases of goods and/or services, that you enter into with us or complete through our website including the transaction details, your name, your contact details, and your payment details.</p>
                        
                        <p>1.3. We process your website user account data including your account identifier (such as your name, username, email address or business name), along with your marketing preferences when you register for an account with us. </p>
                        
                        <p>1.4. We also process data about your use of our website and services. For more information, please see our Cookie Policy.</p>
                        
                        <p>2. Information we collect automatically</p>
                        <p>2.1. We may aggregate anonymous data such as statistical or demographic data for any purpose. Anonymous data is data that does not identify you as an individual. Aggregated data may be derived from your Personal Data but is not considered personal information in law because it does not reveal your identity. For example, we may aggregate profile data to assess interest in a product or service. However, if we combine or connect aggregated data with your personal information so that it can identify you in any way, it will be treated as Personal Data and used as set out in this Privacy Notice.</p>

                        <p>3. Information we receive from third parties</p>

                        <p>3.1. Third parties may advertise on our website. In doing so, those parties, their agents or other companies working for them may use technology that automatically collects information about you when their advertisement is displayed on our website. They may also use other technology such as cookies or tracking technologies to personalise the content of, and to measure the performance of their adverts. We do not control these technologies or the data that these third parties collect. This Privacy Notice does not cover the practices of these third parties and we recommend that you read their privacy and cookie notices.</p>

                        <h2>4. How do we use your personal information?</h2>

                        <p>1. To provide you with a service you are requesting or perform our contract with you.</p>
                        
                        <p>1.1. When you create an account on our website, buy a product or service from us, or otherwise agree to our terms and conditions, a contract is formed between you and us.</p>
                        
                        <p>1.2. We process the Personal Data you give us in order to carry out our obligations to you under that contract.</p>
                        
                        <p>1.3. We may use this Personal Data to:</p>
                        
                        <ul>
                          <li>verify your identity for security purposes</li>
                        
                          <li>sell products to you and/or provide you with our services</li>
                          
                          <li>provide you with suggestions and advice on products, services and how to obtain the most from using our website and services.</li>
                        </ul>
                        
                        <p>2. Where we have your consent</p>
                        
                        <p>2.1. When you browse and use our website and use our services or ask us to provide you with more information about our business, including our products and services, you provide your consent for us to process your Personal Data.</p>
                        
                        <p>2.2. Wherever possible, and where we need it, we seek your consent to process this information, for example, by asking you to agree to our use of cookies.</p>
                        
                        <p>2.3. Where you have given us permission to do so, we may from time to time pass your name and contact information to selected parties whom we consider may provide services or products you might find useful.</p>
                        
                        <p>2.4. You may withdraw your consent (including for marketing purposes) at any time by instructing us at hello@palmar.agency . However, if you do so, in some circumstances we may not be able to provide our services to you.</p>
                        
                        <p>3. Where we have a legitimate interest</p>
                        
                        <p>3.1. We also process Personal Data on the basis of legitimate interest.</p>
                        
                        <p>3.2. Where we rely on legitimate interest for processing your information, we carry out a ‘balancing test’ to ensure that our processing is necessary and that your fundamental rights of privacy are not outweighed by our legitimate interests, before we go ahead with such processing. You can find out more about the information in these balancing tests by contacting us using the details below.</p>
                        
                        <p>3.3. For example, we process your Personal Data on this basis for the purposes of:</p>
                        <ul>
                          <li>running our business</li>
                          <li>responding to communications from you</li>
                          <li>asserting and defending legal rights</li>
                        </ul>

                        <p>4. Where we have a legal obligation</p>
                        
                        <p>4.1. Sometimes, we must process your Personal Data information in order to comply with a legal requirement. For example, we may be legally required to give information, including your personal information, to others if they so request or if they have the proper authorisation such as a search warrant or court order. </p>

                        <h2>5. How long do we keep your personal information for?</h2>

                        <p>We only retain your information for as long as is necessary for us to use your information as described above, where it is in our legitimate interest, or to comply with our legal obligations. We will retain some of your information after you cease to use our services, for instance if this is necessary to meet our legal obligations, or is needed for tax and accounting purposes.
                        When determining the relevant retention periods, we will take into account factors including:</p>

                        <ul>
                          <li>(a)	our contractual obligations and rights in relation to the information involved;</li>
                          <li>(b)	legal obligation(s) under applicable law to retain data for a certain period of time;</li>
                          <li>(c)         our legitimate interest where we have carried out a balancing test;</li>
                          <li>(d)	statute of limitations under applicable law(s);</li>
                          <li>(e)	(potential) disputes;</li>
                          <li>(f)	if you have made a request to have your information deleted; and</li>
                          <li>(g)	guidelines issued by relevant data protection authorities.</li>
                        </ul>

                        <p>Otherwise, we securely erase your information once this is no longer needed.</p>

                        <h2>6. Who do we share your personal information information with?</h2>

                        <p>[We share your personal information with trusted third parties where we have retained them to provide services that you or our clients have requested, such as Brands, Companies and Organisations. These third parties comply with similar and equally stringent undertakings of privacy and confidentiality.]</p>
                        
                        <p>[We share your personal information with third parties who perform functions on our behalf and who also provide services to us, such as professional advisors, IT consultants carrying out testing and development work on our IT systems and research and mailing houses. These third parties are required to agree to privacy and confidentiality obligations.]</p>
                        
                        <p>[We share your personal information with our other Group companies for internal reasons, primarily for business and operational purposes. As we continue to develop our business, we may sell or purchase assets. If another entity acquires us or merges with us your personal information will be disclosed to such entity. Also, if any bankruptcy or reorganisation proceeding is brought by or against us, all such information will be considered an asset of ours and as such it is possible they will be sold or transferred to third parties.]</p>
                        
                        <p>[Where required we share your personal information with third parties to comply with a legal obligation; when we believe in good faith that an applicable law requires it; at the request of governmental authorities conducting an investigation; to verify or enforce our Terms of Use or other applicable policies; to detect and protect against fraud, or any technical or security vulnerabilities; to respond to an emergency; or otherwise to protect the rights, property, safety, or security of third parties, visitors to the our website, our business or the public.]</p>
                        
                        <p>[We do not intend to collect Personal Data from anyone under the age of 13.  If you are a parent or guardian and you become aware that we have collected Personal Data from your child then please notify us by email.]</p>

                        <h2>7. What happens if you do not provide us with the information we request or ask that we stop processing your information?</h2>

                        <p>If you do not provide Personal Data where we ask for it or withdraw your consent for the processing of your personal information, where this information is necessary for us to provide services to you, we will not be able to provide these services to you.</p>

                        <h2>8. Do we make automated decisions concerning you?</h2>

                        <p>No, we do not carry out automated decision making.</p>

                        <h2>9. Do we use Cookies to collect Personal Data on you?</h2>
                        
                        <p>We use cookies to collect your Personal Data when you browse our website.</p>

                        <h2>10. Do we transfer your personal information outside the UK?</h2>
                        
                        <p>No, we do not transfer personal information out of the UK.</p>

                        <h2>11. What are your rights?</h2>

                        <p>By law, you have a number of rights when it comes to your personal information. Please contact us using the contact details below to exercise any of your rights. Further information and advice about your rights can be obtained from the ICO, the UK data protection regulator. </p>

                        <table>
                          <thead>
                            <tr>
                              <td>Rights</td>
                              <td>What does this mean?</td>
                            </tr>
                          </thead>
                          <tr>
                            <td>The right to object to processing</td>
                            <td>You have the right to object to certain types of processing, including processing for direct marketing (i.e. if you no longer want to be contacted with potential opportunities).</td>
                          </tr>
                          <tr>
                            <td>The right to be informed</td>
                            <td>You have the right to be provided with clear, transparent and easily understandable information about how we use your information and your rights. This is why we’re providing you with the information in this Privacy Notice.</td>
                          </tr>
                          <tr>
                            <td>The right of access</td>
                            <td>You have the right to obtain access to your information (if we’re processing it), and certain other information (similar to that provided in this Privacy Notice). This is so you’re aware and can check that we’re using your information in accordance with data protection law.</td>
                          </tr>
                          <tr>
                            <td>The right to rectification</td>
                            <td>You are entitled to have your information corrected if it’s inaccurate or incomplete.</td>
                          </tr>
                          <tr>
                            <td>The right to erasure</td>
                            <td>This is also known as ‘the right to be forgotten’ and, in simple terms, enables you to request the deletion or removal of your information where there’s no compelling reason for us to keep using it. This is not a general right to erasure; there are exceptions.</td>
                          </tr>
                          <tr>
                            <td>The right to restrict processing</td>
                            <td>You have rights to ‘block’ or suppress further use of your information. When processing is restricted, we can still store your information, but may not use it further. We keep lists of people who have asked for further use of their information to be ‘blocked’ to make sure the restriction is respected in future.</td>
                          </tr>
                          <tr>
                            <td>The right to data portability</td>
                            <td>You have rights to obtain and reuse your personal information for your own purposes across different services. For example, if you decide to switch to a new provider, this enables you to move, copy or transfer your information easily between our IT systems and theirs safely and securely, without affecting its usability.</td>
                          </tr>
                          <tr>
                            <td>The right to withdraw consent</td>
                            <td>If you have given your consent to anything we do with your personal information, you have the right to withdraw your consent at any time (although if you do so, it does not mean that anything we have done with your personal information with your consent up to that point is unlawful). This includes your right to withdraw consent to us using your personal information for marketing purposes.</td>
                          </tr>
                          <tr>
                            <td>The right to lodge a complaint</td>
                            <td>You have the right to lodge a complaint about the way we handle or process your personal information with your national data protection regulator.</td>
                          </tr>
                        </table>

                        <h2>12. Our Contact Details</h2>

                        <p> If you have any enquires you can contact us at: hello@palmar.agency or by writing to us at:
                        <br/><br/>
                        Address:<br/>
                        The Palmar Group Ltd<br/>
                        86-90 Paul Street,<br/>
                        London,<br/>
                        United Kingdom,<br/>
                        EC2A 4NE</p>
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