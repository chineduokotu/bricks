export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living Room' | 'Bedroom' | 'Dining' | 'Workspace' | 'Lighting' | 'Decor';
  mediaType: 'image' | 'video';
  url: string;
  description: string;
}

const categories = ['Living Room', 'Bedroom', 'Dining', 'Workspace', 'Lighting', 'Decor'] as const;

// Helper to generate image items
const images: GalleryItem[] = Array.from({ length: 43 }, (_, i) => {
  const index = i + 11; // dox11 to dox53
  const catIndex = i % categories.length;
  const category = categories[catIndex];
  
  let title = `Premium Piece - View ${index}`;
  let description = "Exquisitely crafted furniture matching high-end standards.";
  
  if (category === "Living Room") {
    title = `Luxury Sofa Setup - Dox ${index}`;
    description = "Hand-upholstered comfort designed to anchor modern Nigerian living rooms.";
  } else if (category === "Dining") {
    title = `Elegant Dining Detail - Dox ${index}`;
    description = "Precious marble and solid wood crafting designed for memorable gatherings.";
  } else if (category === "Bedroom") {
    title = `Bespoke Wardrobe Detail - Dox ${index}`;
    description = "Restful luxury and robust internal storage panels.";
  } else if (category === "Workspace") {
    title = `Premium Workspace Accent - Dox ${index}`;
    description = "Ergonomic, modern working space elements designed for absolute productivity.";
  } else if (category === "Lighting") {
    title = `Atmospheric Lighting - Dox ${index}`;
    description = "Graceful lighting design creating a warm, balanced ambient halo.";
  } else if (category === "Decor") {
    title = `Aesthetic Décor Accessory - Dox ${index}`;
    description = "The finishing touches — luxury rugs, lighting, and accessories.";
  }

  return {
    id: `gal-img-${index}`,
    title,
    category,
    mediaType: "image",
    url: `/images/dox${index}.jpeg`,
    description
  };
});

// Helper to generate video items
const videos: GalleryItem[] = Array.from({ length: 8 }, (_, i) => {
  const index = i + 1; // dox_video1 to dox_video8
  const catIndex = i % categories.length;
  const category = categories[catIndex];
  
  let title = `Showcase Video - Showcase ${index}`;
  let description = "A cinematic look at the detailing and design of our furniture.";
  
  if (category === "Living Room") {
    title = "Modular Sofa Showcase Video";
    description = "Take an editorial walk around our deep-cushioned modular sectionals.";
  } else if (category === "Dining") {
    title = "Sintered Dining Set Video";
    description = "Cinematic video showing marble reflections and scratch-resistant finishing.";
  } else if (category === "Bedroom") {
    title = "Bespoke Bed Frames Video";
    description = "A video guide showing high-density headboard styling and storage drawers.";
  } else if (category === "Workspace") {
    title = "Modern Workspace Setup Video";
    description = "Showcasing neat cable management and refined timber wood surface finishes.";
  } else if (category === "Lighting") {
    title = "Luminous Light Installation Video";
    description = "Polished brass fittings and hand-blown glass details up close.";
  } else if (category === "Decor") {
    title = "Interior Lighting Setup Video";
    description = "Luminous crystal details and warm gold glow showcase video.";
  }

  return {
    id: `gal-vid-${index}`,
    title,
    category,
    mediaType: "video",
    url: `/images/dox_video${index}.mp4`,
    description
  };
});

// Combine both lists
export const galleryItems: GalleryItem[] = [...videos, ...images];
