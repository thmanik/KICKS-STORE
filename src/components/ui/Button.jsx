const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-xl font-bold uppercase transition-all active:scale-95 text-sm tracking-tight inline-block text-center";
  
  const variants = {
    primary: "bg-kicks-blue text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20",
    dark: "bg-kicks-dark text-white hover:bg-zinc-800",
    outline: "border-2 border-kicks-dark text-kicks-dark hover:bg-kicks-dark hover:text-white",
    yellow: "bg-kicks-yellow text-kicks-dark hover:bg-yellow-500"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;