let input = document.getElementById('inputBuscar');
let btn = document.getElementById('btnBuscar');
let container = document.getElementById('contenedor');

const URL = 'https://images-api.nasa.gov/search?q=';

function showSearch(array) {
    for (let item of array) {
        console.log(item);
        container.innerHTML += `
            <div class="col-md-4">
                <div class="bg-light rounded p-4 my-3 mx-1 tarjeta">
                    <div class="container-imagen h-50 w-100">
                        <img src=${item.links[0].href} alt="${item.data[0].description_508}" class="img-fluid">
                    </div>
                    <h6 class="titulo pt-4">${item.data[0].title}</h6>
                    <div class="overflow-auto pt-4">
                        <p class="texto-tarjeta fw-light">${item.data[0].description_508}</p>
                    </div>
                    <small class="text-muted">${item.data[0].date_created}</small>
                </div>
            </div>
        `;
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