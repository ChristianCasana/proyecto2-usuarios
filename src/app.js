const express = require('express')
const app = express()


module.exports = app

app.use(express.json())

const usersDB = []
let baseId = 1


//TODO Retorna todos los usuarios
app.get('/users', (req, res) => {
  res.status(200).json(usersDB)
})


//TODO Crea un nuevo usuario
app.post('/users', (req, res) => {
  const data = req.body

  const newUser = {
    id: baseId++,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    age: data.age
  }

  usersDB.push(newUser)
  res.status(201).json(newUser)
})


//TODO Retorna el usuario por ID
app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id)

  const data = usersDB.find((user) => user.id === id)

  if (data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({
      message: 'Invalid ID'
    })
  }
})


app.listen(9000, () => {
  console.log('Server started at port 9000');
})