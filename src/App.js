
import './App.css';
import Header from './header';
import { ParallaxProvider } from 'react-scroll-parallax';
import Name from './name';
import Myimg from './myimg';
import Contact from './Contact';
import By from './by';



function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Header/>
        <Name/>
        <Myimg/>
       
        <Contact/>
        <By/>
        </ParallaxProvider>
    </div>
  );
}

export default App;
