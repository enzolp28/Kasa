import './App.scss'
import Header from '@/composants/header.jsx'
import Cart from './composants/cart.jsx'
import { useEffect, useState } from 'react'

function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data/logements.json')
        const data = await response.json()
        setLogements(data)

      } catch (error) {
        console.error(error)
      }
    }
      fetchData()
    }, [])

  return (
    <>
      <Header />
      <div className="body">
        <div className="carts-display">
          {logements.map((logement) => (
            <Cart key={logement.id} titre={logement.title} image={logement.cover} url={`/logement/${logement.id}`} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
