import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Nav from './nav';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import Calculator from './pages/Calculator';

const NavBarLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<NavBarLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
