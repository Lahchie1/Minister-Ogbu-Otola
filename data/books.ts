export interface EbookPlatform {
  name: 'Selar' | 'Amazon' | 'Lulu';
  label: string;
  url: string;
  badge: string;
  description: string;
  isRecommended?: boolean;
  enabled?: boolean;
}

export interface Book {
  id: string;
  vol: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  fullOverview?: string;
  category: string;
  pages: number;
  price: string;
  originalPrice?: string;
  format: string;
  publisher: string;
  scriptureReference: string;
  status: 'Published' | 'Forthcoming';
  coverImage: string;
  coverTheme: {
    bg: string;
    text: string;
    accent: string;
    badge: string;
  };
  features: string[];
  tableOfContents?: string[];
  endorsement?: {
    quote: string;
    scholar: string;
    title: string;
  };
  ebookPlatforms: EbookPlatform[];
}

export const books: Book[] = [
  {
    id: 'the-bible-and-alcohol',
    vol: 'PUBLISHED TREATISE',
    title: 'THE BIBLE AND ALCOHOL: Truth Beyond Tradition',
    slug: 'the-bible-and-alcohol',
    tagline: 'Biblical Truth Beyond Human Tradition',
    description:
      'Is it a sin for a Christian to drink? Did Jesus turn water into alcoholic wine? Why did Paul tell Timothy to "use a little wine"? Drawing on original Hebrew and Greek, two millennia of church history, and modern medical science, Ogbu Joshua Otola delivers a balanced, rigorous, and deeply scriptural answer.',
    fullOverview:
      'Few questions divide Christians as sharply as alcohol. Some believers drink "in moderation" and point to Scripture; others abstain completely and point to Scripture too. This authoritative treatise cuts through human dogma on both sides to establish what the inspired biblical text actually teaches from Genesis to Revelation.',
    category: 'Biblical Hermeneutics & Christian Ethics',
    pages: 256,
    price: '₦3,500',
    originalPrice: '₦5,500',
    format: 'eBook / PDF',
    publisher: 'Covenant Daystar Publishers, Port Harcourt',
    scriptureReference: '1 Timothy 5:23 • John 2 • Proverbs 20:1',
    status: 'Published',
    coverImage: '/images/the-bible-and-alcohol.png',
    coverTheme: {
      bg: 'bg-[#1A202C]',
      text: 'text-white',
      accent: 'text-[#D4A017]',
      badge: 'HERMENEUTICS & ETHICS',
    },
    features: [
      'Six Hebrew words & four Greek terms for "wine" analyzed',
      'Expository breakdown of the Wedding at Cana (John 2)',
      'Contextual truth of Paul\'s advice to Timothy (1 Tim 5:23)',
      'Old Testament study: Proverbs, Isaiah, Leviticus & Nazirite vows',
      'The higher standard of sobriety required of church leaders',
      'Medical analysis of alcohol on brain, body, family & society',
      'Historical survey from early church fathers to Nigerian congregations',
      'Discussion questions for personal study, families & Bible classes',
    ],
    tableOfContents: [
      'Chapter 1: The Great Christian Divide: Tradition vs Scripture',
      'Chapter 2: The Vocabulary of Wine: 6 Hebrew & 4 Greek Words Decoded',
      'Chapter 3: The Miracle at Cana: What Did Jesus Actually Make?',
      'Chapter 4: For Thy Stomach\'s Sake: Paul\'s Prescription to Timothy',
      'Chapter 5: Strong Drink in the Law & the Prophets',
      'Chapter 6: Leadership, Sobriety, and the Sacred Trust of Elders',
      'Chapter 7: The Physiological & Societal Toll: What Science Confirms',
      'Chapter 8: Historical Perspectives from the Early Church to Nigeria Today',
      'Chapter 9: Ten Common Assumptions Examined and Refuted',
      'Chapter 10: Pastoral Counsel for Families, Youth, and Churches of Christ',
    ],
    endorsement: {
      quote:
        'A timely contribution to the fields of biblical studies, Christian ethics and pastoral ministry. It is a gift to the Church, the Body of Christ… The language of the book is simple and clear, making it easy for everyone to read, irrespective of educational background.',
      scholar: 'Prof. Caleb Oladokun Ogunkunle',
      title: 'Professor of Biblical Studies and Head, Department of Religions, University of Ilorin',
    },
    ebookPlatforms: [
      {
        name: 'Selar',
        label: 'Order on Selar',
        url: 'https://selar.com/2179039tz9',
        badge: '₦3,500 • Instant Download',
        description: 'Instant eBook/PDF download with Naira card or direct bank transfer in Nigeria.',
        isRecommended: true,
        enabled: true,
      },
      {
        name: 'Lulu',
        label: 'Order on Lulu',
        url: 'https://www.lulu.com/shop/joshua-otola-ogbu/the-bible-and-alcohol/ebook/product-dyqym9k.html?q=The+Bible+and+Alcohol+Ogbu+Joshua+Otola&page=1&pageSize=4',
        badge: 'Global Digital Edition',
        description: 'Worldwide digital publication and secure global checkout.',
        enabled: true,
      },
    ],
  },
];
