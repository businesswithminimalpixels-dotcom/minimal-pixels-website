// Images are now served from the `public` folder.
// To add more, place your image file in the `public` directory
// Structure:
//   public/thumbnails/thumbnail1.jpg
//   public/posters/poster1.jpg
//   public/aboutus.png

export const WHATSAPP_NUMBER = "919666135995";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_LINK =
  "https://www.instagram.com/_urstrulybhargav_?igsh=bDlmMTlld2tsaDht";

export const PORTFOLIO_VERSION = "005"; // Incremented to force image refresh

export const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About Us", href: "#about-us" },
];

export const SERVICES = [
  // Graphic Design Services
  {
    icon: "youtube",
    title: "YouTube Thumbnails",
    description: "High-CTR thumbnails designed to stop the scroll.",
  },
  {
    icon: "poster",
    title: "Posters",
    description: "Eye-catching posters for events, movies, and promotions.",
  },
  {
    icon: "poster",
    title: "Flyers",
    description: "Professional flyers for digital and print marketing.",
  },
  {
    icon: "design",
    title: "Banners",
    description: "Website and social media banners that fit your brand.",
  },
  {
    icon: "social",
    title: "Social Media Posts",
    description: "Engaging graphics for Facebook, Twitter, and LinkedIn.",
  },
  {
    icon: "instagram",
    title: "Carousel Posts",
    description: "Seamless swipeable carousels for Instagram growth.",
  },
  {
    icon: "design",
    title: "Logo Design",
    description: "Memorable and timeless logos to define your identity.",
  },
  {
    icon: "design",
    title: "Branding Kits",
    description: "Complete visual identity systems for your business.",
  },
  {
    icon: "seo",
    title: "Ad Creatives",
    description: "High-conversion visuals for paid advertising campaigns.",
  },
  {
    icon: "poster",
    title: "Event Posters",
    description: "Vibrant visuals for festivals, concerts, and meetups.",
  },

  // Video Editing Services
  {
    icon: "video",
    title: "YouTube Video Editing",
    description: "Professional cuts, pacing, and storytelling for creators.",
  },
  {
    icon: "instagram",
    title: "Reels / Shorts Editing",
    description: "Fast-paced vertical content optimized for retention.",
  },
  {
    icon: "video",
    title: "Travel Edits",
    description: "Cinematic travel vlogs that capture the vibe.",
  },
  {
    icon: "video",
    title: "Tech Review Edits",
    description: "Clean, crisp editing for gadget and software reviews.",
  },
  {
    icon: "video",
    title: "Vlogs Editing",
    description: "Turning raw footage into engaging daily stories.",
  },
  {
    icon: "video",
    title: "Podcast Editing",
    description: "Audio enhancement and multi-cam video syncing.",
  },
  {
    icon: "video",
    title: "Corporate Video Editing",
    description: "Polished videos for internal use or B2B marketing.",
  },
  {
    icon: "seo",
    title: "Promo Ads",
    description: "Short, punchy video ads that drive sales.",
  },
  {
    icon: "design",
    title: "Text Animations",
    description: "Dynamic typography to keep viewers hooked.",
  },
  {
    icon: "design",
    title: "Motion Graphics",
    description: "Custom animations to elevate your production value.",
  },
  {
    icon: "youtube",
    title: "Intro/Outro Creation",
    description: "Branded openers and closers for your channel.",
  },
];

