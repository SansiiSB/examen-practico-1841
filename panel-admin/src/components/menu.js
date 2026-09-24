class Menu extends HTMLElement {

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
      .menu-button svg {
        width: 2rem;
        height: 2rem;
        fill: white;
        cursor: pointer;
      }

      .menu-button svg:hover{
        fill: hsla(0, 0%, 55%, 1.00);
      }

      .menu-list{
        position: fixed;
        right: -10%;
        transition: right 0.2s;
        width: 10%;
      }

      .menu-list.active{
        right: 0;
      }

      .menu-list ul{
        list-style: none;
      }
    </style>

    <section class="menu">
      <div class="menu-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>menu</title>
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </div>

      <div class="menu-list">
        <ul>
          <li>Inicio</li>
        <ul>
      </div>
    </section>
    `
  }
}

customElements.define('menu-component', Menu);