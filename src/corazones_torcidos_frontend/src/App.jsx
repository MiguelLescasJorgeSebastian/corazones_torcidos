import React from "react";
import LoggedOut from "./components/LoggedOut";
import { useAuth, AuthProvider } from "./services/use-auth-client";
import LoggedIn from "./components/LoggedIn";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/welcome';
import Navbar from './components/navbar';
import PersonalizarTour from "./pages/PersonalizarTour";



function App() {
  const { isAuthenticated, identity } = useAuth();
  return (
    <Router>
      {isAuthenticated && <Navbar/>}
      <main id="pageContent">
        <Routes>
          <Route path="/login" element={<LoggedOut/>} />
          <Route path="/registro" element={<PersonalizarTour/>} />
          <Route path="/inicio" element={isAuthenticated ? <Welcome/> : null } />
          {/* Añade aquí otras rutas */}
        </Routes>
      </main>
    </Router>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);