let input = document.getElementById('inputBuscar');
let btn = document.getElementById('btnBuscar');
let container = document.getElementById('contenedor');

const URL = 'https://images-api.nasa.gov/search?q=';

function showSearch(array) {
    for(let item of array) {
        console.log(item);
        container.innerHTML += `
    <div class="d-flex">
            <div class="col-md-10 offset-md-1">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src=${item.links[0].href}>
                <div class="card-body">
                  <h6>${item.data[0].title}</h6>
                  <p class="card-text">${item.data[0].description_508}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    
                    <small class="text-muted">${item.data[0].date_created}</small>
                  </div>
                </div>
              </div>
            </div>
            `
    }
}

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    showSearch(data.collection.items);
    console.log(data.collection.items[0].links[0].href);
}



btn.addEventListener('click', function() {
    container.innerHTML = '';
    fetchData(URL + input.value);
});