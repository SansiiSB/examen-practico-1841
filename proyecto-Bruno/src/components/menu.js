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
      .header-right {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .lang-selector {
        position: relative;
      }

      .lang-selector summary {
        list-style: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: hsl(0, 0%, 100%);
      }

      .lang-selector summary::-webkit-details-marker {
        display: none;
      }

      .arrow-icon {
        width: 1.5rem;
        height: 1.5rem;
        transition: transform 0.2s ease;
      }

      .lang-selector[open] .arrow-icon {
        transform: rotate(180deg);
      }

      .lang-options {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 0.7rem;
        background: hsl(0, 0%, 5%);
        list-style: none;
        padding: 0.5rem 0;
        min-width: 6rem;
        border: 0.1rem solid hsl(0, 0%, 20%);
      }

      .lang-options li a {
        display: block;
        padding: 0.375rem 1rem;
        color: hsl(0, 0%, 100%);
        text-decoration: none;
        font-size: 0.8rem;
      }

      .lang-options li a:hover {
        color: hsl(355, 78%, 56%);
      }
    </style>

    <div class="header-right">
      <details class="lang-selector">
        <summary>
          ES
          <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
        </summary>
        <ul class="lang-options">
          <li><a href="/en">English</a></li>
          <li><a href="/es">Español</a></li>
        </ul>
      </details>
    </div>
    `

  }

}

customElements.define('menu-component', Menu);