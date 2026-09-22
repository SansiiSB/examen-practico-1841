class Table extends HTMLElement {

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
      .table-header {
        display: flex;
        justify-content: flex-end;
        padding: 1rem 0;
        border-bottom: 0.2rem solid hsl(7, 51%, 34%);
        margin-bottom: 1rem;
        position: relative;
      }

      .table-header .pagination {
        position: absolute;
        background-color: hsl(7, 51%, 34%);
        color: hsl(0, 0%, 100%);
        font-weight: 600;
        padding: 0.1rem 0.5rem;
        bottom: 0.01rem;
      }

      .pagination button {
        background-color: transparent;
        color: hsl(0, 0%, 100%);
        padding: 0.5rem 0.8rem;
        border: none;
        cursor: pointer;
      }

      .table-body {
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        font-weight: 500;
        border: 0.2rem solid hsl(7, 51%, 34%);
      }

      .table-body ul {
        list-style: none;
        padding: 0;
      }

      .table-body ul li {
        padding: 0.2rem;
        font-size: 0.9rem;
      }
    </style>
    <section class="table">
      <div class="table-header">
        <div class="pagination">
          <button>&lt;</button>
           <span>1/1</span> 
           <button>&gt; </button>
        </div>
      </div>

      <div class="table-body">
        <div class="table-element">
          <ul>
            <li><strong>Nombre:</strong> Eva Sansivieri</li>
            <li><strong>Email:</strong> ebasansibieri@gmail.com</li>
            <li><strong>Fecha de creación:</strong> 2026-09-22</li>
            <li><strong>Fecha de actualización:</strong> 2026-09-22</li>
          </ul>
        </div>
      </div>
    </section>
    `
  }
}

customElements.define('table-component', Table);