
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects';
import Misc from './sections/Misc';
// import Certificate from './sections/Certificate'; // Added import for Certificate
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Experience from './sections/Experience';
// import Carousel3D from './sections/Carousel3D';

const App = () => {
  return (
   
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <Misc/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App  
