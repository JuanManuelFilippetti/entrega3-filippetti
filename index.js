import express from 'express'

const usuarios = [
    { id: "1", nombre: "Juan", apellido: "Espinosa", edad: 23},
    { id: "2", nombre: "Luis", apellido: "Carilo", edad: 30},
    { id: "3", nombre: "Maria", apellido: "Tiza", edad: 48}
]


const app = express()

app.get('/saludo',(request,response)=>{
    console.log(request.query);
    response.send('Hola a todos nuevamente')
})

app.get('/despedida',(req,res)=>{
    res.send('Nos vemos pronto')
})

app.get('/regreso',(req,res)=>{
    res.json({message:'Usuarios encontrados',usuarios})
})




app.listen(8080,()=>{
    console.log('Servidor creado con express: Escuchando al puerto 8080');
})