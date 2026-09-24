class Header extends HTMLElement {

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
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 5rem;
      background: hsl(0, 0%, 5%);
      border-bottom: 0.1rem solid hsl(355, 78%, 56%);
      position: sticky;
      top: 0;
      z-index: 1002;
    }
    </style>

    <header>
      <slot></slot>
    </header>
    `

  }

}

customElements.define('header-component', Header);