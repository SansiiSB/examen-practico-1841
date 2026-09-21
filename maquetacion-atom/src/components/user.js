class User extends HTMLElement {

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
      .user-info {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;
      }

      .user-avatar {
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: hsl(160, 60%, 40%);
        color: hsl(0, 0%, 100%);
        font-weight: 600;
      }

      .user-details {
        display: flex;
        flex-direction: column;
      }

      .user-details span:last-child {
        color: hsl(0, 10%, 75%);
      }
    </style>

    <div class="user-info">
      <div class="user-avatar">
        <span>EB</span>
      </div>
      <div class="user-details">
        <span>Eba</span>
      </div>
    </div>
    `
  }
}

customElements.define('user-component', User);