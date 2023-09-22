import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const btnLoad = document.querySelector('.btn-primary');
const info = document.querySelector('.info');
const printError = document.querySelector('.error');

btnLoad.addEventListener('click', () => {
  info.innerHTML = "Cargando...";
  fetch('https://jsonplaceholder.typicode.com/posts/1', {method : 'GET', body: "Hola"})
    .then((response) => {
      const {headers, status, statusText, url, type, ok} = response;
      console.log("headers:", headers.get('Content-Type'));
      console.log("status:", status);
      console.log("statusText:", statusText);
      console.log("url:", url);
      console.log("type:", type);
      console.log("ok:", ok);
      
      if (!ok) {
        throw new Error(status); 
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      info.innerHTML = template(data.title, data.body);
      // info.innerHTML += JSON.stringify(data);
    })
    .catch((error) => {
      console.log("error")
      printError.innerHTML = error;
    })
    .finally(() => {
      console.log("Terminó");
    })
})

const template = (nombre, body) => `
  <div class="card p-1 text-lg-center">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">${body}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
`  





/* document.querySelector('#app').innerHTML = 
  ` <h2 class = "text-center"> Clase 21 de Septiembre </h2>
    <p> Promesas en Javascript </p>
    <button class = "btn btn-primary"> Descargar archivo </button>
  ` 
 
function downloadFile(url = '', status = false) {
  return new Promise((resolve, reject) => {
    const state = true
    setTimeout(() => {
      if (state) {
        const filedata = 'PDF Javascripts Avanzado - Promesas'
        resolve(filedata, {status: 200})        
      } else {
        // throw new Error ("Cualquier cosa")
        reject({
          status : 404,
          ok: false,
          description: "Solicitu no permitida",
          message : 'Cualquier cosa'
        })
      }
    }, 2000)
  })
}

downloadFile('https://www.google.com', false)
  .then((datafile) => {
    console.log("Archivo descargado", datafile)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      console.log("Terminó")
    })
 

async function getFileData(status = false) {
  try {
    const response = await downloadFile('https://www.google.com', false);
    console.log(response)
  } catch (error) {
    console.log(error)
  }
  console.log("Solicitud de datos finalizada")  
}

getFileData(true)

*/