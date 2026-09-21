class Nav extends HTMLElement {

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
      nav .menu ul {
        display: flex;
        list-style: none;
        gap: 1.5rem;
      }

      nav .menu ul li a {
        position: relative;
        color: hsl(0, 0%, 100%);
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        padding-bottom: 0.5rem;
      }

      nav .menu ul li a::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0%;
        height: 0.1rem;
        background: hsl(355, 78%, 56%);
        transition: width 0.25s ease;
      }

      nav .menu ul li a:hover {
        color: hsl(355, 78%, 56%);
      }

      nav .menu ul li a:hover::after {
        width: 100%;
      }
    </style>

    <nav>
      <div class="menu">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">REGLAS DEL CLUB</a></li>
          <li><a href="#">ACTIVIDADES</a></li>
          <li><a href="#">HORARIOS</a></li>
          <li><a href="#">ENTRENADORES</a></li>
          <li><a href="#">PRECIOS Y PLANES</a></li>
          <li><a href="#">REGISTRATE</a></li>
          <li><a href="#">BLOG</a></li>
        </ul>
      </div>
    </nav>
    `

  }

}

customElements.define('nav-component', Nav);