class Form extends HTMLElement {

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
      .tab-bar {
        display: flex;
      }

      .tab {
        background-color: hsl(7, 51%, 34%, 0.5);
        color: hsl(0, 0%, 100%);
        padding: 0.5rem 1rem;
        font-weight: bold;
        cursor: pointer;
      }

      .tab.active{
        background-color: hsl(7, 51%, 34%);
      }

      .tab:hover{
        background-color: hsl(7, 51%, 44%);
      }
      
      .tab-buttons button:hover{
        background-color: hsl(7, 51%, 44%);
      }

      .form-header{
        border-bottom: 0.2rem solid hsl(7, 51%, 34%);
        display: flex;
        justify-content: space-between;
      }

      .form-body {
        background-color: hsl(0, 0%, 100%);
        padding: 2.5rem;
      }

      .input-row {
        display: flex;
        gap: 2rem;
      }

      .input-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 50%;
      }

      .input-container input {
        width: 100%;
        height: 2.5rem;
        border: 0.1rem solid hsl(0, 0%, 78%);
      }

      .form form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .tab-content{
        display: none;
      }

      .tab-content.active{
        display: block;
      }

      .tab-buttons{
        display: flex;
        gap: 0.2rem;
      }

      .tab-buttons button{
        align-items: center;
        display: flex;
        border: none;
        cursor: pointer;
        background-color: hsl(7, 51%, 34%);
      }

      .tab-buttons svg{
        fill: hsl(0, 0%, 100%);
        width: 1.5rem;
        height: 1.5rem;
      }
    </style>

      <section class="form">
        <div class="form-header">
          <div class="tab-bar">
            <div class="tab active" data-tab="general">General</div>
            <div class="tab" data-tab="images">Images</div>
          </div>
          <div class="tab-buttons">
            <button class="clean" title="Limpiar"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg></button>
            <button class="save" title="Guardar"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg></button>
          </div>
        </div>

        <div class="form-body">
          <form>
            <div class="tab-content active" data-tab="general">
              <div class="input-row">
                <div class="input-container">
                  <label for="nombre"><strong>Nombre</strong></label>
                  <input type="text" id="nombre" name="nombre">
                </div>

                <div class="input-container">
                  <label for="email"><strong>Email</strong></label>
                  <input type="email" id="email" name="email">
                </div>
              </div>
            </div>
            <div class="tab-content" data-tab="images">
              <div class="input-row">
                <div class="input-container">
                  <label for="nombre"><strong>Nombre</strong></label>
                  <input type="text" id="nombre" name="nombre">
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    `

    this.shadow.querySelector('.form').addEventListener('click', event => {
      if (event.target.closest('.tab')) {
        const tab = event.target.closest('.tab')

        this.shadow.querySelector('.tab.active').classList.remove('active')
        tab.classList.add('active')

        this.shadow.querySelector('.tab-content.active').classList.remove('active')
        this.shadow.querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`).classList.add('active')
      }
    })

  }
}

customElements.define('form-component', Form);