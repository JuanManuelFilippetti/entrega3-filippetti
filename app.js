import express from 'express'
import usersManager from './UserManager.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const users = [
  { id: 1, name: "Juan", last_Name: "Espinosa", age: 23 },
  { id: 2, name: "Luis", last_Name: "Carilo", age: 30 },
  { id: 3, name: "Jorge", last_Name: "Gutierrez", age: 35 },
  { id: 4, name: "Carolina", last_Name: "Mendoza", age: 50 }
];

app.get("/", (req,res) => {
  //const users = await usersManager.getUsers();
  //const user = await usersManager.getUserById();
  const limit = req.query;
  
  if (!limit || limit !== id) {
  console.log(id);
    return res.send({
      users,
    });
  } 
  
  const usersLimit = limit.filter((users) => users.id === id);
      return res.send({
      users : usersLimit,
      });
});


// rutas
//get 
app.get('/api/users', async (req, res) => {
  try {
    const users = await usersManager.getUsers()
    res.status(200).json({ message: 'Users', users })
  } catch (error) {
    res.status(500).json({ error })
  }
})

app.get('/api/users/:idUser', async (req, res) => {
  const { idUser } = req.params
  try {
    const user = await usersManager.getUserById(+idUser)
    res.status(200).json({ message: 'User', user })
  } catch (error) {
    res.status(500).json({ error })
  }
})

//post
app.post('/api/users',async(req,res)=>{
    console.log(req.body);
    try {
        const newUser = await usersManager.createUser(req.body)
        res.status(200).json({ message: 'User created', user: newUser })
    } catch (error) {
        res.status(500).json({ error })
    }
})

// delete
app.delete('/api/users/:idUser',async(req,res)=>{
    const {idUser} = req.params
try {
    const response = await usersManager.deleteUser(+idUser)
    res.status(200).json({message:'User deleted'})
} catch (error) {
    res.status(500).json({ error })
}
})

// update
app.put('/api/users/:idUser',async(req,res)=>{
    const {idUser} = req.params
    try {
        const userUpdated = await usersManager.updateUser(+idUser,req.body)
        res.status(200).json({message: 'User updated'})
    } catch (error) {
        res.status(500).json({ error })
    }
})

app.listen(8080, () => {
  console.log('Escuchando al puerto 8080')
})








/*
app.get("/", (req, res) => {
  const genero = req.query.genero;

  if (!genero || (genero !== "M" && genero !== "F")) {
    return res.send({
      users,
    });
  }

  const usersFilter = users.filter((usu) => usu.genero === genero);

  res.send({
    users: usersFilter,
  });
});
*/




/*
app.get("/api/limit", (req, res) => {
  const limit = req.query.limit

  if (limit === id) {
    console.log(limit)
    res.status(200).json({ message: 'Users', users })

    } res.send(usuarios)
    
  }
)
*/
