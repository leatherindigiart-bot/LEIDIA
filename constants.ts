
import { View } from './types';

interface GalleryData {
    title: string;
    images: string[];
}

export const GALLERY_DATA: Record<Exclude<View, View.News | View.About>, GalleryData> = {
    [View.Leggings]: {
        title: 'Leather Leggings & Pants Gallery',
        images: [
            'https://picsum.photos/seed/leggings1/400/600',
            'https://picsum.photos/seed/leggings2/400/600',
            'https://picsum.photos/seed/leggings3/400/600',
            'https://picsum.photos/seed/leggings4/400/600',
            'https://picsum.photos/seed/leggings5/400/600',
            'https://picsum.photos/seed/leggings6/400/600',
        ]
    },
    [View.Skirt]: {
        title: 'Leather Skirt Gallery',
        images: [
            'https://picsum.photos/seed/skirt1/400/600',
            'https://picsum.photos/seed/skirt2/400/600',
            'https://picsum.photos/seed/skirt3/400/600',
            'https://picsum.photos/seed/skirt4/400/600',
            'https://picsum.photos/seed/skirt5/400/600',
            'https://picsum.photos/seed/skirt6/400/600',
        ]
    },
    [View.Boots]: {
        title: 'Leather Boots Gallery',
        images: [
            'https://picsum.photos/seed/boots1/400/600',
            'https://picsum.photos/seed/boots2/400/600',
            'https://picsum.photos/seed/boots3/400/600',
            'https://picsum.photos/seed/boots4/400/600',
            'https://picsum.photos/seed/boots5/400/600',
            'https://picsum.photos/seed/boots6/400/600',
        ]
    },
    [View.Catsuit]: {
        title: 'Catsuit Gallery',
        images: [
            'https://picsum.photos/seed/catsuit1/400/600',
            'https://picsum.photos/seed/catsuit2/400/600',
            'https://picsum.photos/seed/catsuit3/400/600',
            'https://picsum.photos/seed/catsuit4/400/600',
            'https://picsum.photos/seed/catsuit5/400/600',
            'https://picsum.photos/seed/catsuit6/400/600',
        ]
    }
};
