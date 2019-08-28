var requestURL = 'https://zarraga555.github.io/TecnologiaWeb1/Asignaciones/asignacion10/js/bolivia.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    var contenidomostrar = request.response;
    datos(contenidomostrar);
}

function datos(jsonObj){
    var contenido = jsonObj['ciudades'];
    
    if(contenido[0].nombre == 'cochabamba'){
        var myartculo = document.getElementById('section-info-content')
        var titulociudad = document.createElement('h2');
        var historiaciudad = document.createElement('p');

        titulociudad.textContent = contenido[0].titulo;
        historiaciudad.textContent = contenido[0].historia;

        myartculo.appendChild(titulociudad);
        myartculo.appendChild(historiaciudad);


    }

    
}


/*
var mostrar = document.getElementById('section-info-content');
mostrar.innerHTML = contenido[0].titulo;
var mostrar = document.getElementById('parrafo');
mostrar.innerHTML = contenido[0].historia;*/