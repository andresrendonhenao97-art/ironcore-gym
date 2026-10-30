import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal">
      <h1>Bienvenido a IronCore Gym</h1>
      <p>Entrena con fuerza. Transforma tu cuerpo. Supera tus límites.</p>

      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop"
        alt="Gimnasio moderno con equipos de pesas"
        className="imagen-destacada"
      />

      <br />
      <button
        className="boton-accion"
        onClick={() => setMostrarMensaje(!mostrarMensaje)}
      >
        {mostrarMensaje ? "Ocultar oferta" : "Descubrir oferta especial"}
      </button>

      {mostrarMensaje && (
        <p className="mensaje-sorpresa">
          ¡Felicidades! Tienes un 20% de descuento en tu primera membresía.
        </p>
      )}
    </main>
  );
}

export default SeccionPrincipal;