import Beams from '../components/Beams/Beams';
import TextPressure from '../components/TextPressure/TextPressure';
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <>
      <header className="header" role="banner" id="top">
        <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
          <Beams
            beamWidth={4}
            beamHeight={15}
            beamNumber={12}
            lightColor="#1d84f9"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div></div>
        <div className="header__text-box row">
          <TextPressure
            text="Hello!"
            flex={false}
            alpha={false}
            stroke={false}
            width={false}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={64}
          />
          <TextPressure
            text="I'm Joachim"
            flex={false}
            alpha={false}
            stroke={false}
            width={false}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={64}
          />
          <TextPressure
            text="Welcome to my portfolio"
            flex={true}
            alpha={false}
            stroke={false}
            width={false}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={64}
          />
          <TextPressure
            text="Scroll down to have a look"
            flex={true}
            alpha={false}
            stroke={false}
            width={false}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={64}
          />
        </div>
        <div className="scroll-indicator">
          <span className="scroll-arrow"></span>
        </div>
      </header>

      <main role="main">
        <Projects /> 
        <About />   
      </main>

      <Contact />   
      <Footer />     
      <ScrollToTop /> 
    </>
  );
}

export default App
