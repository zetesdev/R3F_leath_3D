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
    { x: 'md:translate-x-64', y: 'md:translate-y-48' },
    { x: '', y: '' },
    { x: 'md:translate-x-32', y: 'md:-translate-y-64' },
    { x: '', y: '' },
    { x: 'md:-translate-x-64', y: 'md:-translate-y-48' },
  ];

  return (
    <>
      <div className='fixed z-1 top-10 left-1/2 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 pointer-events-none touch-events-none'>
        <motion.div
          key={progress}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0.9, 0] }}
          transition={{ duration: 5, delay: 0.7 }}
        >
          <div
            className={`${offsets[progress].x} ${offsets[progress].y} px-1 md:px-3 font-light bg-slate-100 overflow-hidden`}
          >
            <motion.h1
              initial={{ x: -700 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className='text-md md:text-5xl text-start pr-12'
            >
              {titles[progress].title}
            </motion.h1>
            <motion.h3
              initial={{ x: 700 }}
              animate={{ x: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className='text-xs md:text-xl text-end'
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
