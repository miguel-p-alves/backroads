import tour1 from './images/tour-1.jpg'
import tour2 from './images/tour-2.jpg'
import tour3 from './images/tour-3.jpg'
import tour4 from './images/tour-4.jpg'
import tour5 from './images/tour-5.jpg'
import tour6 from './images/tour-6.jpg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
  { id: 3, href: 'https://www.youtube.com', icon: 'fab fa-youtube' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'may 24th, 2025',
    title: 'italian culinary experience',
    info: 'Immerse yourself in the rich culinary traditions of Italy. Taste regional wines, learn to prepare authentic dishes, and enjoy al fresco dining in stunning countryside settings.',
    location: 'italy',
    duration: 10,
    cost: 2400,
  },
  {
    id: 2,
    image: tour2,
    date: 'december 15th, 2025',
    title: 'antarctic expedition cruise',
    info: 'Embark on a unique journey through Antarctica. Navigate the icy waters, observe penguins and whales, and join guided excursions with scientists to learn about polar ecology.',
    location: 'antarctica',
    duration: 14,
    cost: 5500,
  },
  {
    id: 3,
    image: tour3,
    date: 'march 10th, 2025',
    title: 'amazon rainforest adventure',
    info: 'An exciting expedition in the heart of the Amazon Rainforest. Discover rich biodiversity, navigate winding rivers, and connect with local communities.',
    location: 'brazil',
    duration: 9,
    cost: 2600,
  },
  {
    id: 4,
    image: tour4,
    date: 'june 12th, 2025',
    title: 'kenyan safari adventure',
    info: `Embark on a thrilling safari adventure through Kenya's most famous national parks. Witness the "Big Five" in their natural habitat, enjoy guided game drives at dawn and dusk.`,
    location: 'kenya',
    duration: 12,
    cost: 3700,
  },
  {
    id: 4,
    image: tour5,
    date: 'january 22th, 2025',
    title: 'the temples of cambodia',
    info: `A spiritual journey through Cambodia's most iconic temples. Visit the legendary Angkor Wat, explore lesser-known ancient sites, and immerse yourself in the country's rich history.`,
    location: 'cambodia',
    duration: 9,
    cost: 2400,
  },
  {
    id: 4,
    image: tour6,
    date: 'september 8th, 2025',
    title: 'australian outback expedition',
    info: `Discover the vast and stunning Australian Outback. Experience the rich Aboriginal culture and enjoy nights under the stars.`,
    location: 'australia',
    duration: 11,
    cost: 3500,
  },
]
