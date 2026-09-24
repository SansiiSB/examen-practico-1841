class Table extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.labels = JSON.parse(this.getAttribute('labels'))
    console.log(this.labels)
  }

  connectedCallback() {
    this.loadData()
    this.render()
  }

  loadData() {
    this.data = [
      {
        producto: 'Eba Sansivieri',
        precio: 'ebasansibieri@gmail.com',
        fechaCreacion: '2026-09-22',
        fechaActualizacion: '2026-09-22'
      },
      {
        producto: 'Eba Sansivieri',
        precio: 'ebasansibieri@gmail.com',
        fechaCreacion: '2026-09-22',
        fechaActualizacion: '2026-09-22'
      }
    ]
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

      .table-body{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .table-element {
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        border: 0.2rem solid hsl(7, 51%, 34%);
      }

      .table-body ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        list-style: none;
        padding: 0;
      }

      .table-body ul li {
        line-height: 1.5rem;
        font-size: 0.9rem;
      }

      .table-body ul li span {
        font-weight: 600;
      }

      .table-body ul li span::after {
        content: ":";
        margin-right: 0.5rem;
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

      <div class="table-body"></div>
    </section>
    `

    const tableBody = this.shadow.querySelector('.table-body')

    this.data.forEach(element => {
      const tableElemenet = document.createElement('div')
      tableElemenet.classList.add('table-element')
      tableBody.appendChild(tableElemenet)

      const ul = document.createElement('ul')
      tableElemenet.appendChild(ul)

      Object.entries(element).forEach(([clave, valor]) => {
        const li = document.createElement('li')
        const strong = document.createElement('span')
        strong.textContent = this.labels[clave]

        li.textContent = valor
        li.prepend(strong)
        ul.appendChild(li)
      })
    })

  }
}

customElements.define('table-component', Table);