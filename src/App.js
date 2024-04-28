import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Badaa4dham from './Pages/Badaa4dham';
import Chhota4dham from './Pages/Chhota4dham';
import Badrinath from './Pages/B4Dham/Badrinath';
import Jagganath from './Pages/B4Dham/Jagganath';
import Rameshwaram from './Pages/B4Dham/Rameshwaram';
import Dwaraka from './Pages/B4Dham/Dwaraka';
import Aboutus from './Pages/Aboutus';
import Kedar from './Pages/C4Dham/Kedar';
import Ganga from './Pages/C4Dham/Ganga';
import Yamuna from './Pages/C4Dham/Yamuna';

function App() {
  // const path = window.location.pathname;
  // console.log(path);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bada4dham" element={<Badaa4dham />} />
          <Route path="/chhota4dham" element={<Chhota4dham />} />
          <Route path="/badrinath" element={<Badrinath />} />
          <Route path="/jagganath-puri" element={<Jagganath />} />
          <Route path="/rameshwaram" element={<Rameshwaram />} />
          <Route path="/dwaraka" element={<Dwaraka />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/kedarnath" element={<Kedar />} />
          <Route path="/Gangotri" element={<Ganga />} />
          <Route path="/Yamunotri" element={<Yamuna />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
