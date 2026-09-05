export interface WorkshopItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  badge?: string;
  iconName: 'Cpu' | 'Zap' | 'Radio';
  date: string;
  instructor: string;
  seatsLeft?: number;
  image: string;
  registrationLink?: string;
}

export const workshopsData: WorkshopItem[] = [
  {
    id: 'ws-dance',
    title: 'DANCE WORKSHOP',
    subtitle: 'FEEL THE RHYTHM',
    desc: 'Join us for an electrifying dance workshop. Learn new moves, groove to the beat, and experience the ultimate energy.',
    badge: 'NEW',
    iconName: 'Zap',
    date: 'TBA',
    instructor: 'TBA',
    image: '/images/Workshop/Dance_wsp.webp',
    registrationLink: 'https://forms.gle/GJkSybUHGkscjTFy5'
  },
  {
    id: 'ws-photoshop',
    title: 'PHOTOSHOP WORKSHOP',
    subtitle: 'MASTER THE LENS',
    desc: 'Dive into the world of digital design and photo editing. Learn professional techniques in Adobe Photoshop from scratch.',
    badge: 'NEW',
    iconName: 'Cpu',
    date: 'TBA',
    instructor: 'TBA',
    image: '/images/Workshop/Photoshope.jpeg',
    registrationLink: 'https://forms.gle/3ZqcPecALY5Lkj2A6'
  }
];
