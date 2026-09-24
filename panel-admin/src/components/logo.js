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
      h1 {
        font-size: 1.8rem;
        color: hsl(0, 0%, 100%);
      }
    </style>

    <div class="title">
      <h1>AtomGPT - Usuarios</h1>
    </div>
    `
  }
}

customElements.define('logo-component', Logo);