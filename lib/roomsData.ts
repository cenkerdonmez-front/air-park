export interface Room {
  slug: string;
  key: string;
  images: string[];
  size: number;
  capacity: {
    adults: number;
    children: number;
  };
  beds: string;
  features: string[];
}

export const rooms: Room[] = [
  {
    slug: 'deluxe-twin-garden',
    key: 'deluxeTwinGarden',
    images: ['/rooms/1/1.jpg', '/rooms/1/2.jpg', '/rooms/1/3.jpg', '/rooms/1/4.jpg', '/rooms/1/5.jpg'],
    size: 30,
    capacity: {
      adults: 2,
      children: 1,
    },
    beds: '1 Double Bed',
    features: ['wifi', 'minibar', 'safe', 'airConditioning', 'tv', 'hairdryer', 'bathrobe', 'slippers', 'breakfast', 'parking'],
  },
  {
    slug: 'deluxe-french-garden',
    key: 'deluxeFrenchGarden',
    images: ['/rooms/2/1.jpg', '/rooms/2/2.jpg', '/rooms/2/3.jpg', '/rooms/2/4.jpg'],
    size: 30,
    capacity: {
      adults: 2,
      children: 0,
    },
    beds: '1 Double Bed',
    features: ['wifi', 'minibar', 'safe', 'airConditioning', 'tv', 'hairdryer', 'bathrobe', 'slippers', 'breakfast', 'parking'],
  },
  {
    slug: 'deluxe-french-city',
    key: 'deluxeFrenchCity',
    images: ['/rooms/3/1.jpg', '/rooms/3/2.jpg', '/rooms/3/3.jpg', '/rooms/3/4.jpg', '/rooms/3/5.jpg'],
    size: 35,
    capacity: {
      adults: 3,
      children: 0,
    },
    beds: '1 Double + 1 Single Bed',
    features: ['wifi', 'minibar', 'safe', 'airConditioning', 'tv', 'hairdryer', 'bathrobe', 'slippers', 'breakfast', 'parking'],
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find(room => room.slug === slug);
}
