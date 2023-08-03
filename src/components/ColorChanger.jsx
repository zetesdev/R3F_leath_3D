import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';

function Button({ color, setCoverColor }) {
  let decodedColor = '';

  switch (color) {
    case 'bg-lime-700':
      decodedColor = '0x365314';
      break;
    case 'bg-sky-700':
      decodedColor = '0x0369a1';
      break;
    case 'bg-red-600':
      decodedColor = '0xb91c1c';
      break;
    case 'bg-zinc-800':
      decodedColor = '0x27272a';
      break;
    case 'bg-orange-500':
      decodedColor = '0xc2410c';

      break;
    default:
      break;
  }

  const handleClick = () => {
    setCoverColor(decodedColor);
  };

  return (
    <button
      onClick={handleClick}
      className={`${color} border-white border-2 w-8 h-8 mx-0.5 rounded-lg lg:rounded-xl lg:w-10 lg:h-10 hover:scale-110 transition-transform pointer-events-auto touch-events-auto`}
    ></button>
  );
}

function ColorChanger({
  progress,
  setCoverColor,
  incrementProgress,
  decrementProgress,
}) {
  const test = () => {
    console.log('test');
  };
  //WORKAROUND FOR PROBLEM WITH TAILWIND DYNAMIC COLOR CLASSES
  const colors = [
    'bg-lime-700',
    'bg-sky-700',
    'bg-red-600',
    'bg-zinc-800',
    'bg-orange-500',
  ];

  return (
    <div className='flex flex-col items-center fixed z-20 bottom-3 lg:bottom-5 left-1/2 -translate-x-1/2 pointer-events-none touch-events-none'>
      <h3 className='font-light text-xs lg:text-xl text-white '>
        click on arrows
      </h3>
      <div className='flex flex-row items-center text-3xl lg:text-6xl text-white mb-3 '>
        <button
          onClick={decrementProgress}
          className={`${
            progress === 0
              ? 'opacity-0 pointer-events-none touch-events-none'
              : 'pointer-events-auto touch-events-auto'
          }`}
        >
          <FaAngleLeft className='hover:scale-110 transition-transform' />
        </button>
        <h2 className='mx-4 pointer-events-none touch-events-none '>
          {progress} / 5
        </h2>
        <button
          onClick={incrementProgress}
          className={`${
            progress === 5
              ? 'opacity-0 pointer-events-none touch-events-none'
              : 'pointer-events-auto touch-events-auto'
          }`}
        >
          <FaAngleRight className='hover:scale-110 transition-transform' />
        </button>
      </div>

      <div className='flex'>
        {colors.map((color, index) => (
          <Button setCoverColor={setCoverColor} key={index} color={color} />
        ))}
      </div>
    </div>
  );
}

export default ColorChanger;
