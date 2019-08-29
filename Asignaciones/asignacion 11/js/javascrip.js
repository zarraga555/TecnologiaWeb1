var ciudad = document.getElementById('namecity').innerText;

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
    
    if(contenido[0].nombre == ciudad){
        var myartculo = document.getElementById('section-info-content')
        var titulociudad = document.createElement('h2');
        var historiaciudad = document.createElement('p');

        titulociudad.textContent = contenido[0].titulo;
        historiaciudad.textContent = contenido[0].historia;

        myartculo.appendChild(titulociudad);
        myartculo.appendChild(historiaciudad);

    }else{
        if(contenido[1].nombre == ciudad){
            var myartculosanta = document.getElementById('section-info-content')
            var titulosanta = document.createElement('h2');
            var historiasanta = document.createElement('p');
    
            titulosanta.textContent = contenido[1].titulo;
            historiasanta.textContent = contenido[1].historia;
    
            myartculosanta.appendChild(titulosanta);
            myartculosanta.appendChild(historiasanta);
        }else{
            if(contenido[2].nombre == ciudad){
                var myartculolapaz = document.getElementById('section-info-content')
                var tituloslapaz = document.createElement('h2');
                var historialapaz = document.createElement('p');
        
                tituloslapaz.textContent = contenido[2].titulo;
                historialapaz.textContent = contenido[2].historia;
        
                myartculolapaz.appendChild(tituloslapaz);
                myartculolapaz.appendChild(historialapaz);
            }
        }
    }
    


    
}


/*
var mostrar = document.getElementById('section-info-content');
mostrar.innerHTML = contenido[0].titulo;
var mostrar = document.getElementById('parrafo');
mostrar.innerHTML = contenido[0].historia;*/