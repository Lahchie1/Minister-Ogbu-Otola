export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  category: string;
  readTime: string;
  scriptureReference: string;
  author: string;
  relatedBookSlug?: string;
  relatedResourceId?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'pattern-for-assembly',
    slug: 'the-new-testament-pattern-for-the-assembly',
    title: 'The New Testament Pattern for the Assembly',
    publishedAt: 'October 14, 2024',
    category: 'Expository Paper',
    readTime: '8 min read',
    scriptureReference: '1 Cor. 14:26-40',
    author: 'Minister Ogbu Otola',
    relatedBookSlug: 'the-bible-and-alcohol',
    relatedResourceId: 'apostolic-worship',
    excerpt: 'An exegetical examination of 1 Corinthians 14 and apostolic directives concerning order, edification, and doctrinal integrity during collective worship in the church.',
    content: `
### Introduction: The Sacredness of the Assembly

The corporate gathering of the local church is not an arbitrary social convention or entertainment forum; it is a divinely commanded convocation governed by apostolic precedent and scriptural authority. When Paul wrote to the Corinthian congregation, he addressed a body enriched with spiritual gifts yet troubled by disorderly conduct, self-exaltation, and carnival-like confusion.

His inspired corrective culminates in a timeless decree: *"Let all things be done decently and in order"* (1 Corinthians 14:40) and *"Let all things be done unto edifying"* (1 Corinthians 14:26).

### 1. The Mandate for Edification (*Oikodome*)

In the Greek New Testament, the term *oikodome* carries the architectural imagery of building up a house or temple. Paul argues that every act of corporate devotion must contribute directly to the spiritual comprehension, doctrinal grounding, and moral fortitude of the brethren:

- **Intelligible Teaching:** Paul insisted that five words spoken with understanding were superior to ten thousand words spoken in an uninterpreted tongue (1 Cor. 14:19). Mystical emotionalism that bypasses the renewed mind has no sanction in apostolic worship.
- **Congregational Participation:** True worship engages the mind and the spirit (1 Cor. 14:15). In singing, the congregation speaks to one another in psalms, hymns, and spiritual songs (Eph. 5:19; Col. 3:16)—a reciprocal ministry of every member rather than a performance by a specialized choir or stage band.

### 2. The Five Scriptural Items of Assembly Worship

The New Testament leaves us neither in doubt nor at liberty to innovate regarding the elements of corporate worship on the Lord's Day:

1. **Apostolic Preaching & Teaching:** Devotion to the apostles' doctrine (Acts 2:42; 2 Tim. 4:2).
2. **Congregational A Cappella Singing:** Vocal melody issuing from the sincere heart without mechanical additions (Eph. 5:19; Heb. 13:15).
3. **Collective Prayer:** Reverent supplication led by holy men lifting up holy hands without wrath or disputing (Acts 2:42; 1 Tim. 2:1-8).
4. **The Lord's Supper:** Observed faithfully on the first day of every week in memory of Christ's sacrificial death (Acts 20:7; 1 Cor. 11:23-29).
5. **Scriptural Giving:** Cheerful, purposeful contributions laid by on the first day of the week as God has prospered each disciple (1 Cor. 16:1-2; 2 Cor. 9:7).

### 3. Order and Decorum Against Contemporary Sensationalism

Modern religious movements frequently confuse physical frenzy with the presence of the Holy Spirit. However, the Apostle explicitly declared: *"For God is not the author of confusion, but of peace, as in all churches of the saints"* (1 Cor. 14:33).

Where human passion or theatrical productions replace reverent submission to the Word, worship ceases to be in spirit and in truth (John 4:24). The faithful church in Nigeria and across the globe must guard this sacred landmark with vigilance and love.
    `,
  },
  {
    id: 'plea-of-restoration',
    slug: 'understanding-the-plea-of-restoration-today',
    title: 'Understanding the Plea of Restoration Today',
    publishedAt: 'September 28, 2024',
    category: 'Historical & Doctrinal',
    readTime: '11 min read',
    scriptureReference: 'Jeremiah 6:16 / John 17:20-23',
    author: 'Minister Ogbu Otola',
    relatedBookSlug: 'the-bible-and-alcohol',
    relatedResourceId: 'restoration-plea',
    excerpt: 'Why returning to the Scriptures alone without human creeds or ecclesiastical councils remains the vital, God-ordained answer to widespread denominational confusion.',
    content: `
### The Dilemma of Denominational Fragmentation

Today, Christendom is fractured into thousands of competing denominations, each bearing separate names, enforcing contradictory creeds, and practicing divergent modes of worship and church government. Sincere seekers looking for the simplicity of the New Testament are rightly bewildered by this spiritual babylon.

Yet, this disunity directly contradicts the high-priestly prayer of our Lord Jesus Christ in John 17:21: *"That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us: that the world may believe that thou hast sent me."*

### Reformation vs. Restoration

Historically, we must distinguish between two fundamentally different approaches:

1. **Reformation:** Attempted to reform existing corrupt church structures (such as medieval Roman Catholicism) by modifying certain dogmas while keeping centuries of human ecclesiastical tradition.
2. **Restoration:** Bypasses post-apostolic history entirely, rejecting human creeds and ecumenical councils, and returning directly to the original seed of the Kingdom—the unadulterated Word of God (Luke 8:11).

When pure seed is planted into honest human soil today, it produces neither Baptists, Methodists, Pentecostals, nor Roman Catholics; it produces simple Christians, members of the church of Christ, precisely as it did in Jerusalem, Antioch, and Corinth in the first century.

### Slogans Grounded in Inspiration

The early restoration advocates popularized guiding maxims that remain desperately relevant:

- **"Where the Scriptures speak, we speak; where the Scriptures are silent, we are silent"** (1 Peter 4:11; Revelation 22:18-19).
- **"In matters of faith, unity; in matters of opinion, liberty; in all things, love."**
- **"A 'Thus saith the Lord' for all that we teach and practice"** (Colossians 3:17).

### The Urgent Call to the Old Paths

In Jeremiah 6:16, the prophet exhorted a backsliding generation: *"Stand ye in the ways, and see, and ask for the old paths, where is the good way, and walk therein, and ye shall find rest for your souls."*

For our brethren across Nigeria, amidst the onslaught of the prosperity gospel, modern emotionalism, and syncretistic culture, our safety and salvation lie solely in the old apostolic paths.
    `,
  },
  {
    id: 'scriptural-baptism',
    slug: 'the-essential-design-of-new-testament-baptism',
    title: 'The Essential Design of New Testament Baptism',
    publishedAt: 'August 19, 2024',
    category: 'Doctrinal Expositions',
    readTime: '9 min read',
    scriptureReference: 'Acts 2:38 • 1 Peter 3:21 • Romans 6:3-4',
    author: 'Minister Ogbu Otola',
    relatedBookSlug: 'the-bible-and-alcohol',
    relatedResourceId: 'plan-of-salvation',
    excerpt: 'An exhaustive biblical treatise clearing away modern theological confusion regarding the purpose, action, and subject of water baptism in the scheme of redemption.',
    content: `
### Is Baptism a Mere "Outward Sign" or a Condition of Pardon?

In contemporary religious dialogue, few subjects suffer greater distortion than water baptism. Popular theology frequently asserts that baptism is merely "an outward sign of an inward grace" or a post-salvation symbol that plays no part in the forgiveness of sins.

However, when we turn from human theological systems to the plain testimony of the Holy Spirit, we discover that the New Testament consistently positions baptism at the precise moment of transition from the state of condemnation to the state of grace.

### 1. The Greek Term *Baptisma*

The word translated "baptize" is not an English translation, but an anglicized transliteration of the Greek verb *baptizo*, which means to immerse, submerge, or overwhelm. Sprinkling (*rhantizo*) or pouring (*cheo*) were never apostolic practices. Paul explicitly portrays baptism as a burial and resurrection:

> *"Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life."* (Romans 6:4)

### 2. The Purpose (*Eis Aphesin Hamartion*)

On the inaugural Day of Pentecost, when three thousand guilt-stricken souls cried out, *"Men and brethren, what shall we do?"*, the inspired Apostle Peter replied under the plenary guidance of the Holy Spirit:

> *"Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost."* (Acts 2:38)

The prepositional phrase *eis aphesin hamartion* ("unto/for the remission of sins") denotes the goal or result in view, not a retrospective celebration of something already achieved. Just as Christ shed His blood *eis aphesin hamartion* (Matthew 26:28), the penitent believer is immersed in order to obtain the remission of sins.

### 3. Scriptural Harmony

Notice how the entire New Testament corpus speaks with one unified voice:
- Ananias told Saul of Tarsus: *"Arise, and be baptized, and wash away thy sins, calling on the name of the Lord"* (Acts 22:16).
- Peter wrote without equivocation: *"The like figure whereunto even baptism doth also now save us (not the putting away of the filth of the flesh, but the answer of a good conscience toward God), by the resurrection of Jesus Christ"* (1 Peter 3:21).
- Paul declared: *"For as many of you as have been baptized into Christ have put on Christ"* (Galatians 3:27).

Let us never shy away from teaching what Christ commands in the Great Commission (Mark 16:16).
    `,
  },
];

