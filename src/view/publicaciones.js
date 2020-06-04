export const publicaciones = () => { 
    const divPublicaciones = document.createElement('div');

    const viewPublicaciones = `
    <h1>Prueba de hoja Publicaciones</h1>
    `
    divPublicaciones.innerHTML = viewPublicaciones;

    return divPublicaciones
}