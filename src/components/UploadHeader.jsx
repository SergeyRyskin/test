import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Diktatorial Suite</h1> //Will be changed to Diktatorial_Logo
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">Prompt to Mastering</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    </header> /*Will be Changed all design in here*/
  );
};


export default Header;