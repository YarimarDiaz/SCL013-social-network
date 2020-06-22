import { createUser } from '../lib/index.js';

export const singIn = () => {
  const divSingIn = document.createElement('div');
  const viewSingIn = `
  <div id="content">
  <div id="pageSingIn">
      <div class="img-portada"></div>
      <form id="formSingIn"> 
          <img class="logo" src="../img/logo3.png">
          <input type="text" id="name" class="inputSingIn" placeholder="Nombre">
          <input type="text" id="lastname" class="inputSingIn"   placeholder="Apellido">
          <input type="email" id="emailSingIn" class="inputSingIn"   placeholder="Direccion de correo">
          <input type="password" id="passwordSingIn" class="inputSingIn" placeholder="Contraseña">
          <button class="inputSingIn" id="btnSingIn">Registrarme</Button>
          <a href='#/' class="cancel">Cancelar</a> 

          <h3 id="mensageSing"></h3>
      </form>
  </div>
  </div>
`;
  divSingIn.innerHTML = viewSingIn;

  const btnUser = divSingIn.querySelector('#btnSingIn');
  btnUser.addEventListener('click', () => {
    createUser();
  });

  return divSingIn;
};
