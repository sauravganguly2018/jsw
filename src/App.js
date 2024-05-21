import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
// import Landing from './Pages/Landing/Landing';
import './App.css';
import './Variables.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontSizeProvider } from './Components/CommonComponents/FontSizeContext';

function App() {
  AOS.init({
    duration: 1000,
    once: false,
  });
  return (
    <Provider store={store}>
      <FontSizeProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/landing" element={<Landing />} /> */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Router>
      </FontSizeProvider>
    </Provider>
  );
}

export default App;
