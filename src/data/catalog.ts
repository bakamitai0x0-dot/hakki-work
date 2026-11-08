import type {Product, Character, Collection} from '@/types';
const descriptions = [
'A small pause, given a shape. A softly rounded studio sculpture with a hand-finished mineral surface. Designed to sit quietly beside your everyday rituals.',
'A study in balance and gentle imperfection. This original companion finds beauty in the spaces between things, with an expressive silhouette and a tactile finish.',
'An object for daydreamers. Sculptural curves catch the light differently throughout the day, bringing a little imagined landscape into your home.'
];
export const characters: Character[] = [
{id:'mori',slug:'mori',name:'Mori',coverImage:'/media/mori.svg',gallery:['/media/mori.svg','/media/mori-detail.svg'],introduction:'The art of doing a little less.',story:'Mori lives where the forest grows quiet. A keeper of unhurried afternoons, Mori gathers the moments most of us walk past: a patch of sunlight, the sound of rain, the space before a thought. The uneven ears are a reminder that a little imperfection makes a thing our own.',collectionIds:['quiet-forms','earth-notes']},
{id:'lune',slug:'lune',name:'Lune',coverImage:'/media/lune.svg',gallery:['/media/lune.svg','/media/lune-detail.svg'],introduction:'A companion to the in-between hours.',story:'When the city turns its lights down, Lune begins to wander. Carrying a little of the night in a rounded moon-shaped head, this quiet observer collects dreams and gives them a place to rest.',collectionIds:['after-hours']},
{id:'pico',slug:'pico',name:'Pico',coverImage:'/media/pico.svg',gallery:['/media/pico.svg','/media/pico-detail.svg'],introduction:'Curiosity, in its smallest form.',story:'Pico believes the world is made of questions. A seed-like wanderer with an oversized sense of wonder, Pico finds entire landscapes in a stone or a fallen leaf. Every new place becomes a small adventure.',collectionIds:['earth-notes']},
{id:'sora',slug:'sora',name:'Sora',coverImage:'/media/sora.svg',gallery:['/media/sora.svg','/media/sora-detail.svg'],introduction:'For those with their head in the clouds.',story:'Sora moves at the pace of clouds. A soft, wing-shaped silhouette and a faraway gaze make this companion a reminder to leave room for possibility. Some journeys need no destination.',collectionIds:['quiet-forms','after-hours']}
];
export const collections: Collection[] = [
{id:'quiet-forms',slug:'quiet-forms',title:'Quiet Forms',subtitle:'A study in stillness',heroImage:'/media/collection-quiet.svg',description:'Soft silhouettes. Thoughtful details. A collection that finds its voice in the quiet, inspired by stones worn smooth by time.',gallery:['/media/mori.svg','/media/sora.svg'],characterIds:['mori','sora'],productIds:['p1','p2','p3','p4']},
{id:'after-hours',slug:'after-hours',title:'After Hours',subtitle:'When the world slows down',heroImage:'/media/collection-night.svg',description:'An ode to the hours that belong only to you. Deep charcoal, lunar curves and companions for the late-night imagination.',gallery:['/media/lune.svg','/media/sora-detail.svg'],characterIds:['lune','sora'],productIds:['p5','p6','p7','p8']},
{id:'earth-notes',slug:'earth-notes',title:'Earth Notes',subtitle:'Rooted in small wonders',heroImage:'/media/collection-earth.svg',description:'A dialogue with the natural world. Mineral greens, earthy surfaces and curious little forms, gathered into an imagined landscape.',gallery:['/media/pico.svg','/media/mori-detail.svg'],characterIds:['pico','mori'],productIds:['p9','p10','p11','p12']}
];
const specs = [
['Mori — Chalk','mori','quiet-forms',68,'Available','2026-10-18T10:00:00+08:00'],
['Sora — Warm White','sora','quiet-forms',78,'Available','2026-11-01T10:00:00+08:00'],
['Mori — Pebble Edition','mori','quiet-forms',92,'Pre-order','2026-11-16T10:00:00+08:00'],
['Sora — Study in Stone','sora','quiet-forms',120,'Sold out','2026-09-10T10:00:00+08:00'],
['Lune — Charcoal','lune','after-hours',78,'Available','2026-10-25T10:00:00+08:00'],
['Lune — Blue Hour','lune','after-hours',88,'Upcoming','2026-11-22T20:00:00+08:00'],
['Sora — Midnight','sora','after-hours',84,'Available','2026-10-08T10:00:00+08:00'],
['Lune — Moon Study','lune','after-hours',145,'Sold out','2026-09-20T10:00:00+08:00'],
['Pico — Moss','pico','earth-notes',58,'Available','2026-11-05T10:00:00+08:00'],
['Mori — River Stone','mori','earth-notes',98,'Pre-order','2026-12-01T10:00:00+08:00'],
['Pico — Seedling','pico','earth-notes',64,'Upcoming','2026-12-12T10:00:00+08:00'],
['Pico — Field Notes Set','pico','earth-notes',156,'Available','2026-10-02T10:00:00+08:00']
] as const;
export const products: Product[] = specs.map((s,i)=>({id:'p'+(i+1),slug:s[0].toLowerCase().replaceAll(' — ','-').replaceAll(' ','-'),name:s[0],description:descriptions[i%3]+' Demonstration product; no real item is offered for sale.',price:s[3],currency:'USD',images:['/media/'+s[1]+(i%3===2?'-detail':'')+'.svg','/media/'+s[1]+(i%3===2?'':'-detail')+'.svg'],category:i===11?'Object sets':'Art figures',collectionId:s[2],characterId:s[1],variants:[{id:'standard',name:'Studio finish',inventory:s[4]==='Available'?12:s[4]==='Pre-order'?8:0},{id:'mineral',name:'Mineral finish',inventory:s[4]==='Available'?4:0}],inventory:s[4]==='Available'?16:s[4]==='Pre-order'?8:0,availabilityStatus:s[4],releaseDate:s[5],tags:[i<3?'New arrival':'Studio selection','Demo'],featured:[0,1,4,8].includes(i)}));
export const releases = ['p2','p9','p3','p6','p10','p11'].map(id=>products.find(p=>p.id===id)!);
export const journals = [
{slug:'the-space-between',title:'The space between things',subtitle:'Why we make room for quiet objects.',date:'2026-10-28',image:'/media/story.svg',category:'Studio notes',paragraphs:['A room is more than the things inside it. It is also the light that moves across a wall, the distance between a chair and a window, the pause before a familiar ritual.','We began ATELIER OBJECTS with a question: could a small object change the way we feel about an ordinary moment? Our first studies were rounded stones and folded paper, things that felt natural in the hand.','Quiet Forms grew from those studies. Each companion carries the marks of its imagined world, leaving room for your own story. These are fictional studio notes for this demonstration website.']},
{slug:'a-language-of-forms',title:'A language of forms',subtitle:'From a pencil line to a quiet companion.',date:'2026-10-12',image:'/media/collection-quiet.svg',category:'Process',paragraphs:['Every character begins with a line. Not a perfect line, but one with enough personality to suggest a presence.','We work through paper silhouettes, clay studies and material experiments. Subtle asymmetry helps a form feel familiar without resembling anything that already exists.','The studio process shown here is an original fictional narrative. Product specifications and materials are demonstration content.']},
{slug:'collecting-slowly',title:'On collecting slowly',subtitle:'A few things, chosen with intention.',date:'2026-09-24',image:'/media/collection-earth.svg',category:'Perspectives',paragraphs:['A collection does not have to be large to mean something. Sometimes one object, encountered at the right moment, is enough.','We are interested in the companions that stay with us: the small things that gather memories without asking for attention.','Leave a little space on the shelf. There is no hurry to fill it. This article is original demonstration editorial content.']}
];
