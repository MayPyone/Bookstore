import './component/styles/form.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Categories from './component/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
