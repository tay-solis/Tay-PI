# Tay-PI
by Tay J Solis | General Assembly Web Development Immersive

This project is a database of information about myself that can be accessed through a RESTful API.


## Technologies
- MongoDB with mongoose
- Express
- Heroku
- HTML5
- CSS
- Javascript ES6

## Features
**Who I Am**
Some basic personal information will be available through the API. This includes my birthday, contact information, social media links, personal site links, etc.

**Resume**
My full-length resume, including education, experience, and skills.

**Recommended Books List**
A database of recommended books. If your wheelhouse includes speculative science fiction written by women and nonbinary folks of color, natural science, biology textbooks, or critical race theory, then boy howdy do I have recs for you.

## Documentation
**Documentation URL** https://github.com/tay-solis/Tay-PI

**Base Url**

### End points
``` Javascript
[
  {
    method: 'GET',
    path: '/api',
    description: 'Describes all available endpoints'
  },
  {
    method: 'GET',
    path: '/api/profile',
    description: 'Returns personal information'
  },
  {
    method: 'GET',
    path: '/api/resume',
    description: 'Returns full resume'
  },
  {
    method: 'PUT',
    path: '/api/books/:id',
    description: 'Edits an existing piece book recommendation based on id'
  },
  {
    method: 'GET',
    path: '/api/books',
    description: 'Returns recommended books'
  },
  {
    method: 'POST',
    path: '/api/books',
    description: 'Adds book to recommended book list'
  },
  {
    method: 'DELETE',
    path: '/api/books/:id',
    description: 'Destroys a recommended book'
  }
]
```
