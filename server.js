/* Configuration */
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const port = 9001;

const db = require('./models');

app.use(express.static('public'));


/* Hardcoded Data */
//Profile Data
const taySocialMedia = [{
    platform: 'Instagram',
    link: 'https://www.instagram.com/alt.he.a/'
  }, {
    platform: 'Twitter',
    link: 'https://twitter.com/octothorpedeep'
  },
  {
    platform: 'Medium',
    link: 'https://medium.com/@tayjsolis'
  },
  {
    platform: 'Github',
    link: 'https://github.com/tay-solis'
  }

]
const tayProfile = {
  name: 'Tay J Solis',
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
app.post('api/books', (req, res) =>{
  let newBook = req.body;
  db.Book.find({title: req.body.title, author: req.body.author}, (err, foundBook) =>{
    if(err) throw err;
    if(foundBook == null){
      db.Book.create(newBook, (err, savedBook) =>{
        if (err) throw err;
        console.log(`Created ${newBook}`);
        res.json(newBook);
      });
    } else{
      console.log('Book already exists.');
    }
  });
});

//Updates a book
app.put('/api/books/:id', (req,res) =>{
  let bookId = req.params.id;
  let updateBody = req.body;
  db.Book.findOneAndUpdate({_id: bookId}, updateBody, {new: true}, (err, updatedBook) =>{
    if(err) throw err;
    console.log(`updated ${updatedBook}`)
    res.json(updatedBook);
  })
});

//Deletes a book
app.delete('/api/books/:id', (req, res)=>{
  let bookId = req.params.id;
  db.Book.findOneAndDelete({_id: bookId}, (err, deletedBook) =>{
    if(err) throw err;
    console.log(`Deleted ${deletedBook}`)
    res.son(deletedBook);
  });
});

app.listen(port, ()=>{ console.log (`App is listening at port: ${port}`)});
