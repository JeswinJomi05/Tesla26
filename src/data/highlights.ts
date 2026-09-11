import arcadiaImg from '../assets/arcadia.jpg';
import autoExpoImg from '../assets/auto-expo.jpg';
import proshowImg from '../assets/proshow.jpg';
import teslaCoilImg from '../assets/tesla-coil.jpg';

export interface HighlightItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  video?: string;
  desc: string;
  category: string;
}

export const highlightsData: HighlightItem[] = [
  {
    id: 'tesla25',
    title: 'TESLA 25',
    subtitle: 'THE AFTER MOVIE',
    image: teslaCoilImg,
    video: '/videos/tesla25.mp4',
    desc: 'Relive the electrifying moments of TESLA 2025. The ultimate tech and cultural extravaganza.',
    category: 'AFTER MOVIE'
  },
  {
    id: 'proshow',
    title: 'TESLA 24',
    subtitle: 'LIVE ARTIST NIGHT',
    image: proshowImg,
    video: '/videos/tesla24.mp4',
    desc: 'Electrifying musical night featuring celebrity artists, violinist virtuosos, and live bands.',
    category: 'CULTURAL'
  },
  {
    id: 'arcadia',
    title: 'TESLA 22',
    subtitle: 'GAMING & LASER FIREWORKS FEST',
    image: arcadiaImg,
    video: '/videos/tesla22.mp4',
    desc: 'High-voltage gaming arena, VR simulations, laser fireworks show, and night entertainment.',
    category: 'ENTERTAINMENT'
  },
  {
    id: 'auto-expo',
    title: 'TESLA 20',
    subtitle: 'SUPERBIKES & EV SHOWCASE',
    image: autoExpoImg,
    video: '/videos/tesla20.mp4',
    desc: 'Exotic superbikes, electric vehicles, autonomous robotics, and hyper-car mechanical displays.',
    category: 'EXHIBITION'
  }
];
