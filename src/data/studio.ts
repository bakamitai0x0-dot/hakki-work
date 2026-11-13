export const studio = {
  name: 'HAKKI WORK',
  positioning: 'Independent Creative & Development Studio',
  tagline: 'From Imagination to Reality.',
  hero: {
    title: 'Your Ideas. Made Real.',
    description: 'From custom websites and apps to original characters, 3D models, collectibles, and personalized products — we bring creative ideas to life.',
    image: "/media/campaign.webp",
    imageAlt: 'AI-generated concept illustration of two character figurines on a limestone plinth.'
  },
  inquiry: { whatsapp: "https://wa.me/601155030452" },
};
export const studioNavigation = [
  {label:'Home',href:'/'}, {label:'Services',href:'/#services'},
  {label:'Our Works',href:'/#works'}, {label:'Custom Shop',href:'/#custom-shop'},
  {label:'About',href:'/about'}, {label:'Contact',href:'/#contact'},
];
export const services = [
  {id:'creative',title:'Creative & IP Design',description:'Distinctive characters and considered forms, developed from your first idea.',image:"/media/studio-concepts/sketch.jpg",items:['Original Character Design','IP Development','3D Character Modeling','Sculptures & Collectibles','Character Merchandise'],projectType:'IP / Character Design'},
  {id:'digital',title:'Web & App Development',description:'Thoughtful digital experiences built around the way your business works.',image:"/media/studio-concepts/web.jpg",items:['Business Websites','E-Commerce Websites','Web Applications','Mobile Apps','Custom Management Systems'],projectType:'Website Development'},
  {id:'making',title:'Custom Manufacturing',description:'A practical path from digital form to a personalized physical creation.',image:"/media/studio-concepts/making.jpg",items:['3D Printing','Product Prototyping','Personalized Gifts','Custom Figurines','Cosplay Display Props'],projectType:'3D Printing'},
];
export const workCategories = ['All','IP & Characters','Website & Apps','3D Models','Custom Products'] as const;
export type WorkCategory = typeof workCategories[number];
export const featuredWorks = [
  {id:'character-study',name:'Quiet companions',category:'IP & Characters' as WorkCategory,image:"/media/studio-concepts/sketch.jpg",description:'An internal exploration of original character silhouettes and imagined worlds.',detail:'An AI-generated sketch exploring an original character concept. Presented as an internal concept, without a client commission or commercial outcome.',href:'/characters',linkLabel:'Explore the character studies'},
  {id:'commerce-study',name:'An editorial storefront',category:'Website & Apps' as WorkCategory,image:"/media/studio-concepts/web.jpg",description:'An internal commerce interface study, connecting storytelling and product discovery.',detail:'The existing ATELIER OBJECTS demonstration storefront. Its mock catalog, product pages, local bag and demonstration checkout remain available. This is not a client case study.',href:'/shop',linkLabel:'Explore the demonstration shop'},
  {id:'form-study',name:'A study in soft forms',category:'3D Models' as WorkCategory,image:"/media/studio-concepts/model.jpg",description:'A visual direction for a rounded character, developed as an illustrative form study.',detail:'An AI-generated concept visualization of a digital sculpt.',href:'/characters/mori',linkLabel:'View the original concept'},
  {id:'object-study',name:'Objects with personality',category:'Custom Products' as WorkCategory,image:"/media/studio-concepts/gift.jpg",description:'An internal concept for character-led keepsakes and personalized objects.',detail:'An illustrative collection concept. Customization, material, manufacturing feasibility, price and availability would all require a separate quotation.',href:'/collections/earth-notes',linkLabel:'Explore the collection concept'},
];
export const ideaSteps = [
  {title:'Imagine',subtitle:'Concept & Design',description:'Find the character of your idea. Explore its purpose, visual language and possibilities.',image:"/media/studio-concepts/sketch.jpg"},
  {title:'Create',subtitle:'Digital Development',description:'Shape it into a useful digital experience, a character study or a considered model.',image:"/media/studio-concepts/web.jpg"},
  {title:'Make Real',subtitle:'Physical Production',description:'Explore materials, prototypes and a practical route toward a physical creation.',image:"/media/studio-concepts/making.jpg"},
];
export const businessSolutions = ['Brand & IP Development','Business Websites & E-Commerce','Custom Product Prototyping','Corporate Merchandise & Collectibles'];
export const customCategories = [
  {name:'Custom Mini Figures',image:"/media/studio-concepts/figure.jpg",description:'Explore a small figure shaped around your idea.',projectType:'Custom Figurine'},
  {name:'Personalized Gifts',image:"/media/studio-concepts/gift.jpg",description:'Discuss a personal detail, occasion or meaningful object.',projectType:'Other'},
  {name:'Character Models',image:"/media/studio-concepts/character.jpg",description:'Develop an original character into a considered form.',projectType:'IP / Character Design'},
  {name:'Cosplay Creations',image:"/media/studio-concepts/prop.jpg",description:'Discuss an original display prop or custom concept.',projectType:'Cosplay Props'},
];
export const howItWorks = [
  {title:'Tell Us Your Idea',description:'Share your concept, references, requirements and budget.'},
  {title:'Get a Quotation',description:'Receive a quotation based on your project requirements.'},
  {title:'Design & Production',description:'Your project moves into development or production after confirmation.'},
  {title:'Delivered to You',description:'Receive your completed digital project or physical creation.'},
];
export const studioValues = [
  {title:'Creative Thinking',description:'Exploring creative ways to bring ideas to life.'},
  {title:'Digital to Physical',description:'Connecting digital design, software and physical production.'},
  {title:'Made to Fit',description:'Flexible solutions based on each project’s requirements.'},
  {title:'Direct Communication',description:'Clear communication throughout the creative process.'},
];
export const projectTypes = ['IP / Character Design','Website Development','APP Development','3D Printing','Custom Figurine','Cosplay Props','Other'];
export function inquiryHref(type?:string,audience?:'business'|'personal') {const params=new URLSearchParams();if(type)params.set('projectType',type);if(audience)params.set('audience',audience);return '/'+(params.size?'?'+params.toString():'')+'#contact'}
