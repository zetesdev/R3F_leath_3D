import { motion } from 'framer-motion';

function Titles({ progress, onMouseEnter }) {
  const titles = [
    { title: 'TEKST_JEDEN', subtitle: 'subtitle01' },
    { title: 'TITLE_02 dlugi dlugi', subtitle: 'subtitle02' },
    { title: 'TITLE_03', subtitle: 'subtitle03' },
  ];

  const offsets = [
    { x: 'translate-x-64', y: 'translate-y-64' },
    { x: 'translate-x-32', y: 'translate-y-32' },
    { x: '-translate-x-32', y: '-translate-y-32' },
  ];

  return (
    <>
      <div className='fixed z-1 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 '>
        <motion.div
          key={progress}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          onClick={onMouseEnter}
        >
          <div
            className={`${offsets[progress].x} ${offsets[progress].y} px-3 font-light bg-slate-100 overflow-hidden`}
          >
            <motion.h1
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className='text-8xl'
            >
              {titles[progress].title}
            </motion.h1>
            <motion.h3
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className='text-xl text-end'
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
