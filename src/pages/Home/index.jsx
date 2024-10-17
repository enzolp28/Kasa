import './App.scss'
import Header from '@/composants/header.jsx'
import Cart from './composants/cart.jsx'
import logements from '@/data/logements.json'

function Home() {
  console.log(logements);
  
  return (
    <>
      <Header />
      <div className="body">
          <div className="carts-display">
            {logements.map((logement) => (
              <Cart key={logement.id} titre={logement.title} image={logement.cover} url={`/logement/${logement.id}`}/>
            ))}
          </div>
      </div> 
    </>
  )
}

export default Home
