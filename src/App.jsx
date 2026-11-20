
import Navbar from './components/navbar';
import Home from './sections/home';
import About from './sections/about';
import Skills from './sections/skills';
import Projects from './sections/projects';
import Contact from './sections/contact';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
