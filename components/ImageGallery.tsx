
import React from 'react';

interface ImageGalleryProps {
    title: string;
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ title, images }) => {
    return (
        <section className="mx-auto mt-8 p-4 w-full md:w-3/4 lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-200">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-2 shadow-lg">
                        <img 
                            src={src} 
                            alt={`${title} image ${index + 1}`} 
                            className="w-full h-auto rounded-md" 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImageGallery;
