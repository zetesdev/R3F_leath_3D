function Button({ color }) {
  return (
    <button
      className={`${color} border-white border-2 w-10 h-10 mx-0.5 rounded-xl hover:scale-110 transition-transform pointer-events-auto touch-events-auto`}
    ></button>
  );
}

function ColorChanger({ colors, progress }) {
  //WORKAROUND FOR PROBLEM WITH TAILWIND DYNAMIC COLOR CLASSES
  colors = [
    'bg-lime-700',
    'bg-sky-700',
    'bg-red-600',
    'bg-zinc-800',
    'bg-fuchsia-900',
  ];

  return (
    <div className='flex flex-col items-center fixed z-20 bottom-5 left-1/2 -translate-x-1/2 pointer-events-none touch-events-none'>
      <h3 className='font-light text-sm text-white'>scroll to progress</h3>
      <h2 className='text-4xl text-white mb-3'>{progress} / 5</h2>
      <div className='flex'>
        {colors.map((color, index) => (
          <Button key={index} color={color} />
        ))}
      </div>
    </div>
  );
}

export default ColorChanger;
