import { useState } from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Slider } from './components/Slider';
import { Callback } from './components/Callback';
import { CallbackFinal } from './components/CallbackFinal';

function App() {
  const [showCbk, setShowCbk] = useState(false);
  const [showFinalCbk, setShowFinalCbk] = useState(false);
  return (
    <div className="App">
      <Header />
      <NavBar setShowCbk={setShowCbk} />
      <Slider />
      {showCbk ? <Callback setShowCbk={setShowCbk} setShowFinalCbk={setShowFinalCbk} /> : null}
      {showFinalCbk ? <CallbackFinal /> : null}
    </div>
  );
}

export default App;
