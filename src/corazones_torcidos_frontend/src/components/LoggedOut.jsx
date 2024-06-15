import React from "react";
import { useAuth } from "../services/use-auth-client";
import '../style/main.css'; // Asegúrate de importar tu archivo CSS

function LoggedOut() {
  const { login } = useAuth();

  return (
    <div className="loggedout-container">
      <h1>Cliente de Identidad de Internet</h1>
      <h2>No estás autenticado</h2>
      <p>Para iniciar sesión, ¡haz clic en este botón!</p>
      <button type="button" id="loginButton" className="loggedout-button" onClick={login}>
  Iniciar sesión
</button>
    </div>
  );
}

export default LoggedOut;