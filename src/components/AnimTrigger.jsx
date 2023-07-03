function AnimTrigger({ changeProgress }) {
  return (
    <button
      onClick={changeProgress}
      className='z-20 fixed bottom-20 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-indigo-600 w-auto h-11 rounded-md'
    >
      Trigger
    </button>
  );
}

export default AnimTrigger;
