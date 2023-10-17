const express = require('express');
const mongose = require('mongoose');
require('dotenv').config();

const app = express();
const db = module.exports = () => {
  const conParam = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  try{
    mongose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASS}@cluster0.inaynyz.mongodb.net/?retryWrites=true&w=majority`, conParam)
    console.log('Database connected succesfully')
  }catch(err){
    console.log(err)
    console.log('Database connection failed')
  }
}

db();

app.use(express.json());

const port = 8080;

app.get('/', (req, res) =>{
  const mahasiswa = [
    {
      nama: 'ardika',
      kelas: 'B',
    },
    {
      nama: 'ucok',
      kelas: 'A',
    },
    {
      nama: 'udin',
      kelas: 'B',
    }
  ]
  res.send(mahasiswa)
})

app.listen(port, () => {
  console.log(`app listening at port http://localhost:${port}`)
})
