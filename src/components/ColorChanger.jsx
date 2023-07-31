function Button({ color, setCoverColor }) {
  let decodedColor = '';

  switch (color) {
    case 'bg-lime-700':
      decodedColor = '0x4d7c0f';
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
      decodedColor = '0xea580c';

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
      className={`${color} border-white border-2 w-10 h-10 mx-0.5 rounded-xl hover:scale-110 transition-transform pointer-events-auto touch-events-auto`}
    ></button>
  );
}

function ColorChanger({ progress, setCoverColor }) {
  //WORKAROUND FOR PROBLEM WITH TAILWIND DYNAMIC COLOR CLASSES
  const colors = [
    'bg-lime-700',
    'bg-sky-700',
    'bg-red-600',
    'bg-zinc-800',
    'bg-orange-500',
  ];

  return (
    <div className='flex flex-col items-center fixed z-20 bottom-5 left-1/2 -translate-x-1/2 pointer-events-none touch-events-none'>
      <h3 className='font-light text-sm text-white'>scroll to progress</h3>
      <h2 className='text-4xl text-white mb-3'>{progress} / 5</h2>
      <div className='flex'>
        {colors.map((color, index) => (
          <Button setCoverColor={setCoverColor} key={index} color={color} />
        ))}
      </div>
    </div>
  );
}

export default ColorChanger;
