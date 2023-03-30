import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Section from './components/Section'
import missionContent from './components/section_content/MissionContent'
import workContent from './components/section_content/WorkContent'
import giftContent from './components/section_content/GiftContent'

function App()
{

  return (
    <div className="App">
      <Hero />
      <Section title="My Mission">
        {missionContent}
      </Section>
      <Section title="My Work">
        {workContent}
      </Section>
      <Section title="My Gift">
        {giftContent}
      </Section>
      <Footer />
    </div>
  )
}

export default App
