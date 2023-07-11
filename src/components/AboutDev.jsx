import headphoneImage from '../assets/images/headphone.png';
import heart from '../assets/images/heart.png';
import weight from '../assets/images/weight.png';
import { FaBehance, FaLinkedin, FaBars, FaX } from 'react-icons/fa6';

//https://cdn.cmsfly.com/635bcad9b8a74e0091632998/muazzim-portfolio-1sl3Ip.webp  //reference link

function About({ showAbout, setShowAbout }) {
  const debug = () => {
    console.log('CLICKED');
  };

  const BEHANCE_URL = 'https://www.behance.net';
  const LINKEDIN_URL = 'https://www.linkedin.com/';

  return (
    <>
      <button
        onClick={setShowAbout}
        className='z-30 flex text-xl items-center justify-between px-3 py-1 text-white fixed top-0 right-0 bg-indigo-600 w-28 lg:top-12 lg:right-12'
      >
        <div>{showAbout ? 'CLOSE' : 'ABOUT'}</div>
        <FaBars></FaBars>
        <FaX></FaX>
        {/* <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            showAbout ? 'rotate-45  translate-y-0.5' : ''
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            showAbout ? 'hidden' : ''
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            showAbout ? '-rotate-45' : ''
          }`}
        /> */}
      </button>

      {/* <!-- Global  */}
      <div
        className={`z-20 fixed top-0 left-0 flex overflow-hidden items-center justify-center min-h-screen bg-gray-600 bg-opacity-50 ${
          showAbout ? 'w-full' : 'w-0'
        }`}
      >
        <div className='flex flex-col p-6 m-3 space-y-10 bg-white shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16'>
          {/* <!-- Label & Title Container --> */}
          <div className='flex flex-col mb-4 space-y-3 text-center md:text-left'>
            {/* <!-- Title --> */}
            <p>&#x1F44B; hello, i am Zbigniew</p>
            <h1 className='max-w-sm text-3xl font-medium pb-5'>
              I work as <span className='text-red-500'> frontend </span> dev and{' '}
              <span className='text-red-500'>3D </span>technical generalist.
            </h1>
            <p className='text-sm max-w-sm font-light'>
              This site is my R&D project, where i tried to explore connection
              between modern web development stack and 3D art world.
            </p>

            <p className='text-sm max-w-sm font-light'>
              You can see more here:
            </p>
            {/* <!-- Bottom Buttons Container --> */}
            <div className='flex flex-col  space-y-4 md:space-y-0 md:space-x-4 md:flex-row'>
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

          <div>
            <img src={headphoneImage} alt='' className='mx-auto  w-60 ' />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
