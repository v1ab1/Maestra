import { useState } from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Slider } from './components/Slider';
import { Callback } from './components/Callback';

function App() {
  const [showCbk, setShowCbk] = useState(false);
  return (
    <div className="App">
      <Header />
      <NavBar setShowCbk={setShowCbk} />
      <Slider />
      {showCbk ? <Callback setShowCbk={setShowCbk} /> : null}
    </div>
  );
}

export default App;
