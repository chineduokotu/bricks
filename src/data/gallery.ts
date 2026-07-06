export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  mediaType: 'image' | 'video';
  url: string;
  description: string;
}

const base = '/images';
const bedBase = '/bed-images';

// Real video items
const videos: GalleryItem[] = [
  {
    id: 'gal-vid-1',
    title: 'Signature Dining Showcase',
    category: 'Dining',
    mediaType: 'video',
    url: `${base}/WhatsApp Video 2026-06-30 at 23.03.23.mp4`,
    description: 'A cinematic look at our sculptural dining collections and sintered stone finishes.',
  },
  {
    id: 'gal-vid-2',
    title: 'Luxury Living Room Moments',
    category: 'Living Room',
    mediaType: 'video',
    url: `${base}/WhatsApp Video 2026-06-30 at 23.03.26.mp4`,
    description: 'See how our upholstered boucle and velvet sofas bring softness and comfort to modern homes.',
  },
  {
    id: 'gal-vid-3',
    title: 'Crafted Comfort in Motion',
    category: 'Living Room',
    mediaType: 'video',
    url: `${base}/WhatsApp Video 2026-06-30 at 23.03.28.mp4`,
    description: 'Watch the grid tufting and modular proportions of our deep sectional sofas.',
  },
  {
    id: 'gal-vid-4',
    title: 'Aniline Leather Lounge Video',
    category: 'Living Room',
    mediaType: 'video',
    url: `${base}/WhatsApp Video 2026-06-30 at 23.03.30.mp4`,
    description: 'Mid-century modern lounge chair wrapped in hand-finished tan leather.',
  },
  {
    id: 'gal-vid-5',
    title: 'Modernist Console Table Video',
    category: 'Living Room',
    mediaType: 'video',
    url: `${base}/WhatsApp Video 2026-06-30 at 23.03.32.mp4`,
    description: 'Polished Calacatta marble mounted on a clean brushed gold steel frame.',
  },
  {
    id: 'gal-vid-6',
    title: 'Imperial Royale Velvet Video',
    category: 'Living Room',
    mediaType: 'video',
    url: `${base}/WhatsApp Video 2026-06-30 at 23.03.36.mp4`,
    description: 'Handcrafted gold leaf accent panels and deep emerald green velvet scrollwork.',
  },
  {
    id: 'gal-vid-7',
    title: 'Royale Gold Crystal Chandelier Video',
    category: 'Lighting',
    mediaType: 'video',
    url: `${base}/WhatsApp Video 2026-06-30 at 23.03.41.mp4`,
    description: 'Multi-tier luxury chandelier dripping in K9 crystal drops and 24k gold-plated steel.',
  },
];

