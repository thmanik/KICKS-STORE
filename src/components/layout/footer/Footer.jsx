import Newsletter from './Newsletter';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
 
    <footer className="w-full bg-[#E7E7E3] py-2 md:py-10 px-4 relative z-0">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        
        <div className="md:-mt-24 -mt-16"> 
          <Newsletter /> 
        </div>
        <FooterBottom />
        <div className='mx-auto'>
          <p className='text-sm py-2 md:pt-5 md:pb-0'>© All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;