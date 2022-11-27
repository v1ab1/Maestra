import Header from './components/Header';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import { Callback } from './components/Callback';

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Slider />
      <Callback />
    </div>
  );
}

export default App;
