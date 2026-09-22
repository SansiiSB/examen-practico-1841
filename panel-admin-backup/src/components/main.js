class Main extends HTMLElement {

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
      *{
        box-sizing: border-box;
      }
      
      main {
        display: grid;
        grid-template-columns: 1.5fr 4fr;
        padding: 1rem 2rem;
        width: 100%;
        gap: 4rem;
      }
    </style>

    <main>
      <slot></slot>
    </main>
    `
  }
}

customElements.define('main-component', Main);