(async () => {

  const fs = require('fs/promises')

  try {

    let dataAfiliados = await fs.readFile('../estadisticas-laborales/data/normalizacion-afiliados-por-municio-sexo.json', 'utf-8')
    let dataParados = await fs.readFile('../estadisticas-laborales/data/normalizacion-parados-por-municipio-sexo.json', 'utf-8')
    dataAfiliados = JSON.parse(dataAfiliados)
    dataParados = JSON.parse(dataParados)

    filterDataParados = dataParados.filter(element => {
      return element.cantidad !== null
    })














    await fs.writeFile('./data/porcentaje.json', JSON.stringify(filterData, null, 2))
  } catch (error) {
    console.log(error)
  }
})()