const db = require('./models');

// const resume = {
//   experience: [{
//       company: 'General Assembly',
//       companyDescription: 'General Assembly’s Web Development Immersive (WDI) is a 12-week long, full time training program dedicated to preparing students to think like engineers and approach problems creatively in order to build the next generation of web applications and digital products.',
//       role: 'Full Stack Development Fellow',
//       roleDescription: 'I received training in full stack development, including robust full stack web applications and RESTful APIs.',
//       accomplishments: [
//         'Code-o-lingo: An educational game that teaches programming syntax for front end languages.',
//         'Hymeptera API: An open source API that collects information about the Order Hymenoptera, which includes ants, bees, and wasps.'
//       ]
//     },
//     {
//       company: 'Hack the Hood',
//       companyDescription: 'Hack the Hood is an award-winning non-profit that introduces low-income youth of color to careers in tech by hiring and training them to build websites for real small businesses in their own communities. During 6-week "Bootcamps," young people gain valuable hands-on experience, build a portfolio, and learn about opportunities in the tech industry, as well as building critical technical, leadership, entrepreneurship, and life skills with mentorship from staff and tech professionals working in the field.',
//       role: 'Tech Fellow',
//       roleDescription: 'Worked with the Lead Instructor and Jr. Instructor to deliver bootcamp curriculum and provide support for a classroom of 23 youth ages 16 - 20 and taught technical skills including use of CMS for website design, HTML, CSS, and Javascript as well as higher level computer science concepts.',
//       accomplishments: [
//         'Complete overhaul of bootcamp and coding class curriculum to keep up to date with industry standards',
//         'Introduction of spotlight lecture series to the class curriculum to provide supplementary content such as personal branding, blockchain, and digital privacy.'
//       ]
//     },
//     {
//       company: 'Hack the Hood',
//       companyDescription: 'Hack the Hood is an award-winning non-profit that introduces low-income youth of color to careers in tech by hiring and training them to build websites for real small businesses in their own communities. During 6-week "Bootcamps," young people gain valuable hands-on experience, build a portfolio, and learn about opportunities in the tech industry, as well as building critical technical, leadership, entrepreneurship, and life skills with mentorship from staff and tech professionals working in the field.',
//       role: 'Web Developer',
//       roleDescription: 'Worked with small business clients on their digital presence and business websites.',
//       accomplishments: [
//         'https://www.christinecueto.com/',
//         'https://www.kasiemobi.com/',
//         'http://www.nzinghazpalace.com/',
//         'http://www.grabembytheheart.com/'
//       ]
//     },
//     {
//       company: 'East Bay Agency for Children',
//       companyDescription: 'Sequoia Healthy Start (SHS) is a program provided by the East Bay Agency for Children (EBAC), in collaboration with community members, parents, teachers and administrators. Together, we have provided educational and family support services at Sequoia Elementary School since 2000. SHS exposes students to a variety of academic and enrichment activities, carried out in a safe and supportive environment. We support and encourage students to use their voice, build their character, and connect with their communities.',
//       role: 'Afterschool Instructor',
//       roleDescription: 'As a 3rd grade instructor, I helped developed new student-led conflict-management solutions and delivered not only curriculum in writing and math, but also programs for socio-emotional learning and community building with a restorative justice and trauma informed care lens. I worked with my students to create leadership roles with the goal of creating a self-sufficient, self-regulating classroom.',
//       accomplishments: ['Developed leadership opportunities with 3rd graders to build a robust community, resulting in a self-sufficient classroom. Students monitored each other\'s behavior and lead activities.']
//     },
//     {
//       company: 'Art and Architecture Library, Stanford University',
//       companyDescription: 'The Visual Resources Center (VRC) provides digital images for teaching and research at Stanford University through the ImageBase platform. The ImageBase, which consists of approximately 200,000 digital images including images licensed from Archivision and Scholars Resource, is accessible to all members of the Stanford community. Our collection strengths include American art, Chinese art, architecture, and photography.',
//       role: 'Curatorial Assistant',
//       roleDescription: 'Maintained and expanded the Art and Architecture Library’s visual resources database both online and in JStor. Prepared images for database by cleaning and sorting visual slides, scanning and documenting images, organizing and correcting the information in the database, and editing images in Photoshop.',
//       accomplishments: ['Automated the digital editing process to more efficiently produce images for the database', 'Processed upwards of 2500 images a day']
//     }
//   ],
//   education: [{
//       insitution: 'Stanford University',
//       datesAttended: 'Sept 2011 - June 2015',
//       credential: 'B.A. Art Practice',
//       notes: 'Matriculated with Interdisciplinary Honors in the Arts from the Stanford Arts Institute, Phi Beta Kappa Honors Society. Chappell-Lougee Scholarship Recipient. Raina-Giese Award for Creative Painting'
//     },
//     {
//       insitution: 'Hack the Hood',
//       datesAttended: '2018',
//       credential: 'Tech Ladder Academy, Tech Bootcamp',
//       notes: '6-week Bootcamps, young people gain valuable hands-on experience, build a portfolio, and learn about opportunities in the tech industry, as well as building critical technical, leadership, entrepreneurship, and life skills with mentorship from staff and tech professionals working in the field.'
//     },
//
//   ],
//   skills: [{
//       category: 'Front End',
//       skills: ['Javascript (ES6)', 'HTML5', 'CSS3', 'AJAX']
//     },
//     {
//       category: 'Server-Side',
//       skills: ['Django', 'MongoDB', 'Express', 'Mongoose', 'Node.js']
//     },
//     {
//       category: 'Back End',
//       skills: ['Python', 'Ruby', 'Java', 'C++']
//     },
//     {
//       category: 'Frameworks & Libraries',
//       skills: ['React', 'jQuery']
//     },
//     {
//       category: 'Design',
//       skills: ['Adobe Creative Suite', 'Sketch']
//     },
//     {
//       category: 'Version Control & Workflow',
//       skills: ['Git', 'Github', 'Trello', 'Agile']
//     },
//   ]
// }

