export type Availability = 'Available' | 'Sold out' | 'Pre-order' | 'Upcoming';
export type Variant = { id: string; name: string; inventory: number };
export type Product = { id: string; slug: string; name: string; description: string; price: number; currency: 'USD'; images: string[]; category: string; collectionId: string; characterId: string; variants: Variant[]; inventory: number; availabilityStatus: Availability; releaseDate: string; tags: string[]; featured: boolean };
export type Character = { id: string; slug: string; name: string; coverImage: string; gallery: string[]; introduction: string; story: string; collectionIds: string[] };
export type Collection = { id: string; slug: string; title: string; subtitle: string; heroImage: string; description: string; gallery: string[]; characterIds: string[]; productIds: string[] };
export type CartLine = { productId: string; variantId: string; quantity: number };