// Dining images
const diningImages: GalleryItem[] = [
  { id: 'gal-din-1', title: 'Walnut Dining Table Set', category: 'Dining', mediaType: 'image', url: `${base}/dox1.jpeg`, description: 'Beautifully grained solid walnut tabletop with tapered legs and cream bouclé chairs.' },
  { id: 'gal-din-2', title: 'Black Slate Dining Set', category: 'Dining', mediaType: 'image', url: `${base}/dox2.jpeg`, description: 'Matte black sintered stone tabletop paired with sculptural white tulip chairs.' },
  { id: 'gal-din-3', title: 'Royale White & Gold Dining Set', category: 'Dining', mediaType: 'image', url: `${base}/dox4.jpeg`, description: 'Gleaming white lacquer tabletop with champagne gold edge detailing.' },
  { id: 'gal-din-4', title: 'Chukwu Marble Dining Table', category: 'Dining', mediaType: 'image', url: `${base}/dox6.jpeg`, description: 'A single slab of Calacatta marble paired with grey leatherette dining chairs.' },
  { id: 'gal-din-5', title: 'Ornate Gold Dining Ensemble', category: 'Dining', mediaType: 'image', url: `${base}/doxa11.jpeg`, description: 'Opulent dining table set featuring gold-plated structural legs and velvet chairs.' },
  { id: 'gal-din-6', title: 'Showroom Dining Exhibition', category: 'Dining', mediaType: 'image', url: `${base}/doxa27.jpeg`, description: 'Refined dining suite showcased in our flagship store layout.' },
  { id: 'gal-din-7', title: 'Contemporary Dining Arrangement', category: 'Dining', mediaType: 'image', url: `${base}/doxa33.jpeg`, description: 'Spacious dining layout designed for memorable family gatherings.' },
  { id: 'gal-din-8', title: 'Modern White Velvet Dining Suite', category: 'Dining', mediaType: 'image', url: `${base}/dining1.jpeg`, description: 'Modern white dining table paired with black velvet chairs and gold legs.' },
  { id: 'gal-din-9', title: 'Royal Gold Classical Dining Set', category: 'Dining', mediaType: 'image', url: `${base}/dining2.jpeg`, description: 'Ornate classical dining table with matching royal cream and gold chairs.' },
  { id: 'gal-din-10', title: 'Contemporary Cream Dining Arrangement', category: 'Dining', mediaType: 'image', url: `${base}/dining3.jpeg`, description: 'Modern cream dining table with textured brown and grey chairs.' },
  { id: 'gal-din-11', title: 'Minimalist White Dining Ensemble', category: 'Dining', mediaType: 'image', url: `${base}/dining4.jpeg`, description: 'Clean white dining table with supportive textured seating.' },
  { id: 'gal-din-12', title: 'Ornate Glass-Top Dining Table', category: 'Dining', mediaType: 'image', url: `${base}/dining5.jpeg`, description: 'Royal cream and gold dining table featuring an elegant glass centerpiece.' },
  { id: 'gal-din-13', title: 'Modern Black & Tan Dining Set', category: 'Dining', mediaType: 'image', url: `${base}/dining6.jpeg`, description: 'Dark contemporary dining table accompanied by vibrant tan leather chairs.' },
  { id: 'gal-din-14', title: 'Round Slate Dining Table Set', category: 'Dining', mediaType: 'image', url: `${base}/dining7.jpeg`, description: 'Modern round black slate table with grey velvet and white leather seating.' },
  { id: 'gal-din-15', title: 'White Marble Bistro Dining Set', category: 'Dining', mediaType: 'image', url: `${base}/dining8.jpeg`, description: 'Round white marble dining table paired with tailored tan leather chairs.' },
  { id: 'gal-din-16', title: 'Marble Dining Table Arrangement', category: 'Dining', mediaType: 'image', url: `${base}/dining9.jpeg`, description: 'Close-up perspective of our white marble round table and tan seating.' },
  { id: 'gal-din-17', title: 'Rectangular White Dining Suite', category: 'Dining', mediaType: 'image', url: `${base}/dining10.jpeg`, description: 'Spacious white dining table set with comfortable brown upholstered chairs.' },
  { id: 'gal-din-18', title: 'Calacatta Marble Dining Ensemble', category: 'Dining', mediaType: 'image', url: `${base}/dining11.jpeg`, description: 'Rectangular marble dining table accompanied by orange-tan leather chairs.' },
  { id: 'gal-din-19', title: 'Square Grey Marble Dining Set', category: 'Dining', mediaType: 'image', url: `${base}/dining12.jpeg`, description: 'Modern square grey marble table paired with stylish two-tone dining chairs.' },
];

