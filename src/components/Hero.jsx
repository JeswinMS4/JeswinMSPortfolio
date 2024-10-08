import { motion } from 'framer-motion';

import { styles} from '../styles';
import { ComputersCanvas} from './canvas';

const Hero = () => {
  return (
   <section className="relative w-full h-screen mx-auto">
  <div
    className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
  >
    <div className='flex flex-col justify-center items-center mt-5'>
      {/* Update circle color to orange */}
      <div className='w-5 h-5 rounded-full bg-[#FF914D]' /> 
      {/* Update gradient color */}
      <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-orange-500 to-orange-300' />
    </div>

    <div>
      {/* Update text color highlight to orange */}
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className='text-[#FF914D]'>Jeswin</span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        I am a CSE AI ML student at RIT, <br className='sm:block hidden' />
        Exploring the Tech world..
      </p>
    </div>
  </div>

{/*       <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}
export default Hero
