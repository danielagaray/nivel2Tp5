/*Crear un array de peliculas

Crear una funcion que agrege una pelicula al array de peliculas
La pelicula debera tener un ID y un Titulo
Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente
Crear una funcion que ordene las peliculas por Titulo y por ID
Crear una funcion que elimine una pelicula por su ID.*/


var peliculas = [];

function crearPelicula (id,titulo){

  var pelicula ={
    id:id,
    titulo:titulo,
  }
  return pelicula;
}

function agregar(pelicula){
  var flag=false;
  if(peliculas.length==0){
    peliculas.push(pelicula);
  }else{
    for (var i = 0; i < peliculas.length ; i++) {
      if(peliculas[i].titulo==pelicula.titulo){
        flag=true;
        console.log('Pelicula ya ingresada al array');
      }
    }
    if(!flag){
      peliculas.push(pelicula);
      console.log('Se ingreso pelicula al array');
    }
  }

}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
var sam=crearPelicula(3,'Mi nombre es Sam');
agregar(sam);
agregar(sam);
var titanic=crearPelicula(2,'Titanic');
agregar(titanic);
var tienesUnEmail=crearPelicula(1,'Tienes un e-mail');

agregar(tienesUnEmail);
for (var i = 0; i < peliculas.length; i++) {
 console.log(peliculas[i].id);
 console.log(peliculas[i].titulo);
}
sortByKey(peliculas,'id');
for (var i = 0; i < peliculas.length; i++) {
 console.log(peliculas[i].id);
 console.log(peliculas[i].titulo);
}

sortByKey(peliculas,'titulo');
for (var i = 0; i < peliculas.length; i++) {
 console.log(peliculas[i].id);
 console.log(peliculas[i].titulo);
}
