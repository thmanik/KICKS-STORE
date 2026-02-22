import Newsletter from './Newsletter';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#E7E7E3] py-2 md:py-10 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <Newsletter /> 
        <FooterBottom />
        <div className='mx-auto'><p className='text-sm py-2 md:py-5'>© All rights reserved</p></div>
      </div>
    </footer>
  );
};

export default Footer;