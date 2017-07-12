/*Ingresar un listado de nombres de alumnos por pantalla. Cada vez que se ingresa un nuevo usuario,preguntar si se quiere ingresar otro usando la funcion confirm.
En el caso de que el usuario no quiera ingresar otro alumno, mostrar los siguientes resultados por consola:
  -Indicar la cantidad de alumnos que ingresaron
  -Preguntar si Maradona vino a la clase. Hacerlo con otra funcion que tome un array comco parametro y retorne true o false dependiendo si lo encontro o no.
  -Mostrar el listado de alumnos por pantalla
*/
var alumno=prompt("Ingrese un alumno");
var arrayAlumnos=[];
arrayAlumnos.push(alumno);
var flag=confirm("Desea ingresar otro alumno?");

while(flag){
  alumno=prompt("Ingrese un alumno");
  arrayAlumnos.push(alumno);
  flag=confirm("Desea ingresar otro alumno?");
}

console.log("Se han ingresado "+arrayAlumnos.length+" alumnos");

function encontrarAlumno(alumno){
  for(var i=0;i<arrayAlumnos.length;i++){
    if(arrayAlumnos[i]==alumno){
      return true;
    }
  }
  return false;
}

console.log('Esta Maradona? :'+encontrarAlumno("Maradona"));

console.log("Cantidad de alumnos "+arrayAlumnos.length);
