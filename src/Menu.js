import React from "react";
import "./App.css";

function Menu() {
  return (
    <nav className="menu-navegacion">
      <h2 className="logo">IronCore Gym</h2>
      <ul>
        <li>Inicio</li>
        <li>Sobre Nosotros</li>
        <li>Clases</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Menu;