import { useEffect, useState } from 'react'

function App() {
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/api/saludo')
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
  }, [])

  return (
    <div>
      <h1>AlmaActiva</h1>
      <p>{mensaje}</p>
    </div>
  )
}

export default App
