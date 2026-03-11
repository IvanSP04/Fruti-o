import { useState } from "react";
import "./Hero.css";

function Hero() {
  const [tipoPedido, setTipoPedido] = useState("llevar");

  const heroData = {
    titulo: "Bienvenidos a Food House Btá ✨",
    subtitulo: "TU MEJOR ELECCIÓN",
    direccion: "Cra. 20a # 39-39, Rafael Uribe Uribe, Bogotá, D.C., Colombia",
    boton: "Realiza tu pedido aquí",
  };

  const tipos = [
    { id: 1, nombre: "Para llevar", value: "llevar", icono: "🛍️" },
    { id: 2, nombre: "A domicilio", value: "domicilio", icono: "🛵" },
  ];

  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-left">

          <div className="hero-logo">
            <div className="logo-circle">
              <span className="logo-text-top">FOOD</span>
              <span className="logo-text-main">HOUSE</span>
              <span className="logo-text-bottom">Btá</span>
            </div>
          </div>

          <h1>{heroData.titulo}</h1>

          <p className="subtitulo">{heroData.subtitulo}</p>

          <div className="hero-opciones">
            {tipos.map((tipo) => (
              <span
                key={tipo.id}
                className={`hero-opcion ${tipoPedido === tipo.value ? "activo" : ""}`}
                onClick={() => setTipoPedido(tipo.value)}
              >
                <span className="opcion-icono">{tipo.icono}</span>
                {tipo.nombre}
              </span>
            ))}
          </div>

          <p className="direccion">
            <span className="direccion-icono">📍</span>
            {heroData.direccion}
          </p>

        </div>

        <div className="hero-right">
          <button className="hero-btn">{heroData.boton}</button>
        </div>

      </div>
    </section>
  );
}

export default Hero;