const LoadingScreen = ({ message = "Loading the collection..." }) => { // Default message set kora holo
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-zinc-100 border-t-kicks-blue rounded-full animate-spin"></div>
        <span className="absolute font-black text-kicks-black text-xl italic">K</span>
      </div>
      <div className="mt-6 flex flex-col items-center">
        <h2 className="text-2xl font-black italic tracking-tighter text-kicks-black animate-pulse uppercase">
          DO IT <span className="text-kicks-blue">RIGHT</span>
        </h2>
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mt-2">
          {message}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;