// Living Room images
const livingRoomImages: GalleryItem[] = [
  { id: 'gal-liv-1', title: 'Ekene Grid-Tufted Grey Sectional', category: 'Living Room', mediaType: 'image', url: `${base}/dox3.jpeg`, description: 'Generous, grid-tufted grey sectional defining the modern living room.' },
  { id: 'gal-liv-2', title: 'Emeka Beige Boucle Sofa', category: 'Living Room', mediaType: 'image', url: `${base}/dox5.jpeg`, description: 'Warm beige boucle sofa set with rolling back pillows and plush comfort.' },
  { id: 'gal-liv-3', title: 'Nnamdi Grey Sectional & Marble Table', category: 'Living Room', mediaType: 'image', url: `${base}/dox7.jpeg`, description: 'Expansive modular sectional in charcoal grey with stone-top round coffee table.' },
  { id: 'gal-liv-4', title: 'Beige Sofa Lounge Set', category: 'Living Room', mediaType: 'image', url: `${base}/dox8.jpeg`, description: 'Comfortable 3-seater and armchair ensemble in soft neutral fabric.' },
  { id: 'gal-liv-5', title: 'Contemporary Boucle Sofa', category: 'Living Room', mediaType: 'image', url: `${base}/dox9.jpeg`, description: 'Curated boucle seating tailored for everyday luxury.' },
  { id: 'gal-liv-6', title: 'Amara Ivory Linen Sofa', category: 'Living Room', mediaType: 'image', url: `${base}/dox10.jpeg`, description: 'Pure, calm and timeless ivory linen sofa with contrasting cushions.' },
  { id: 'gal-liv-7', title: 'Modernist Grey Sofa Suite', category: 'Living Room', mediaType: 'image', url: `${base}/doxa12.jpeg`, description: 'Deep cushioned seating with clean architectural framing.' },
  { id: 'gal-liv-8', title: 'White Leather Lounge Suite', category: 'Living Room', mediaType: 'image', url: `${base}/doxa13.jpeg`, description: 'Sleek white leather upholstery with modern metal accents.' },
  { id: 'gal-liv-9', title: 'Executive Living Room Set', category: 'Living Room', mediaType: 'image', url: `${base}/doxa14.jpeg`, description: 'Spacious sectional arrangement for entertaining in style.' },
  { id: 'gal-liv-10', title: 'Lagos Teak & White Canvas Sofa', category: 'Living Room', mediaType: 'image', url: `${base}/doxa15.jpeg`, description: 'Premium Grade-A teak wood frame with quick-dry white canvas cushions.' },
  { id: 'gal-liv-11', title: 'Artisanal Brass Coffee Table Set', category: 'Living Room', mediaType: 'image', url: `${base}/doxa16.jpeg`, description: 'Nesting circular coffee tables featuring hammered antiqued brass tops.' },
  { id: 'gal-liv-12', title: 'Modernist Lounge Suite', category: 'Living Room', mediaType: 'image', url: `${base}/doxa17.jpeg`, description: 'Expansive lounge seating tailored for contemporary living.' },
  { id: 'gal-liv-13', title: 'Imperial Royale Gold Velvet Sofa', category: 'Living Room', mediaType: 'image', url: `${base}/doxa18.jpeg`, description: 'Handcrafted gold leaf accent panels and deep emerald velvet scrollwork.' },
  { id: 'gal-liv-14', title: 'Emeka Grand Boucle Suite', category: 'Living Room', mediaType: 'image', url: `${base}/doxa25.jpeg`, description: 'Generous beige boucle sectional arrangement in our showroom.' },
  { id: 'gal-liv-15', title: 'Contemporary Grey Sofa Ensemble', category: 'Living Room', mediaType: 'image', url: `${base}/doxa28.jpeg`, description: 'Modern grey sectional with comfortable tufted backrests.' },
  { id: 'gal-liv-16', title: 'Luxe Lounge Seating', category: 'Living Room', mediaType: 'image', url: `${base}/doxa29.jpeg`, description: 'Tailored living room seating designed for relaxation and elegance.' },
  { id: 'gal-liv-17', title: 'Nnamdi Modular Sectional View', category: 'Living Room', mediaType: 'image', url: `${base}/doxa30.jpeg`, description: 'Extensive modular U-shape sectional for large family spaces.' },
  { id: 'gal-liv-18', title: 'Grey Sectional Lounge Setup', category: 'Living Room', mediaType: 'image', url: `${base}/doxa31.jpeg`, description: 'Plush grey sectional seating with matching ottoman and accents.' },
  { id: 'gal-liv-19', title: 'Charcoal Grid Sectional View', category: 'Living Room', mediaType: 'image', url: `${base}/doxa32.jpeg`, description: 'Architectural grid-tufted sofa set in deep charcoal fabric.' },
  { id: 'gal-liv-20', title: 'Modern Cream Sectional & Wood Tables', category: 'Living Room', mediaType: 'image', url: `${base}/living1.jpeg`, description: 'Modern cream sectional sofa paired with dual round wooden coffee tables.' },
  { id: 'gal-liv-21', title: 'Beige Sectional Lounge Ensemble', category: 'Living Room', mediaType: 'image', url: `${base}/living2.jpeg`, description: 'Spacious beige sectional sofa with patterned cushions and matching ottomans.' },
  { id: 'gal-liv-22', title: 'Contemporary Leather & Fabric Lounge', category: 'Living Room', mediaType: 'image', url: `${base}/living3.jpeg`, description: 'Tan leather armchair and 3-seater sofa centered around an oval wood table.' },
  { id: 'gal-liv-23', title: 'Black Chesterfield Leather Suite', category: 'Living Room', mediaType: 'image', url: `${base}/living4.jpeg`, description: 'Classic black leather chesterfield sofas highlighted by elegant gold trim.' },
  { id: 'gal-liv-24', title: 'Royal White & Gold Baroque Suite', category: 'Living Room', mediaType: 'image', url: `${base}/living5.jpeg`, description: 'Classical baroque sofa set with ornate wood carvings and floral cushions.' },
  { id: 'gal-liv-25', title: 'Imperial Cream Classical Sofa Set', category: 'Living Room', mediaType: 'image', url: `${base}/living6.jpeg`, description: 'Royal cream and gold classical seating with matching carved coffee table.' },
  { id: 'gal-liv-26', title: 'Textured Cream Sofa Lounge', category: 'Living Room', mediaType: 'image', url: `${base}/living7.jpeg`, description: 'Modern textured cream 3-seater sofa paired with round wood table and armchairs.' },
  { id: 'gal-liv-27', title: 'Baroque Gold & Cream Living Suite', category: 'Living Room', mediaType: 'image', url: `${base}/living8.jpeg`, description: 'Royal gold baroque sofa set accompanied by a glass-top center table.' },
  { id: 'gal-liv-28', title: 'Royal Gold Living & Console Showcase', category: 'Living Room', mediaType: 'image', url: `${base}/living9.jpeg`, description: 'Opulent gold classical seating displayed alongside an ornate mirror console.' },
  { id: 'gal-liv-29', title: 'Grand Baroque Gold Living Ensemble', category: 'Living Room', mediaType: 'image', url: `${base}/living10.jpeg`, description: 'Majestic royal gold sofa set featuring matching gold center and side tables.' },
  { id: 'gal-liv-30', title: 'Classical 3-Piece Gold Sofa Suite', category: 'Living Room', mediaType: 'image', url: `${base}/living11.jpeg`, description: 'Traditional gold baroque sofa arrangement designed for grand interiors.' },
  { id: 'gal-liv-31', title: 'Antique Gold Baroque Lounge Set', category: 'Living Room', mediaType: 'image', url: `${base}/living12.jpeg`, description: 'Rich antique gold and brown classical sofa suite with square marble table.' },
  { id: 'gal-liv-32', title: 'Jewel-Toned Velvet Tufted Suite', category: 'Living Room', mediaType: 'image', url: `${base}/living13.jpeg`, description: 'Vibrant green and blue tufted velvet sofas paired with a marble coffee table.' },
  { id: 'gal-liv-33', title: 'Navy & Charcoal Sectional Suite', category: 'Living Room', mediaType: 'image', url: `${base}/living14.jpeg`, description: 'Modern dark sectional sofa arrangement with wood coffee table and armchairs.' },
  { id: 'gal-liv-34', title: 'Grey Tufted Sectional & Wood Table', category: 'Living Room', mediaType: 'image', url: `${base}/living15.jpeg`, description: 'Comfortable grey tufted sectional centered around an organic wood coffee table.' },
  { id: 'gal-liv-35', title: 'Modern Textured Grey Sofa Suite', category: 'Living Room', mediaType: 'image', url: `${base}/living16.jpeg`, description: 'Sleek grey textured 2-seater sofa offering contemporary support and style.' },
  { id: 'gal-liv-36', title: 'Textured Grey Lounge Detail', category: 'Living Room', mediaType: 'image', url: `${base}/living17.jpeg`, description: 'Close-up profile of our modern textured grey fabric lounge seating.' },
  { id: 'gal-liv-37', title: 'Cream Tufted Sofa & Media Ensemble', category: 'Living Room', mediaType: 'image', url: `${base}/living18.jpeg`, description: 'Modern cream tufted seating showcased with white marble table and TV console.' },
];

