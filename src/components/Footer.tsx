
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">SM</div>
            <p className="text-gray-400 text-sm">Crafting digital experiences</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Sk Mostaque. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Designed & Developed with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
