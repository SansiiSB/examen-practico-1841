class Button extends HTMLElement {

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

        button {
          background: transparent;
          border: none;
          color: hsl(0, 0%, 100%);
          cursor: pointer;
          padding: 0;
        }

        button svg {
          width: 1rem;
          height: 1rem;
          fill: currentColor;
        }

      </style>

      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>page-layout-sidebar-right</title>
          <path d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0 1 6,2M14,8V16H18V8H14Z" />
        </svg>
      </button>
    `
  }
}

customElements.define('button-component', Button)