const Newsletter = () => {
  return (
    <div className="w-full bg-kicks-blue rounded-[48px] px-6 pt-14 pb-28 md:pt-4 md:pb-16  md:px-16 flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center relative z-10 overflow-hidden min-h-[400px] md:h-[480px]  ">
      
      <div className="max-w-[700px] space-y-6 z-20">
        <h2 className="text-white font-bold text-3xl md:text-4xl xl:text-[52px] uppercase leading-[1.1]">
          Join our KicksPlus <br className="hidden md:block" /> Club & get 15% off
        </h2>
        
        <p className="text-white/90 font-medium text-base md:text-xl">
          Sign up for free! Join the community.
        </p>
        
        <div className="flex flex-row  gap-2 pt-2  w-full">
          <input 
            type="email" 
            placeholder="Email address" 
            className="bg-transparent border border-white/40 rounded-xl px-5 py-3 text-white placeholder:text-white/40 outline-none w-[70%] md:w-[320px] focus:border-white transition-all"
          />
          <button className="bg-kicks-dark cursor-pointer text-white w-[30%] md:w-auto px-8 py-3 rounded-xl font-bold uppercase text-sm">
            Submit
          </button>
        </div>
      </div>

      <div className="mt-8 md:mt-0 md:absolute md:right-32"> 
        <div className="relative scale-90 md:scale-100 origin-left md:origin-center">
          <img 
            src="/LogoWhite.svg" 
            alt="Kicks" 
            className="w-48 md:w-56 xl:w-72 h-auto" 
          />
          <span className="absolute -top-1 -right-4 bg-kicks-yellow text-kicks-dark w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-[11px] font-black border-2 border-kicks-blue">
            +
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default Newsletter;