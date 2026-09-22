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
        background-color: hsl(7, 51%, 34%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.1rem 2rem;
      }
    </style>

    <header>
      <slot></slot>
    </header>
    `
  }
}

customElements.define('header-component', Header);