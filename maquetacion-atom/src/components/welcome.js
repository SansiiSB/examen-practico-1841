class Welcome extends HTMLElement {

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
      .welcome-message h1 {
        font-family: Georgia, "Times New Roman", serif;
        font-size: 2rem;
        font-weight: 400;
      }
    </style>

    <div class="welcome-message">
      <h1>Hola, Eba.</h1>
    </div>
    `
  }
}

customElements.define('welcome-component', Welcome);