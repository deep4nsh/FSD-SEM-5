import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', gap: '20px', padding: '20px', marginTop: '80px' }}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App