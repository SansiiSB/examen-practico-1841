class Hero extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      .hero {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100vh;
      }

      .square {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: hsla(0, 0%, 0%, 0.5);
        z-index: 1000;
        opacity: 1;
      }

      .hero-image {
        position: absolute;
        width: 100%;
        height: 95%;
        overflow: hidden;
      }

      .hero-image img {
        width: 100%;
        object-fit: cover;
      }

      .hero-call-to-action {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .hero-title {
        position: absolute;
        text-shadow: 0 0 0.3rem hsl(0, 0%, 0%);
        top: 17%;
        left: 40%;
        transform: translate(-50%, -50%);
        font-size: 2.5rem;
        color: hsl(0, 0%, 100%);
        z-index: 1001;
      }

      .hero-call-to-action::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: hsla(0, 0%, 0%, 0.5);
        z-index: 1000;
      }

      .hero-subtitle {
        position: absolute;
        font-family: 'Alumni Sans', sans-serif;
        text-shadow: 0 0 0.3rem hsl(0, 0%, 0%);
        top: 30%;
        left: 29%;
        transform: translate(-50%, -50%);
        font-size: 1.8rem;
        color: hsl(0, 0%, 100%);
        z-index: 1001;
      }

      .hero-description {
        position: absolute;
        top: 40%;
        left: 20%;
        transform: translate(-50%, -50%);
        z-index: 1001;
      }

      .hero-description h2{
        font-family: "Notable", sans-serif;
        font-weight: 400;
        font-style: normal;
        text-shadow: 2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white ,-2px 2px 0 white, 0 0 0.2rem hsl(0, 0%, 0%);
        font-size: 2.5rem;
        color: hsl(355, 66%, 48%);
      }

      .hero-cta {
        display: inline-block;
        padding: 0.5rem 1.2rem;
        background: hsl(355, 78%, 56%);
        color: hsl(0, 0%, 100%);
        font-family: 'Oswald', sans-serif;
        font-weight: 800;
        font-size: 1.3rem;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        text-decoration: none;
        clip-path: polygon(0 0, 100% 0, 100% 70%, 92% 100%, 0 100%);
        transition: background 0.25s ease, transform 0.25s ease;
        position: absolute;
        top: 45%;
        left: 13%;
        z-index: 1001;
      }

      .hero-cta:hover {
        background: hsl(0, 0%, 0%);
        color: hsl(355, 78%, 56%);
        transform: translateX(-5%);
      }
    </style>

    <section class="hero">
      <div class="hero-image">
        <img src="./imagenes/foto-portada.webp" alt="Hero">
      </div>
      <div class="hero-title">
        <h1>MÁS QUE UN GIMNASIO</h1>
      </div>

      <div class="square">
        <div class="square-black"></div>
      </div>

      <div class="hero-subtitle">
        <p>Entrena más. Entiende mejor. Progresa más rápido.
          <br>Ejercicios, rutinas y entrenamiento de fuerza en un solo
          lugar.
        </p>
      </div>

      <div class="hero-description">
        <h2>Únete al club</h2>
      </div>
      <a href="#" class="hero-cta">Empieza ahora</a>
    </section>
    `
  }
}

customElements.define('hero-component', Hero);