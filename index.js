const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.static('public'))

app.get('/hola',(req,res)=>{
res.send('Como estas?')
})

app.listen(port,()=>{
console.log('Funcionando')
})
jajaj