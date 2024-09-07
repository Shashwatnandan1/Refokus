import './App.css'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Marquees from './Components/Marquees'
import NavBar from './Components/NavBar'
import Products from './Components/Products'
import Stripes from './Components/Stripes'
import Work from './Components/Work'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
 <div data-scroll-container className='w-full bg-zinc-900 text-white'>
  <NavBar/>
  <Work/>
  <Stripes/>
  <Products/>
  <Marquees/>
  <Cards/>
  <Footer/>
</div>

 
    </>
  )
}

export default App
