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
      .sidebar-header-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .sidebar-header-title button {
        background: transparent;
        border: none;
        color: hsl(0, 0%, 100%);
        cursor: pointer;
      }

      .sidebar-header-title button svg {
        width: 1rem;
        height: 1rem;
      }

      .sidebar-header-title a {
        color: hsl(0, 0%, 100%);
        text-decoration: none;
      }
    </style>

      <div class="sidebar-header-title">
        <a href="#">
          <h2>AtomGPT</h2>
        </a>
    </div>
    `
  }
}

customElements.define('logo-component', Logo);