const recommendedBooks = [{
    title: 'The Fifth Season',
    author: 'N K Jemisin',
    summary: `This is the way the world ends. Again.

Three terrible things happen in a single day. Essun, a woman living an ordinary life in a small town, comes home to find that her husband has brutally murdered their son and kidnapped their daughter. Meanwhile, mighty Sanze -- the world-spanning empire whose innovations have been civilization's bedrock for a thousand years -- collapses as most of its citizens are murdered to serve a madman's vengeance. And worst of all, across the heart of the vast continent known as the Stillness, a great red rift has been been torn into the heart of the earth, spewing ash enough to darken the sky for years. Or centuries.

Now Essun must pursue the wreckage of her family through a deadly, dying land. Without sunlight, clean water, or arable land, and with limited stockpiles of supplies, there will be war all across the Stillness: a battle royale of nations not for power or territory, but simply for the basic resources necessary to get through the long dark night. Essun does not care if the world falls apart around her. She'll break it herself, if she must, to save her daughter.`,
    isPartofSeries: true,
    keywords: ['science fiction', 'angry genius', 'women of color', 'tragic', 'magic', 'worldbuilding', 'speculative fiction', 'fantasy', 'dystopia', 'post-apocalyptic', 'lgbtq'],
    reasonsForRecommendation: ['Incredible prose', 'Interesting magic', 'Intricately interwoven narratives', 'Engrossing']
  },
  {
    title: 'Underbug: An Obsessive Tale of Termites and Technology ',
    author: 'Lisa Margonelli',
    summary: `The award-winning journalist Lisa Margonelli, national bestselling author of Oil on the Brain: Petroleum’s Long, Strange Trip to Your Tank, investigates the environmental and economic impact termites inflict on human societies in this fascinating examination of one of nature’s most misunderstood insects.

Are we more like termites than we ever imagined? In Underbug, the award-winning journalist Lisa Margonelli introduces us to the enigmatic creatures that collectively outweigh human beings ten to one and consume $40 billion worth of valuable stuff annually—and yet, in Margonelli’s telling, seem weirdly familiar. Over the course of a decade-long obsession with the little bugs, Margonelli pokes around termite mounds and high-tech research facilities, closely watching biologists, roboticists, and geneticists. Her globe-trotting journey veers into uncharted territory, from evolutionary theory to Edwardian science literature to the military industrial complex. What begins as a natural history of the termite becomes a personal exploration of the unnatural future we’re building, with darker observations on power, technology, historical trauma, and the limits of human cognition.

Whether in Namibia or Cambridge, Arizona or Australia, Margonelli turns up astounding facts and raises provocative questions. Is a termite an individual or a unit of a superorganism? Can we harness the termite’s properties to change the world? If we build termite-like swarming robots, will they inevitably destroy us? Is it possible to think without having a mind? Underbug burrows into these questions and many others—unearthing disquieting answers about the world’s most underrated insect and what it means to be human.`,
    isPartofSeries: false,
    keywords: ['entomology', 'bug stuff', 'termites', 'natural science', 'nonfiction', 'science', 'animals', 'biology', 'technology'],
    reasonsForRecommendation: ['Surprisingly engrossing', 'Interesting analysis aboout the nature of life', 'Realistic profile of the process of science']
  }
]
// db.Resume.deleteMany({}, (err, newResume) => {
//   if (err) throw err;
//   db.Resume.create(resume, (err, savedResume) => {
//     if (err) throw err;
//     console.log('Resume successfully created');
//   });
// });

db.Book.deleteMany({}, (err, newResume) => {
  if (err) throw err;
  for(let i = 0; i< recommendedBooks.length; i++){
    db.Book.create(recommendedBooks[i], (err, savedBook) => {
      if (err) throw err;
      console.log(`Saved ${savedBook}`);
    });
  }
  process.exit();
});
