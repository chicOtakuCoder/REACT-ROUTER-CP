import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trailer from './pages/Trailer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path= '/trailer/:id' element= {<Trailer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
