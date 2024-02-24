import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import JustHeader from './Components/Small Section/JustHeader';
import Testimonial from './Components/Testimonial/Testimonial';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <Home />
      <Navbar/>
      <JustHeader/>
      <About/>
      <Testimonial />
      <Footer/>
    </div>
  );
}

export default App;
