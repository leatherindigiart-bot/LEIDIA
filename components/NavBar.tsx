import React from 'react';
import { View } from '../types';

interface NavBarProps {
    currentView: View;
    onViewChange: (view: View) => void;
}

const NavButton: React.FC<{
    view: View;
    currentView: View;
    onClick: (view: View) => void;
    children: React.ReactNode;
}> = ({ view, currentView, onClick, children }) => {
    const isActive = view === currentView;
    const activeClasses = 'bg-gray-700 text-white';
    const inactiveClasses = 'text-gray-300 hover:bg-gray-700 hover:text-white';
    return (
        <button
            onClick={() => onClick(view)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}
        >
            {children}
        </button>
    );
};


const NavBar: React.FC<NavBarProps> = ({ currentView, onViewChange }) => {
    return (
        <nav className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center space-x-4">
                    <NavButton view={View.News} currentView={currentView} onClick={onViewChange}>News</NavButton>
                    <NavButton view={View.Leggings} currentView={currentView} onClick={onViewChange}>Leggings</NavButton>
                    <NavButton view={View.Skirt} currentView={currentView} onClick={onViewChange}>Skirt</NavButton>
                    <NavButton view={View.Boots} currentView={currentView} onClick={onViewChange}>Boots</NavButton>
                    <NavButton view={View.Catsuit} currentView={currentView} onClick={onViewChange}>Catsuit</NavButton>
                    <NavButton view={View.About} currentView={currentView} onClick={onViewChange}>What's LEIDIA</NavButton>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
