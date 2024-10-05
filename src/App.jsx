import About from "./components/About/About";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import Qualifications from "./components/Qualifications/Qualifications";
import Services from "./components/services/Services";
import Skills from "./components/Skills/Skills";
import './index.css';

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Services/>
        <Qualifications/>
      </main>

    </>
  )
}

export default App
