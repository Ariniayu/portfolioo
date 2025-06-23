import './App.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './components/header';
import About from './components/About';
import Porto from './components/Porto';
import Email from './components/Email';
import Desain from './Pages/Desain'; // <--- halaman tujuan
import VideoPortfolioPage from './Pages/Video';
import UIUX from './Pages/Ui';
// Komponen pembungkus supaya bisa akses location
function Wrapper() {
  const location = useLocation();
  const [bgClass, setBgClass] = useState("bg-gradient-to-br from-black via-gray-900 to-gray-800");

  useEffect(() => {
    if (location.pathname === "/desain") {
      setBgClass("bg-white text-black");
    } else {
      setBgClass("bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white");
    }
  }, [location.pathname]);

  return (
    <div className={`font-sans min-h-screen ${bgClass}`}>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #334155'
          },
        }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Header /> */}
              <About />
              <Porto />
              <Email />
            </>
          }
        />
        <Route path="/desain" element={<Desain />} />
        <Route path="/video" element={<VideoPortfolioPage />} />
        <Route path="/ui" element={<UIUX />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Wrapper />
    </Router>
  );
}
// export default App;
