import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Vinos from './Pages/Vinos';
import Carga from './Pages/Carga';
/* import Error from './Pages/Error'; */

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vinos' element={<Vinos />} />
        <Route path='/carga' element={<Carga />} />
        {/* <Route path='*' errorElement={<Error />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
