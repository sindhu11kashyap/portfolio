import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom';

import Home from './containers/home';

import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import NavBar from './components/navBar';
import ParticleEffect from './utils.js/particles';


function App() {

  const location = useLocation();

  const renderParticlesJsHomePage =location.pathname === "/";

  return (
    <div className="App">
           
           {
            renderParticlesJsHomePage && <ParticleEffect />
           }
          
    {/* Navbar component */}
    <NavBar />
    <div className='App_main_page_content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/resume' element={<Resume />} />
          <Route  path='/skills' element={<Skills />} />
          <Route  path='/portfolio' element={<Portfolio />} />
          <Route  path='/contact' element={<Contact />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
