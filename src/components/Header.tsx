import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <button className="mr-4 p-1 rounded-full hover:bg-gray-100">
          <ChevronLeft size={20} className="text-gray-500" />
        </button>
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      </div>
      <p className="text-sm text-gray-600 max-w-3xl">
        {description}
      </p>
    </div>
  );
};

export default Header;