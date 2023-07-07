//https://cdn.cmsfly.com/635bcad9b8a74e0091632998/muazzim-portfolio-1sl3Ip.webp  //reference link

function About({ showAbout, setShowAbout }) {
  const debug = () => {
    console.log('CLICKED');
  };

  return (
    <>
      <button
        onClick={setShowAbout}
        className='z-30 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md'
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

      <div
        className={`fixed z-20 bg-gray-700 top-0 overflow-hidden ${
          showAbout ? 'w-full' : 'w-0'
        }`}
      >
        <div>ABOUT</div>
      </div>
    </>
  );
}

export default About;
