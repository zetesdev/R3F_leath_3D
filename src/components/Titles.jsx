import { motion } from 'framer-motion';

function Titles({ progress }) {
  const titles = [
    { title: '', subtitle: '' },
    { title: 'PLIERS', subtitle: 'more than fingers' },
    { title: '', subtitle: '' },
    { title: 'SCREWDRIVER', subtitle: 'fix, break, fix again' },
    { title: '', subtitle: '' },
    { title: 'SCISSORS', subtitle: 'do you have plasters?' },
  ];

  const offsets = [
    { x: '', y: '' },
    { x: 'lg:translate-x-64', y: 'lg:-translate-y-64' },
    { x: '', y: '' },
    { x: 'lg:translate-x-32', y: 'lg:-translate-y-64' },
    { x: '', y: '' },
    { x: 'lg:-translate-x-64', y: 'lg:-translate-y-48' },
  ];

  return (
    <>
      <div className='fixed z-1 landscape:sm:max-md:top-2 top-10 left-1/2 lg:top-1/2 lg:-translate-y-1/2 -translate-x-1/2 pointer-events-none touch-events-none'>
        <motion.div
          key={progress}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0.9, 0] }}
          transition={{ duration: 5, delay: 0.7 }}
        >
          <div
            className={`${offsets[progress].x} ${offsets[progress].y} lg:px-3 font-light bg-slate-100 overflow-hidden`}
          >
            <motion.h1
              initial={{ x: -700 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className='text-lg px-2 pr-20 text-start sm:text-xl md:text-xl portrait:md:max-lg:text-5xl  lg:text-5xl '
            >
              {titles[progress].title}
            </motion.h1>
            <motion.h3
              initial={{ x: 700 }}
              animate={{ x: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className='text-sm text-end pl-3 pr-2 sm:text-sm md:text-base portrait:md:max-lg:text-2xl lg:text-2xl'
            >
              {titles[progress].subtitle}
            </motion.h3>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Titles;
