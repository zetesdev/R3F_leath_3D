function Titles({ progress }) {
  const titles = [
    { title: 'TITLE_01', subtitle: 'subtitle01' },
    { title: 'TITLE_02', subtitle: 'subtitle02' },
    { title: 'TITLE_03', subtitle: 'subtitle03' },
  ];

  const offsets = [
    { x: 'translate-x-64', y: 'translate-y-64' },
    { x: 'translate-x-32', y: 'translate-y-32' },
    { x: '-translate-x-32', y: '-translate-y-32' },
  ];

  return (
    <>
      <div className='fixed z-30 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <section
          className={`${offsets[progress].x} ${offsets[progress].y} px-3 font-light bg-slate-100`}
        >
          <h1 className='text-5xl'>{titles[progress].title}</h1>
          <h3 className='text-xl text-end'>{titles[progress].subtitle}</h3>
        </section>
      </div>
    </>
  );
}

export default Titles;
