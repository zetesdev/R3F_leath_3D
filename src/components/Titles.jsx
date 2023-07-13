function Titles({ progress }) {
  const titles = [
    { title: 'Title01', subtitle: 'Subtitle01' },
    { title: 'Title02', subtitle: 'Subtitle02' },
    { title: 'Title03', subtitle: 'Subtitle03' },
  ];

  return (
    <>
      <div className='fixed z-30 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <section className='translate-x-64 px-3 font-light bg-slate-100'>
          <h1 className='text-5xl'>{titles[progress].title}</h1>
          <h3 className='text-xl text-end'>{titles[progress].subtitle}</h3>
        </section>
      </div>
    </>
  );
}

export default Titles;
