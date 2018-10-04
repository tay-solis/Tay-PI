const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const port = 9001;

const db = require('./models');

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

app.get('/', (req,res) =>{
  res.sendFile('/views/index.html', {root: __dirname});
});

app.get('/api/resume', (req, res) => {
  db.Resume.find()
    .exec((err, resume) => {
      if (err) throw err;
      res.json(resume);
    });
});


app.use(express.static('public'));

app.listen(port, ()=>{ console.log (`App is listening at port: ${port}`)});
