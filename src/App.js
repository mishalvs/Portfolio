import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const appStyles = {
  backgroundColor: '#04021a',
  minHeight: '100vh',
  overflowX: 'hidden',
  paddingTop: '64px', // push content below fixed navbar
};

function App() {
  return (
    <div style={appStyles}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <SkillsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
