import React, { useState } from 'react';
import { View } from './types';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NewsContent from './components/NewsContent';
import WhatsLeidiaContent from './components/WhatsLeidiaContent';
import ImageGallery from './components/ImageGallery';
import { GALLERY_DATA } from './constants';

const componentMap: Record<View, React.FC<any>> = {
  [View.News]: NewsContent,
  [View.About]: WhatsLeidiaContent,
  [View.Leggings]: ImageGallery,
  [View.Skirt]: ImageGallery,
  [View.Boots]: ImageGallery,
  [View.Catsuit]: ImageGallery,
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.News);

  const ContentComponent = componentMap[currentView] || NewsContent;
  
  const isGalleryView = [View.Leggings, View.Skirt, View.Boots, View.Catsuit].includes(currentView);
  const galleryData = isGalleryView ? GALLERY_DATA[currentView] : undefined;

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="container mx-auto p-4">
        <Header />
        <NavBar currentView={currentView} onViewChange={setCurrentView} />
        <main>
          {/* FIX: Conditionally render components based on whether they are gallery or content pages.
              This ensures that props like 'title' and 'images' are only passed to components
              that expect them (like ImageGallery), resolving the type error. */}
          {galleryData ? (
            <ImageGallery title={galleryData.title} images={galleryData.images} />
          ) : (
            <ContentComponent />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;