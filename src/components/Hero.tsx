import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import S from "../../public/icons/S.svg"

const Hero: React.FC = () => {
  return (
    <>
      <div id="hero" className="min-h-screen grid grid-rows-6">
        <div className="row-span-1 hidden lg:block"></div>
        <div className="grid row-span-4 mt-50 grid-cols-12">
          <div className="col-span-1 hidden lg:block"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="col-span-12 lg:col-span-11 text-center lg:text-left"
          >
            <h4 className="text-lighter-gray mb-3">Hi, I&apos;m</h4>
            <h1 className="text-white flex flex-row justify-center lg:justify-start items-center">
              {/* <span className="">
                <svg
                  className="hidden lg:inline"
                  width="73"
                  height="92"
                  viewBox="0 0 73 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.9688 92C34.1702 92 28.7858 91.1424 23.8156 89.4273C18.8454 87.7122 14.3584 85.4482 10.3546 82.6353C6.41986 79.7539 2.96832 76.6667 0 73.3736L10.3546 57.0112C11.252 59.3438 12.7362 61.5735 14.8071 63.7002C16.947 65.827 20.5712 62.0537 23.4014 63.7002C26.2317 65.3468 28.061 72.3102 31.1674 73.2707C34.3428 74.2312 37.4492 74.7114 40.4865 74.7114C45.0426 74.7114 41.2235 70.8009 43.9157 69.3602C46.6079 67.8509 55.3972 69.0514 55.3972 66.5817C55.3972 64.6607 54.7759 63.0828 53.5333 61.8479C52.3598 60.5444 50.9792 59.5153 49.3915 58.7606C47.8728 57.9374 46.5612 57.217 45.4567 56.5995C44.6284 56.1879 43.1097 55.5705 40.9007 54.7472C38.7608 53.8553 36.3447 52.8949 33.6525 51.8658C30.9603 50.8367 28.4061 49.8762 25.9901 48.9843C23.574 48.0239 21.6756 47.2349 20.295 46.6174C10.0095 42.0209 4.86667 34.9202 4.86667 25.3154C4.86667 22.2282 5.45343 19.2095 6.62695 16.2595C7.8695 13.2409 9.73333 10.4966 12.2184 8.02684C14.7035 5.55704 17.879 3.60179 21.7447 2.16107C25.6104 0.720357 30.2355 0 35.6199 0C41.4875 0 46.6993 0.651752 51.2553 1.95526C55.8113 3.19016 59.8151 4.76808 63.2667 6.68904C66.7872 8.60999 69.7901 10.6339 72.2752 12.7606L62.7489 28.6085C55.0865 21.0619 50.9792 26.33 41.3149 26.33C37.2421 26.33 29.5797 17.7345 27.4397 18.6264C25.3688 19.4497 23.9537 20.4101 23.1943 21.5078C22.504 22.5369 22.1589 23.3945 22.1589 24.0805C22.1589 25.2468 22.573 26.4131 23.4014 27.5794C24.2988 28.7457 26.2662 29.9806 29.3035 31.2841C30.5461 31.833 32.2028 32.519 34.2738 33.3423C36.4137 34.0969 38.7608 34.9545 41.3149 35.915C43.9381 36.8755 55.8789 33.6086 58.364 34.7063C60.9182 35.7354 53.844 41.0947 55.9149 42.1924C58.4 43.5645 60.9541 45.2453 63.5773 47.2349C66.2005 49.2245 68.4095 51.6943 70.2043 54.6443C72.0681 57.5257 73 61.0589 73 65.2438C73 67.7823 72.5168 70.5951 71.5504 73.6823C70.5839 76.701 68.8927 79.6167 66.4766 82.4295C64.0605 85.2424 60.7125 87.5406 56.4326 89.3244C52.1527 91.1081 46.6648 92 39.9688 92Z"
                    fill="#31E981"
                  />
                </svg>
              </span> */}
              <span className="lg:hidden md:text-6xl text-2xl text-primary-green">
                Tim{" "}
              </span>
              <span className="lg:text-[86px] hidden lg:block text-6xl text-primary-green">
                Tim{" "}
              </span>
              <span className="mx-2"></span>
              <span className="lg:text-[86px] md:text-6xl text-2xl">
                Anderson
              </span>
            </h1>
            <h2 className="text-light-gray lg:text-4xl md:text-2xl text-xl">
              Web Developer
            </h2>
            <p className="mt-3 text-lighter-gray">
              I am a software developer who specializes in designing <br />
              and creating beautiful websites and robust web apps.
            </p>
            <p className="mt-3 text-lighter-gray">
              I am a software developer who specializes in designing <br />
              and creating beautiful websites and robust web asdfasdfasdfasdfasddasdfasdfasdfasdfasd.
            </p>
            <a href="#contact-me">
              {/* <button className="border-2 mt-10 text-white border-light-green py-2 px-8 rounded-md hover:border-primary-green hover:text-white hover:bg-primary-green transition-all">
                Get in Touch
              </button> */}
            </a>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Hero