// Bedroom images
const bedroomImages: GalleryItem[] = [
  { id: 'gal-bed-1', title: 'Royal Tufted Bed Frame', category: 'Bedroom', mediaType: 'image', url: `${bedBase}/bed1.jpeg`, description: 'Deep button-tufted velvet headboard with champagne gold trim.' },
  { id: 'gal-bed-2', title: 'Upholstered Headboard Detail', category: 'Bedroom', mediaType: 'image', url: `${bedBase}/bed2.jpeg`, description: 'Close-up detailing of premium upholstered headboard panels.' },
  { id: 'gal-bed-3', title: 'Velvet Bed Ensemble', category: 'Bedroom', mediaType: 'image', url: `${bedBase}/bed3.jpeg`, description: 'A complete velvet bed ensemble styled for maximum comfort.' },
  { id: 'gal-bed-4', title: 'Master Bedroom Suite', category: 'Bedroom', mediaType: 'image', url: `${bedBase}/bed4.jpeg`, description: 'Full master bedroom suite featuring wardrobe and bed frame.' },
  { id: 'gal-bed-5', title: 'Luxury Bedroom Setup', category: 'Bedroom', mediaType: 'image', url: `${bedBase}/bed5.jpeg`, description: 'Luxury bedroom layout with coordinated furniture pieces.' },
  { id: 'gal-bed-6', title: 'Platform King Bed', category: 'Bedroom', mediaType: 'image', url: `${bedBase}/bed6.jpeg`, description: 'Low-profile platform bed with sculptural padded headboard.' },
  { id: 'gal-bed-7', title: 'Modern Bed Frame', category: 'Bedroom', mediaType: 'image', url: `${bedBase}/bed7.jpeg`, description: 'Clean modern lines and floating base design.' },
  { id: 'gal-bed-8', title: 'Padded Headboard Close-Up', category: 'Bedroom', mediaType: 'image', url: `${bedBase}/bed8.jpeg`, description: 'Rich grey fabric headboard with contemporary stitching.' },
  { id: 'gal-bed-9', title: 'Canopy Bed in Velvet', category: 'Bedroom', mediaType: 'image', url: `${bedBase}/bed9.jpeg`, description: 'Show-stopping canopy bed draped in sumptuous velvet.' },
  { id: 'gal-bed-10', title: 'Gold-Framed Canopy Detail', category: 'Bedroom', mediaType: 'image', url: `${bedBase}/bed10.jpeg`, description: 'Brushed gold metal framing and canopy detail.' },
  { id: 'gal-bed-11', title: 'Serene Upholstered King Bed Suite', category: 'Bedroom', mediaType: 'image', url: `${bedBase}/bed11.jpeg`, description: 'Plush channel-tufted upholstered king bed in a modern tranquil bedroom setting.' },
  { id: 'gal-bed-12', title: 'Modern Black & Gold Dressing Table Suite', category: 'Bedroom', mediaType: 'image', url: `${bedBase}/bed12.jpeg`, description: 'Sleek black and gold bedroom vanity table featuring an illuminated mirror and stool.' },
];

