export interface ResourceItem {
  id: string;
  title: string;
  type: string;
  scriptureReference: string;
  description: string;
  url: string;
  linkLabel: string;
  category: string;
  format?: 'article' | 'pdf' | 'audio' | 'chart';
}

export interface ResourceCategory {
  id: string;
  name: string;
  index: string;
  subtitle: string;
  description: string;
  items: ResourceItem[];
}

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'bible-doctrine',
    name: 'Bible Study & Doctrine',
    index: '01 / Systematic Studies',
    subtitle: 'Foundational New Testament ecclesiology, sacramental purity, and systematic soteriology.',
    description: 'Direct study guides, outlines, and topical textual breakdowns structured for personal discernment and Bible class curricula.',
    items: [
      {
        id: 'nt-church-org',
        title: 'New Testament Church Organization & Leadership',
        type: 'Doctrinal Manuscript',
        scriptureReference: '1 Tim 3 • Titus 1',
        description: 'Comprehensive scriptural notes on elders, deacons, and congregational autonomy according to the primitive apostolic order.',
        url: 'https://www.christiancourier.com/articles/7-biblical-leadership-in-the-church',
        linkLabel: 'External Study Link',
        category: 'Bible Study & Doctrine',
        format: 'article',
      },
      {
        id: 'apostolic-worship',
        title: 'Apostolic Worship vs Modern Innovations',
        type: 'Exegetical Outline',
        scriptureReference: 'Eph 5:19 • Acts 20:7',
        description: 'Exegetical breakdown of singing without mechanical instruments, weekly Lord\'s Supper, and scriptural giving.',
        url: 'https://apologeticspress.org/instrumental-music-in-worship-1282/',
        linkLabel: 'External Study Link',
        category: 'Bible Study & Doctrine',
        format: 'article',
      },
      {
        id: 'plan-of-salvation',
        title: 'The Plan of Salvation in the Book of Acts',
        type: 'Hermeneutic Chart',
        scriptureReference: 'Acts of the Apostles',
        description: 'Sequential harmony of conversion accounts from Pentecost to Ephesus, confirming hearing, faith, repentance, confession, and immersion.',
        url: 'https://www.christiancourier.com/articles/21-the-plan-of-salvation',
        linkLabel: 'External Study Link',
        category: 'Bible Study & Doctrine',
        format: 'chart',
      },
    ],
  },
  {
    id: 'restoration-history',
    name: 'Restoration Movement & Church History',
    index: '02 / Historical Annals',
    subtitle: 'Tracing the historical return to primitive Christianity globally and throughout West Africa.',
    description: 'Historical monographs analyzing the non-denominational plea for simple New Testament Christianity and apostolic revival.',
    items: [
      {
        id: 'restoration-plea',
        title: 'The Plea for Restoration: Returning to the Apostolic Pattern',
        type: 'Historical Treatise',
        scriptureReference: '1 Peter 4:11',
        description: 'An introductory overview of the principle of speaking where the Bible speaks and remaining silent where the Scriptures are silent.',
        url: 'https://therestorationmovement.com/',
        linkLabel: 'External Archive Link',
        category: 'Restoration Movement & Church History',
        format: 'article',
      },
      {
        id: 'church-in-nigeria',
        title: 'Historical Survey of the Lord\'s Church in Nigeria',
        type: 'Regional Archive',
        scriptureReference: 'Nigeria • West Africa',
        description: 'Key milestones, early planting struggles, and faithfulness of the pioneer indigenous and missionary preachers in West Africa.',
        url: 'https://www.christiancourier.com/articles/48-the-gospel-in-nigeria',
        linkLabel: 'External Historical Document',
        category: 'Restoration Movement & Church History',
        format: 'article',
      },
      {
        id: 'departures-timeline',
        title: 'Tracing Denominational Departures from Scripture',
        type: 'Comparative Chronology',
        scriptureReference: '2 Thess 2:3',
        description: 'A clear historical timeline of post-apostolic departures, ecumenical councils, medieval apostasy, and fragmented reformation efforts.',
        url: 'https://www.executableoutlines.com/ch_history.html',
        linkLabel: 'External Research Link',
        category: 'Restoration Movement & Church History',
        format: 'chart',
      },
    ],
  },
  {
    id: 'audio-video',
    name: 'Sermons & Teaching Audio / Video',
    index: '03 / Spoken Word',
    subtitle: 'Expository congregational audio recordings and verse-by-verse classroom series.',
    description: 'Carefully indexed auditory and video lessons preached at Church of Christ assemblies in Lagos and abroad.',
    items: [
      {
        id: 'gospel-meetings-lagos',
        title: 'Gospel Meeting Expositions: Sound Doctrine for Perilous Times',
        type: 'Audio Archive • Lagos Meetings',
        scriptureReference: '2 Tim 4:1-5',
        description: 'Recorded sermons delivered during congregational gospel efforts in Lawanson and surrounding assemblies in Lagos.',
        url: 'https://www.wvbs.org/video/',
        linkLabel: 'Listen / Watch External Audio',
        category: 'Sermons & Teaching Audio / Video',
        format: 'audio',
      },
      {
        id: 'galatians-class',
        title: 'Weekly Bible Class Series: The Epistle to the Galatians',
        type: 'Bible Class Commentary & PDF',
        scriptureReference: 'Epistle to Galatians',
        description: 'Verse-by-verse audio commentary, Greek word analyses, and downloadable classroom syllabi contrasting grace and legalism.',
        url: 'https://www.executableoutlines.com/ga_index.html',
        linkLabel: 'Access Recordings',
        category: 'Sermons & Teaching Audio / Video',
        format: 'audio',
      },
    ],
  },
  {
    id: 'practical-living',
    name: 'Practical Christian Living',
    index: '04 / Daily Conduct',
    subtitle: 'Applying apostolic directives to domestic fidelity, vocation, and moral steadfastness.',
    description: 'Biblical counsel for daily Christian discipleship, marriage, work ethic, and resisting modern moral drift.',
    items: [
      {
        id: 'christian-home',
        title: 'Christian Home and Marriage Under Apostolic Instruction',
        type: 'Family Study Outline',
        scriptureReference: 'Eph 5:22-33 • Col 3',
        description: 'Scriptural counsel for husbands, wives, and children preserving holiness amidst the pressures of contemporary culture.',
        url: 'https://apologeticspress.org/gods-design-for-the-family-1249/',
        linkLabel: 'Read Outline',
        category: 'Practical Christian Living',
        format: 'article',
      },
      {
        id: 'work-ethic',
        title: 'Biblical Work Ethic and Integrity in Times of Economic Hardship',
        type: 'Ethical Analysis',
        scriptureReference: '2 Thess 3:10 • Prov 11:1',
        description: 'Guidance for Nigerian Christians navigating professional ethics, uncompromising honesty, and divine reliance during austere economic times.',
        url: 'https://www.christiancourier.com/articles/123-the-christian-work-ethic',
        linkLabel: 'Read Article',
        category: 'Practical Christian Living',
        format: 'article',
      },
    ],
  },
  {
    id: 'evangelism',
    name: 'Evangelism & Outreach',
    index: '05 / The Great Commission',
    subtitle: 'Instructional manuals and apologia for personal soul-winning and answering sincere inquirers.',
    description: 'Equipping members to teach the gospel one-on-one, conduct home Bible studies, and answer questions with biblical authority.',
    items: [
      {
        id: 'personal-evangelism-guide',
        title: 'Personal Evangelism Guide: Conducting One-on-One Bible Studies',
        type: 'PDF Guidebook',
        scriptureReference: '2 Tim 2:2',
        description: 'A proven conversational study outline for teaching non-Christians, walking step-by-step through authority, sin, and redemption.',
        url: 'https://www.wvbs.org/free-online-courses/personal-evangelism/',
        linkLabel: 'Download Guide PDF',
        category: 'Evangelism & Outreach',
        format: 'pdf',
      },
      {
        id: 'answers-common-questions',
        title: 'Answering Common Questions About the Church of Christ',
        type: 'Apologetics Reference',
        scriptureReference: '1 Peter 3:15',
        description: 'Clear biblical answers to queries on baptismal necessity, unaccompanied congregational singing, weekly communion, and scriptural designations.',
        url: 'https://www.christiancourier.com/articles/4-questions-about-the-church-of-christ',
        linkLabel: 'Study Reference',
        category: 'Evangelism & Outreach',
        format: 'article',
      },
    ],
  },
];

