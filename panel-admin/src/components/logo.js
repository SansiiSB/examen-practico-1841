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
      .header-title {
        font-size: 0.8rem;
        color: hsl(0, 0%, 100%);
      }
    </style>

    <div class="header-title">
      <h1>AtomGPT - Usuarios</h1>
    </div>
    `
  }
}

customElements.define('logo-component', Logo);