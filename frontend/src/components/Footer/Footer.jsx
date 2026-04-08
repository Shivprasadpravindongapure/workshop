import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto py-6">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} FOSSEE. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Promoting open-source software in education.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
