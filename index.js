const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.static('public'))

app.get('/',(req,res)=>{
res.send('Visitaste la pagina de inicio')
})

app.listen(port,()=>{
console.log('Funcionando')
})