// Workspace images
const workspaceImages: GalleryItem[] = [
  { id: 'gal-work-1', title: 'The Brick Flagship Showroom Building', category: 'Office', mediaType: 'image', url: `${base}/doxa21.jpeg`, description: 'Our three-story architectural flagship showroom displaying executive workspace and living collections.' },
  { id: 'gal-work-2', title: 'Executive Workspace Architecture', category: 'Office', mediaType: 'image', url: `${base}/doxa22.jpeg`, description: 'Expansive commercial glass facade showcasing our executive office suites and workstations.' },
  { id: 'gal-work-3', title: 'Doxa Homes Commercial Suite', category: 'Office', mediaType: 'image', url: `${base}/doxa23.jpeg`, description: 'Executive commercial workspace and reception display in our modern showroom.' },
  { id: 'gal-work-4', title: 'Commercial Lounge & Office Display', category: 'Office', mediaType: 'image', url: `${base}/doxa24.jpeg`, description: 'Ergonomic office seating and commercial lounge furniture arrangement.' },
  { id: 'gal-work-5', title: 'The Brick Benin City Flagship Store', category: 'Office', mediaType: 'image', url: `${base}/brick.jpeg`, description: 'Our flagship commercial building where design meets intentional craftsmanship.' },
  { id: 'gal-work-6', title: 'Modern Ergonomic Office Workstation', category: 'Office', mediaType: 'image', url: `${base}/office1.jpeg`, description: 'Sleek professional workstation setup designed for executive productivity and focus.' },
  { id: 'gal-work-7', title: 'Executive Conference Room Suite', category: 'Office', mediaType: 'image', url: `${base}/ofiice2.jpeg`, description: 'Expansive conference table and ergonomic leatherette seating for boardroom environments.' },
];

// Lighting and Decor images
const decorAndLightingImages: GalleryItem[] = [
  { id: 'gal-dec-1', title: 'Amaka Woolen Tufted Rug', category: 'Decor', mediaType: 'image', url: `${base}/doxa19.jpeg`, description: 'Thick, luxurious, and hand-tufted from 100% New Zealand wool in soft neutral tones.' },
  { id: 'gal-light-1', title: 'Royale Gold Crystal Chandelier', category: 'Lighting', mediaType: 'image', url: `${base}/doxa20.jpeg`, description: 'Multi-tier luxury chandelier dripping in K9 crystal drops and 24k gold-plated steel.' },
  { id: 'gal-dec-2', title: 'Wicker Outdoor Patio Seating', category: 'Decor', mediaType: 'image', url: `${base}/doxa26.jpeg`, description: 'All-weather woven wicker outdoor seating with vibrant contrast cushions.' },
  { id: 'gal-dec-3', title: 'Woven Wicker Hanging Egg Chair', category: 'Decor', mediaType: 'image', url: `${base}/decor1.jpeg`, description: 'Modern hanging swing chair crafted from durable blue-grey wicker with plush cushions.' },
];

// Combine all categories into the exported array
export const galleryItems: GalleryItem[] = [
  ...videos,
  ...diningImages,
  ...livingRoomImages,
  ...bedroomImages,
  ...workspaceImages,
  ...decorAndLightingImages,
];
