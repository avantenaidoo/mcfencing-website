import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm py-4 border-t border-gray-700 flex justify-between items-center px-6">
      <div>
        &copy; {new Date().getFullYear()} Designed and developed by{' '}
        <a
          href="https://www.barrydeanitsolutions.co.za/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-200"
        >
          Barry-Dean IT Solutions
        </a>
      </div>
      <div className="italic">V1.0.3</div>
    </footer>
  );
}