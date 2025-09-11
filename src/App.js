import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Nav from './nav';
import Home from './pages/home';
import Portfolio from './pages/portfolio';

const NavBarLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBarLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
