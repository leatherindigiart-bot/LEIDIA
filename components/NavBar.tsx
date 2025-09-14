import React from 'react';
import { View } from '../types';

interface NavBarProps {
    currentView: View;
    onViewChange: (view: View) => void;
}

const NavButton: React.FC<{
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}> = ({ isActive, onClick, children, className }) => {
    const activeClasses = 'text-white underline';
    const inactiveClasses = 'text-gray-300 hover:underline';
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer focus:outline-none font-bold transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses} ${className}`}
        >
            {children}
        </button>
    );
};

const NavBar: React.FC<NavBarProps> = ({ currentView, onViewChange }) => {
    const imageViews = [View.Leggings, View.Skirt, View.Boots, View.Catsuit];
    const isImagesActive = imageViews.includes(currentView);

    return (
        <nav className="bg-gray-700 w-full lg:w-[30cm] h-auto lg:h-[2cm] mx-auto my-8 rounded-md flex items-center justify-center p-4">
            <div className="flex items-center space-x-6">
                <NavButton
                    isActive={currentView === View.News}
                    onClick={() => onViewChange(View.News)}
                >
                    News
                </NavButton>

                <div className="relative group">
                    <NavButton
                        isActive={isImagesActive}
                        onClick={() => onViewChange(View.Leggings)} // Default to first gallery on click
                    >
                        Images
                    </NavButton>
                    <div className="absolute hidden group-hover:block bg-gray-800 rounded-md p-2 mt-2 w-48 shadow-lg z-10">
                        <button onClick={() => onViewChange(View.Leggings)} className={`block w-full text-left py-2 px-4 rounded-md ${currentView === View.Leggings ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>Leather Leggings</button>
                        <button onClick={() => onViewChange(View.Skirt)} className={`block w-full text-left py-2 px-4 rounded-md ${currentView === View.Skirt ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>Leather Skirt</button>
                        <button onClick={() => onViewChange(View.Boots)} className={`block w-full text-left py-2 px-4 rounded-md ${currentView === View.Boots ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>Leather Boots</button>
                        <button onClick={() => onViewChange(View.Catsuit)} className={`block w-full text-left py-2 px-4 rounded-md ${currentView === View.Catsuit ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>Catsuit</button>
                    </div>
                </div>

                <NavButton
                    isActive={currentView === View.About}
                    onClick={() => onViewChange(View.About)}
                >
                    What's LEIDIA
                </NavButton>
            </div>
        </nav>
    );
};

export default NavBar;
