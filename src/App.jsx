import './App.css';
import { Consult } from './components/consult/Consult';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { Offers } from './components/offers/Offers';
import { Participations } from './components/Participations/Participations';
import { Programs } from './components/programs/Programs';
import { Testimonials } from './components/testimonials/Testimonials';

function App() {
  return (
    <div className='app'>
     <Home />
     <Programs />
     <Participations />
     <Offers />
     <Testimonials />
     <Consult />
     <Footer />
    </div>
  )
}

export default App
