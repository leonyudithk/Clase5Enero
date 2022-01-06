import { productosTienda } from "../data/data.js";

let formulario = document.querySelector('form')
let listar = document.getElementById('listarAqui');
let buscar = document.getElementById('btnBuscar');
let busqueda = document.getElementById('busqueda');
let arreglo = [];

const capturaDatos = () => {
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let descripcion = document.getElementById('descripcion').value;
    let precio = document.getElementById('precio').value;

    let registro = {
        nombre,
        fecha,
        descripcion,
        precio
    }

    arreglo.unshift(registro);
    localStorage.setItem('Agregar',JSON.stringify(arreglo));
    getLocalStorage();
  
}

formulario.addEventListener('submit', e => {
    e.preventDefault();
    capturaDatos();
})

const getLocalStorage = () =>{
listar.innerHTML = '';
let agregarLocalStorage = JSON.parse(localStorage.getItem('Agregar'));
console.log(agregarLocalStorage);
agregarLocalStorage.map(agregarPro => {
    const {nombre,fecha,descripcion, precio} = agregarPro;
    listar.innerHTML += `
                       <td>${nombre}</td>
                      <td>${descripcion}</td>
                        <td>${precio}</td>
                        <td>${fecha}</td>
    `   
 })
}

document.addEventListener('DOMContentLoaded',getLocalStorage);

/**Buscador */
buscar.addEventListener('click', e => {
    e.preventDefault();
    let input = document.getElementById('inputBuscar').value;
    let data = JSON.parse(localStorage.getItem('Agregar'));
    let filtro = data.filter(producto => producto.nombre.toLowerCase() === input.toLowerCase())
    busqueda.innerHTML = '';  
    //console.log(filtro)  
   
     filtro.length === 0 ?
          busqueda.innerHTML += `<div style="color:white;">El nombre ${input} no existe</div>`
          :
          (
            filtro.map(producto => { 
                const {nombre,descripcion, precio, fecha} = producto;
                busqueda.innerHTML += `
                                    <div style="color:white;">${'Producto: ', nombre}</div>
                                      <div style="color:white;">${'Descripcion: ', descripcion}</div>
                                    <div style="color:white;">${'Precio: ',precio}
                                    <div style="color:white;">${'Fecha ven: ',fecha}</div>
                                    <button>Borrar</Button></div><br>             
                `   
             })

          )
})



new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2008', value: 20, value2: 30},
      { year: '2009', value: 10, value2: 50 },
      { year: '2010', value: 5, value2: 10 },
      { year: '2011', value: 5, value2: 0 },
      { year: '2012', value: 20, value2: 10 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value', 'value2'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Frutas', 'Viveres '],
    resize:true,
     linecolors: ['#C14D9F', '#2CB4AC']
  });



  //*/////////Otra grafica///////////////////////

   new Morris.Bar({
    element: 'bar-example',
    data: [
      { y: '2006', a: 100, b: 90 },
      { y: '2007', a: 75,  b: 65 },
      { y: '2008', a: 50,  b: 40 },
      { y: '2009', a: 75,  b: 65 },
      { y: '2010', a: 50,  b: 40 },
      { y: '2011', a: 75,  b: 65 },
      { y: '2012', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B']
  });