const mostrarListaEstudiantes = (estudiantes) =>{
    console.log('lista de estudiantes')
    estudiantes.forEach(estudiante => {
        console.log(`Nombre: ${estudiante.nombre} edad: ${estudiante.edad}`,)
    });
}

module.exports = {mostrarListaEstudiantes}