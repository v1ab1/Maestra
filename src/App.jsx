import { useState } from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Callback } from './components/Callback';
import { CallbackFinal } from './components/CallbackFinal';
import { Slider } from './components/Slider';
import { About } from './components/About';

function App() {
  const [showCbk, setShowCbk] = useState(false);
  const [showFinalCbk, setShowFinalCbk] = useState(false);
  return (
    <div className="App">
      <Header />
      <NavBar setShowCbk={setShowCbk} />
      {showCbk ? <Callback setShowCbk={setShowCbk} setShowFinalCbk={setShowFinalCbk} /> : null}
      {showFinalCbk ? <CallbackFinal setShowFinalCbk={setShowFinalCbk} /> : null}
      <Slider />
      <About />
    </div>
  );
}

export default App;
