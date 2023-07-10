import headphoneImage from '../assets/images/headphone.png';
import heart from '../assets/images/heart.png';
import weight from '../assets/images/weight.png';
import { FaBehance } from 'react-icons/fa6';

//https://cdn.cmsfly.com/635bcad9b8a74e0091632998/muazzim-portfolio-1sl3Ip.webp  //reference link

function About({ showAbout, setShowAbout }) {
  const debug = () => {
    console.log('CLICKED');
  };

  return (
    <>
      <button
        onClick={setShowAbout}
        className='z-30 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11'
      >
        <div
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
        />
      </button>

      {/* <!-- Global  */}
      <div
        className={`z-20 fixed top-0 left-0 flex overflow-hidden items-center justify-center min-h-screen bg-gray-600 bg-opacity-50 ${
          showAbout ? 'w-full' : 'w-0'
        }`}
      >
        {/* <!-- Card  --> */}
        <div className='flex flex-col p-6 m-3 space-y-10 bg-white  shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16'>
          {/* <!-- Image Div --> */}

          {/* <!-- Content --> */}
          <div className='flex flex-col space-y-6'>
            {/* <!-- Label & Title Container --> */}
            <div className='flex flex-col mb-4 space-y-3 text-center md:text-left'>
              {/* <!-- Title --> */}
              <p>&#x1F44B; hello, i am Zbigniew</p>
              <h1 className='max-w-sm text-3xl font-medium pb-5'>
                I work as <span className='text-red-500'> frontend </span> dev
                and <span className='text-red-500'>3D </span>technical
                generalist.
              </h1>
              <p className='text-sm max-w-sm font-light'>
                This site is my R&D project, where i tried to explore connection
                between modern web development stack and 3D art world.
              </p>

              <p>You can see more here:</p>
              {/* <!-- Bottom Buttons Container --> */}
              <div className='flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:f'>
                <button className='flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300  shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                  <FaBehance />
                  <span>Behance</span>
                </button>

                <button className='flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300  shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                  <img src={heart} alt='' className='w-8' />

                  <span>Linkedin</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              src={headphoneImage}
              alt=''
              className='mx-auto duration-200 w-60 hover:scale-105'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
