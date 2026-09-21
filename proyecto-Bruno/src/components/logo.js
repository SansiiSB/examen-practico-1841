class Logo extends HTMLElement {

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
      .logo img {
        height: 3.5rem;
        display: block;
      }

      .logo a {
        display: flex;
        justify-content: flex-start;
        font-family: 'Anton', sans-serif;
        font-size: 1.6rem;
        color: hsl(0, 0%, 100%);
        text-decoration: none;
        letter-spacing: 1px;
      }

      .logo-symmetry {
        width: 2rem;
      }
    </style>

    <div class="logo">
      <a href="#">
        <img src="./Logos/Adobe Express - file.png" alt="Logo Symmetry">
        <img src="./Logos/logo.png" alt="Symmetry">
      </a>
    </div>
    `

  }

}

customElements.define('logo-component', Logo);