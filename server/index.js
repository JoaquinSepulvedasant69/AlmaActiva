const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Backend funcionando 🎉' })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`)
})
