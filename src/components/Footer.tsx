import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-white py-12 mt-16 footer-extra">
      <div className="container mx-auto px-4">
        <hr className="border-gray-700 my-8" />
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
