/* Configuration */
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const port = 9001;

const db = require('./models');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* Hardcoded Data */
//Profile Data
const taySocialMedia = [{
    platform: 'instagram',
    link: 'https://www.instagram.com/alt.he.a/'
  }, {
    platform: 'twitter',
    link: 'https://twitter.com/octothorpedeep'
  },
  {
    platform: 'medium',
    link: 'https://medium.com/@tayjsolis'
  },
  {
    platform: 'github',
    link: 'https://github.com/tay-solis'
  }

]
const tayProfile = {
  name: 'Tay J Solis',
  wheelhouse: [
    'Speculative Fiction',
    'Fucked Up Utopias',
    'Angry Genius',
    'Science Fiction by People of Color',
    'Tapping Consciousness into some Magical/Digital Mass Consciousness',
    'Morally Grey Decisions',
    'Lies and Deception',
    'Competent Female Protagonist',
    'Queer Fiction by Queer People',
    'Antihero Redemption Arc',
    'Physics-As-Magic',
    'Natural Sciences',
    'Big Picture Thinking'
  ],
  image: 'https://media.giphy.com/media/QKkAQuxXD0IL7OjKkg/giphy.gif',
  email: 'tayjsolis@gmail.com',
  socialMedia: taySocialMedia,
  currentCity: 'Oakland, CA',
  personalSiteLink: 'https://tayjsolis.com/',
  portfolioSiteLink: 'http://manyhandscreative.com/'
}

/* Routes */
app.get('/', (req,res) =>{
  res.sendFile('/views/index.html', {root: __dirname});
});

//Returns personal information
app.get('/api/profile', (req, res) => {
  res.json(tayProfile);
});

//Returns full resume
app.get('/api/resume', (req, res) => {
  db.Resume.find()
    .exec((err, resume) => {
      if (err) throw err;
      res.json(resume);
    });
});

//Returns all recommended books
app.get('/api/books', (req, res)=>{
  db.Book.find()
    .exec((err, books) => {
      if (err) throw err;
      res.json(books);
    });
});

//Returns one book based on id
app.get('/api/books/:id', (req, res) =>{
  let bookId = req.params.id;
  db.Book.findOne({_id: bookId})
    .exec((err, foundBook) =>{
      if(err) throw err;
      res.json(foundBook);
    });
});

//Adds a new book to the book list
app.post('/api/books', (req, res) =>{
  let newBook = req.body;
  console.log(newBook);
      db.Book.create(newBook, (err, savedBook) =>{
        if (err) throw err;
        console.log(`Created ${newBook}`);
        res.json(newBook);
      });
  });

//Updates a book
app.put('/api/books/:id', (req,res) =>{
  let bookId = req.params.id;
  console.log("editing...")
  let updateBody = req.body;
  db.Book.findOneAndUpdate({_id: bookId}, updateBody, {new: true}, (err, updatedBook) =>{
    if(err) throw err;
    console.log(`updated ${updatedBook}`)
    res.json(updatedBook);
  })
});

//Deletes a book
app.delete('/api/books/:id', (req, res)=>{
  console.log('deleting...')
  let bookId = req.params.id;
  db.Book.findOneAndDelete({_id: bookId}, (err, deletedBook) =>{
    if(err) throw err;
    console.log(`Deleted ${deletedBook}`)
    res.json(deletedBook);
  });
});

app.listen(port, ()=>{ console.log (`App is listening at port: ${port}`)});
