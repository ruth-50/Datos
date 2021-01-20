const express = require('express')
const app = express()

app.get('/',  (req, res)=> {
  let datos={
    nombre:'Brad',
    apellido:'Pit',
    profecion:'podologo',
    edad:90
  }
  res.send(datos)
  res.end();
})
 
app.listen(3000, ()=>{
  console.log('Escuchando este puerto:3000');
})
