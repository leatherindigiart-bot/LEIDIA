import React, { useState } from 'react';
import { View } from './types';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NewsContent from './components/NewsContent';
import WhatsLeidiaContent from './components/WhatsLeidiaContent';
import ImageGallery from './components/ImageGallery';
import { GALLERY_DATA } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.News);

  const renderContent = () => {
    switch (currentView) {
      case View.News:
        return <NewsContent />;
      case View.About:
        return <WhatsLeidiaContent />;
      case View.Leggings:
      case View.Skirt:
      case View.Boots:
      case View.Catsuit:
        const galleryData = GALLERY_DATA[currentView];
        return <ImageGallery title={galleryData.title} images={galleryData.images} />;
      default:
        return <NewsContent />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="container mx-auto p-4">
        <Header />
        <NavBar currentView={currentView} onViewChange={setCurrentView} />
        <main>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
