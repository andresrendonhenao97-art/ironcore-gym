import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <>
      {/* ========== INICIO ========== */}
      <main id="inicio" className="seccion-principal">
        <h1>Bienvenido a IronCore Gym</h1>
        <p>Entrena con fuerza. Transforma tu cuerpo. Supera tus límites.</p>

        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=450&fit=crop"
          alt="Gimnasio moderno"
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

      {/* ========== SOBRE NOSOTROS ========== */}
      <section id="nosotros" className="seccion-nosotros">
        <h2>Sobre Nosotros</h2>
        <div className="nosotros-contenido">
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=350&fit=crop"
            alt="Entrenadores IronCore"
            className="imagen-nosotros"
          />
          <div className="texto-nosotros">
            <h3>Más que un gimnasio, una comunidad de guerreros</h3>
            <p>
              Fundado en 2018, <strong>IronCore Gym</strong> nació con una misión clara: 
              ayudar a personas reales a transformar su cuerpo y su mentalidad. 
              No somos un gimnasio más. Somos el lugar donde los límites se rompen.
            </p>
            <p>
              Contamos con más de 1.200 m² de espacio, equipos de última generación 
              y un equipo de entrenadores certificados que viven por el fitness.
            </p>
            <ul className="lista-valores">
              <li>🔥 Disciplina sin excusas</li>
              <li>💪 Resultados reales</li>
              <li>🤝 Comunidad que empuja</li>
              <li>⚡ Energía constante</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== CLASES ========== */}
      <section id="clases" className="seccion-clases">
        <h2>Nuestras Clases</h2>
        <p className="subtitulo-clases">Entrena a tu ritmo. Elige tu batalla.</p>

        <div className="grid-clases">
          <div className="tarjeta-clase">
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop" alt="Pesas" />
            <h3>Fuerza & Pesas</h3>
            <p>Desarrolla músculo, potencia y resistencia con rutinas de hipertrofia y fuerza máxima.</p>
          </div>

          <div className="tarjeta-clase">
            <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f14f?w=400&h=250&fit=crop" alt="CrossFit" />
            <h3>CrossFit Iron</h3>
            <p>Alta intensidad, movimientos funcionales y competencia sana. ¡Suda de verdad!</p>
          </div>

          <div className="tarjeta-clase">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop" alt="Boxeo" />
            <h3>Boxeo & Combate</h3>
            <p>Técnica, velocidad y descarga de estrés. Ideal para quemar calorías y ganar confianza.</p>
          </div>

          <div className="tarjeta-clase">
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop" alt="Spinning" />
            <h3>Spinning Power</h3>
            <p>Pedalea al ritmo de la música. Quema hasta 800 calorías por clase.</p>
          </div>

          <div className="tarjeta-clase">
            <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=250&fit=crop" alt="Yoga" />
            <h3>Yoga & Movilidad</h3>
            <p>Recupera, estira y conecta cuerpo y mente. Perfecto para después de entrenar duro.</p>
          </div>

          <div className="tarjeta-clase">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop" alt="Funcional" />
            <h3>Entrenamiento Funcional</h3>
            <p>Movimientos del día a día mejorados. Ideal para principiantes y avanzados.</p>
          </div>
        </div>
      </section>

      {/* ========== CONTACTO ========== */}
      <section id="contacto" className="seccion-contacto">
        <h2>Contacto</h2>
        <p className="subtitulo-contacto">¿Listo para empezar tu transformación?</p>

        <div className="contacto-grid">
          <div className="info-contacto">
            <h3>📍 Ubicación</h3>
            <p>Calle del Hierro 45<br />Centro Comercial Atlas, Local 12<br />Bogotá, Colombia</p>

            <h3>📞 Teléfono</h3>
            <p>+57 300 123 4567</p>

            <h3>🕒 Horarios</h3>
            <p>
              Lunes a Viernes: 5:00 AM – 10:00 PM<br />
              Sábados: 7:00 AM – 8:00 PM<br />
              Domingos: 8:00 AM – 2:00 PM
            </p>

            <h3>📱 Redes</h3>
            <p>@ironcoregym · Instagram · TikTok · Facebook</p>
          </div>

          <div className="formulario-contacto">
            <h3>Escríbenos</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert("¡Mensaje enviado! Te contactaremos pronto."); }}>
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu correo" required />
              <textarea placeholder="¿En qué podemos ayudarte?" rows="5" required></textarea>
              <button type="submit" className="boton-accion">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SeccionPrincipal;