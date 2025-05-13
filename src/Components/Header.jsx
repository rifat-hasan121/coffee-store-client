import React from 'react';

const Header = () => {
    return (
        <div className="bg-[url(src/assets/images/more/15.jpg)] py-6 text-center justify-center flex gap-4">
            <img className='w-[75px] h-[90px]' src="src/assets/images/more/logo1.png" alt="coffee image" />
        <h3 className='text-6xl font-bold text-white'>Espresso Emporium</h3>
      </div>
    );
};

export default Header;