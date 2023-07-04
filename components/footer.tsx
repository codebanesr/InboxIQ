import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center md:flex-row md:justify-between">
        <p className="text-sm mb-4 md:mb-0">© 2023 InboxIQ. All rights reserved.</p>
        <div className="flex items-center">
          <p className="text-sm mr-2">Liked this chatbot?</p>
          <a
            href="https://github.com/shanurrahman/InboxIQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 flex items-center"
          >
            <svg
              className="h-5 w-5 fill-current mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .7 2.7.4 3.4-.3.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.2-5.2-5.5 0-1.2.4-2.3 1.2-3.2 0 0 1-.3 3.4 1.2a11.3 11.3 0 0 1 3-.4 11.3 11.3 0 0 1 3 .4c2.4-1.5 3.4-1.2 3.4-1.2.8 1 .9 2 .9 3.2 0 4.4-2.7 5.2-5.2 5.5.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 12 0" />
            </svg>
            <span>Give it a star on GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
