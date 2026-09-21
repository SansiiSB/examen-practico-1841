class PromptInput extends HTMLElement {

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

      .prompt-input-section {
        font-family: "Quicksand", sans-serif;
        position: absolute;
        top: 52%;
        left: 36%;
        width: 150%;
        max-width: 44rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        background-color: hsl(0, 13%, 24%);
        border-radius: 2rem;
      }

      .prompt-input-section input {
        flex: 1;
        border: none;
        outline: none;
        background: transparent;
        color: hsl(0, 0%, 100%);
        font-size: 1rem;
      }

      .prompt-input-section input::placeholder {
        color: hsl(0, 10%, 75%);
      }

      .prompt-input-icons {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .prompt-input-section button {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.5rem;
        border: none;
        border-radius: 1.25rem;
        background: transparent;
        color: hsl(0, 10%, 75%);
        cursor: pointer;
      }

      .prompt-input-section button svg {
        order: -1;
        width: 1.5rem;
        height: 1.5rem;
      }

      .prompt-input-section button:hover {
        background-color: hsla(0, 0%, 100%, .08);
      }

      .quick-actions {
        width: 100%;
        max-width: 44rem;
        display: flex;
        gap: 1rem;
      }

      .quick-actions button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border: 0.05rem solid hsla(0, 0%, 100%, .15);
        border-radius: 0.5rem;
        background: transparent;
        color: hsl(0, 0%, 100%);
        font-size: 1rem;
        cursor: pointer;
      }

      .quick-actions button:hover {
        background-color: hsla(0, 0%, 100%, .08);
      }

      .quick-actions button svg {
        order: -1;
        width: 1.5rem;
        height: 1.5rem;
      }
    </style>

    <div class="prompt-input-section">
      <button aria-label="Adjuntar archivo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <title>plus</title>
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
      </button>
      <input type="text" placeholder="Pregunta lo que quieras">

      <div class="prompt-input-icons">
        <button aria-label="Escuchar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <title>microphone</title>
            <path
              d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
          </svg>
        </button>

        <button aria-label="Enviar mensaje">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>arrow-up</title>
            <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
          </svg>
        </button>
      </div>
    </div>
    `
  }
}

customElements.define('prompt-input-component', PromptInput);