class RecentChats extends HTMLElement {

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
      .recent-chats {
        height: 90%;
        margin-top: 1rem;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: hsl(0, 0%, 40%) transparent;
      }

      .recent-chats-container nav {
        display: flex;
        flex-direction: column;
      }

      .recent-chats-container nav a {
        padding: 0.5rem 0.75rem;
        border-radius: 0.5rem;
        color: hsl(0, 10%, 75%);
        text-decoration: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1rem;
      }

      .recent-chats-container nav a:hover {
        background-color: hsla(0, 0%, 100%, .08);
        color: hsl(0, 0%, 100%);
      }
    </style>
      <section class="recent-chats">
        <div class="recent-chats-container">
          <h2>Recientes</h2>
          <nav>
            <a href="#">Revisar barra de búsqueda</a>
            <a href="#">Pueblos bonitos de Mallorca</a>
            <a href="#">Ajustar botón CTA CSS</a>
            <a href="#">Transferir dinero a Santander</a>
            <a href="#">Mejorar calidad imagen</a>
            <a href="#">Sangrado nasal leve</a>
            <a href="#">Problema batería coche</a>
            <a href="#">Postcreditos Insidious</a>
            <a href="#">Hip trust, gluteos y pierna</a>
            <a href="#">Reserva restaurante cumpleaños</a>
            <a href="#">Dudas examen CSS</a>
            <a href="#">Plan de entrenamiento semanal</a>
            <a href="#">Receta de lentejas rápida</a>
            <a href="#">Cómo hacer curriculum</a>
            <a href="#">Traducir email al inglés</a>
          </nav>
        </div>
    </section>
    `
  }
}

customElements.define('recent-chats-component', RecentChats);