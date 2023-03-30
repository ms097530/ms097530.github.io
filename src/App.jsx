import './App.css'
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import Section from './components/Section'
import Mission from './components//sections/Mission'
import Projects from './components/sections/Projects'
import Gift from './components/sections/Gift'
import Footer from './components/Footer'

function App()
{

  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Section title="My Mission">
        <Mission />
      </Section>
      <Section title="My Projects">
        <Projects />
      </Section>
      <Section title="My Gift">
        <Gift />
      </Section>
      <Footer />
    </div>
  )
}

export default App
