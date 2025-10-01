import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Nav from './nav';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Login from './pages/login';
import Calculator from './pages/calculator';
import Recipe from './pages/recipe';

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
          <Route path="/recipe" element={<Recipe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
