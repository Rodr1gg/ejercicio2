const readlineSync = require('readline-sync')

const{mostrarListaEstudiantes} = require('./lista_estudiantes')

const ingresarEstudiantes = () =>{
    const cantidadEstudiantes = readlineSync.question("Ingrese la cantidad de estudiantes");
    const estudiantes = [];
    
        for(let i = 0; i<cantidadEstudiantes;i++){
            const nombre = readlineSync.question(`Ingrese el nombre del estudiante ${i}`);
            const edad = readlineSync.question(`ingrese la edad de ${nombre}`);

            const estudiante = {
                nombre,
                edad,
            };;
            estudiantes.push(estudiante)
        }
        mostrarListaEstudiantes(estudiantes)
}



ingresarEstudiantes()