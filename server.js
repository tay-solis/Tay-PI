const express = require('express');
const app = express();

const port = 9001;

app.get('/', (req,res) =>{
  res.sendFile('/views/index.html', {root: __dirname});
});

app.use(express.static('public'));

app.listen(port, ()=>{ console.log (`App is listening at port: ${port}`)});
