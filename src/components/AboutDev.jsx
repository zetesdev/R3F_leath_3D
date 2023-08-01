import facePhoto from '../assets/images/cropped_02_web_01.png';
import { FaBehance, FaLinkedin, FaXmark, FaRegUser } from 'react-icons/fa6';

function About({ showAbout, setShowAbout }) {
  const BEHANCE_URL = 'https://www.behance.net/zbigniewsulkowski';
  const LINKEDIN_URL = 'https://linkedin.com/in/zbigniew-sułkowski-293070191';

  return (
    <>
      <button
        onClick={setShowAbout}
        className='z-40 fixed top-0 right-0 flex text-2xl px-2 items-center justify-between text-white border-white border-2  w-32 h-auto lg:top-12 lg:right-12 lg:text-3xl lg:w-40  hover:bg-gray-500 transition-colors lg:overflow-hidden'
      >
        <p className='font-light pb-0.5 lg:pb-1'>
          {showAbout ? 'CLOSE' : 'ABOUT'}
        </p>

        {showAbout ? (
          <FaXmark />
        ) : (
          <FaRegUser className='text-xl lg:text-2xl' />
        )}
      </button>

      <div
        className={`z-30 fixed top-0 left-0 flex overflow-hidden items-center justify-center min-h-screen bg-gray-600 bg-opacity-50 ${
          showAbout ? 'w-full' : 'w-0'
        }`}
      >
        <div className='flex flex-col items-center p-6 m-3 space-y-10  bg-white shadow-2xl lg:flex-row lg:space-y-0 lg:space-x-10 lg:m-0 lg:p-16'>
          <div className='flex flex-col mb-4 space-y-3 text-center lg:text-md lg:text-left'>
            <p>&#x1F44B; hello, i am Zbigniew</p>
            <h1 className='max-w-sm text-2xl font-medium pb-5 lg:text-3xl'>
              I work as <span className='text-red-500'> frontend </span> dev and{' '}
              <span className='text-red-500 '>3D </span>technical generalist.
            </h1>
            <p className='text-sm max-w-sm font-light lg:text-m'>
              This site is my R&D project, where i tried to explore connection
              between modern web development and 3D world.
            </p>

            <p className='text-sm max-w-sm font-light'>
              You can see more here:
            </p>
            {/* LINKS CONTAINER */}
            <div className='flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row'>
              <a
                href={BEHANCE_URL}
                className='flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 shadow-sm  hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'
              >
                <FaBehance className='text-xl' />
                <span>Behance</span>
              </a>

              <a
                href={LINKEDIN_URL}
                className='flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300  shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'
              >
                <FaLinkedin className='text-xl' />
                <span>Linkedin</span>
              </a>
            </div>
          </div>

          <div className='w-32 lg:w-60'>
            <img src={facePhoto} alt='' className='rounded-full' />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
