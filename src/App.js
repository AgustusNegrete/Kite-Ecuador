import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './views/Main'
import Kitesurf from './views/Kitesurf';
import Foil from './views/Foil';
import Surf from './views/Surf';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="kitesurf" element={<Kitesurf/>} />
          <Route path="foil" element={<Foil />} />
          <Route path="surf" element={<Surf/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
