
import React from 'react';
import { BRAND_NAME } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="py-6 bg-white border-b border-nude">
      <div className="container mx-auto px-6 text-center">
        <span className="text-xl font-bold tracking-tight text-marrom uppercase">
          {BRAND_NAME.split(' ')[0]} <span className="text-rosé">{BRAND_NAME.split(' ')[1]}</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