// Add your thumbnail details here
// IMPORTANT: Place files in `public/thumbnails/`
export const THUMBNAIL_ITEMS = [
  {
    id: 1,
    src: "/thumbnails/thumbnail1.jpg",
    alt: "Gaming Thumbnail 1",
    category: "Gaming",
  },
  {
    id: 2,
    src: "/thumbnails/thumbnail2.jpg",
    alt: "Tech Review Thumbnail",
    category: "Tech",
  },
  {
    id: 3,
    src: "/thumbnails/thumbnail3.jpg",
    alt: "Beauty Tutorial Thumbnail",
    category: "Beauty",
  },
  {
    id: 4,
    src: "/thumbnails/thumbnail4.jpg",
    alt: "Gaming Thumbnail 2",
    category: "Gaming",
  },
  {
    id: 5,
    src: "/thumbnails/thumbnail5.jpg",
    alt: "Unboxing Thumbnail",
    category: "Tech",
  },
  {
    id: 6,
    src: "/thumbnails/thumbnail6.jpg",
    alt: "Makeup Haul Thumbnail",
    category: "Beauty",
  },
  {
    id: 7,
    src: "/thumbnails/thumbnail7.jpg",
    alt: "Gameplay Thumbnail",
    category: "Gaming",
  },
  {
    id: 8,
    src: "/thumbnails/thumbnail8.jpg",
    alt: "Gadget Thumbnail",
    category: "Tech",
  },
  {
    id: 9,
    src: "/thumbnails/thumbnail9.jpg",
    alt: "Skincare Routine Thumbnail",
    category: "Beauty",
  },
  {
    id: 10,
    src: "/thumbnails/thumbnail10.jpg",
    alt: "Esports Highlight Thumbnail",
    category: "Gaming",
  },
  // Example for adding more:
  // { id: 11, src: '/thumbnails/thumbnail11.jpg', alt: 'Description', category: 'Gaming' },
];

// Add your poster details here
// IMPORTANT: Place files in `public/posters/`
export const POSTER_ITEMS = [
  {
    id: 1,
    src: "/posters/poster1.jpg",
    alt: "Music Festival Poster",
    category: "Music",
  },
  {
    id: 2,
    src: "/posters/poster2.jpg",
    alt: "Movie Premiere Poster",
    category: "Movies",
  },
  {
    id: 3,
    src: "/posters/poster3.jpg",
    alt: "Corporate Event Poster",
    category: "Events",
  },
  {
    id: 4,
    src: "/posters/poster4.jpg",
    alt: "Concert Announcement Poster",
    category: "Music",
  },
  {
    id: 5,
    src: "/posters/poster5.jpg",
    alt: "Indie Film Poster",
    category: "Movies",
  },
  {
    id: 6,
    src: "/posters/poster6.jpg",
    alt: "Community Meetup Poster",
    category: "Events",
  },
  {
    id: 7,
    src: "/posters/poster7.jpg",
    alt: "Album Release Poster",
    category: "Music",
  },
  {
    id: 8,
    src: "/posters/poster8.jpg",
    alt: "Film Festival Poster",
    category: "Movies",
  },
  {
    id: 9,
    src: "/posters/poster9.jpg",
    alt: "Charity Gala Poster",
    category: "Events",
  },
  {
    id: 10,
    src: "/posters/poster10.jpg",
    alt: "Live Session Poster",
    category: "Music",
  },
];

// Details for the image in the "About Us" section.
// Place your image file at `public/aboutus.png`
export const ABOUT_US_IMAGE = {
  src: "/aboutus.png",
  alt: "The Minimal Pixels design team collaborating on a project",
};

export const WHY_US_POINTS = [
  {
    title: "Data-Driven Design",
    description:
      "We analyze trends to create designs that not only look good but perform exceptionally well.",
  },
  {
    title: "Unlimited Revisions",
    description:
      "Your satisfaction is our priority. We offer unlimited revisions until you are 100% happy.",
  },
  {
    title: "Quick Turnaround",
    description:
      "Get your professional designs delivered fast, without compromising on quality.",
  },
  {
    title: "Affordable Pricing",
    description:
      "Top-tier design services that fit your budget, helping you grow without breaking the bank.",
  },
];

// Add your client logo details here.
// External URLs are fine, or place them in `public/clients/`
export const CLIENTS = [
  {
    src: "https://cdn.worldvectorlogo.com/logos/youtube-6.svg",
    alt: "YouTube",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/twitch-tv.svg", alt: "Twitch" },
  { src: "https://cdn.worldvectorlogo.com/logos/meta-icon.svg", alt: "Meta" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/google-icon.svg",
    alt: "Google",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
    alt: "Microsoft",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
    alt: "Netflix",
  },
];
