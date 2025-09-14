
import React from 'react';

const NewsCard: React.FC<{ imgSrc: string; title: string; children: React.ReactNode }> = ({ imgSrc, title, children }) => (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg flex flex-col">
        <img src={imgSrc} alt="News Image" className="w-full h-48 object-cover rounded-md mb-4"/>
        <h3 className="text-md font-semibold mb-2 text-gray-200">{title}</h3>
        <p className="text-gray-400 text-xs flex-grow">{children}</p>
        <a href="#" className="text-indigo-400 mt-2 inline-block hover:underline text-sm self-start">Read more</a>
    </div>
);


const NewsContent: React.FC = () => {
    return (
        <section className="mx-auto mt-8 p-4 w-full md:w-3/4 lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-200">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <NewsCard imgSrc="https://picsum.photos/seed/news1/400/300" title="New Collection Launch!">
                    We are thrilled to announce our latest collection of digital art. This series explores new techniques and textures...
                </NewsCard>
                <NewsCard imgSrc="https://picsum.photos/seed/news2/400/300" title="Artist Spotlight: J. Doe">
                    This month, we feature an exclusive interview with digital artist J. Doe, who discusses their inspiration and creative process.
                </NewsCard>
                <NewsCard imgSrc="https://picsum.photos/seed/news3/400/300" title="Behind the Scenes">
                    A sneak peek into our digital studio and the technology we use to bring the texture of leather to life in our art.
                </NewsCard>
            </div>
        </section>
    );
};

export default NewsContent;
