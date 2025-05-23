const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          
          <a href="https://github.com/Anand-DN" alt="github">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" height="100%" width="100%" />
          </a>
          
        </div>

        <div className="social-icon">
          <a href="https://linkedin.com/in/anand-dn-42954a2b3/" alt="twitter">  <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2"   /> </a>
        
        </div>
        <div className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div>
      </div>

      <p className="text-white-500">© 2025 Anand DN. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
