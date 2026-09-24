class List extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.loadData()
    this.render()
  }

  loadData() {
    this.data = [
      {
        title: 'HOME',
        href: '#'
      },
      {
        title: 'REGLAS DEL CLUB',
        href: '#'
      },
      {
        title: 'ACTIVIDADES',
        href: '#'
      },
      {
        title: 'HORARIOS',
        href: '#'
      },
      {
        title: 'ENTRENADORES',
        href: '#'
      },
      {
        title: 'PRECIOS Y PLANES',
        href: '#'
      },
      {
        title: 'REGISTRATE',
        href: '#'
      },
      {
        title: 'BLOG',
        href: '#'
      }
    ]
  }

  render() {
    this.shadow.innerHTML =
    /*html*/`
    <style>

      .menu ul {
        display: flex;
        list-style: none;
        gap: 1.5rem;
        cursor: pointer;
      }

      .menu ul li {
        position: relative;
        color: hsl(0, 0%, 100%);
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        padding-bottom: 0.5rem;
      }

      .menu ul li::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0%;
        height: 0.1rem;
        background: hsl(355, 78%, 56%);
        transition: width 0.25s ease;
      }

      .menu ul li:hover {
        color: hsl(355, 78%, 56%);
      }

      .menu ul li:hover::after {
        width: 100%;
      }
    </style>

      <div class="menu">
        <ul>
        </ul>
      </div>
    `

    const ul = this.shadow.querySelector('ul')

    this.data.forEach(item => {
      const li = document.createElement('li')
      li.href = item.href
      li.textContent = item.title
      ul.appendChild(li)
    });

  }

}

customElements.define('list-component', List);