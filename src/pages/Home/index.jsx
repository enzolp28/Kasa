
import './App.scss'
import Header from '@/composants/header.jsx'
import Cart from './composants/cart.jsx'
import logements from '@/data/logements.json'
import Footer from '@/composants/footer.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function Home() {
  console.log(logements);
  
  return (
    <>
      <Header />
      <div className="body">
          <div className="carts-display">
            {logements.map((logement) => (
              <Cart key={logement.id} titre={logement.title} image={logement.cover} url={logement.id}/>
            ))}
          </div>
      </div>
      <Footer />  
    </>
  )
}

export default Home
