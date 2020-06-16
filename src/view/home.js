import { login, userLogin, accesoUserLogin } from '../lib/index.js';

export const home = () => {
  const divHome = document.createElement('div');

  const viewHome = `
   <div id="content">
    <div id="home">
      <div class="img-portada"></div>
        <div id="boxsingIn">
        <img class="logo" src="../img/logo3.png">
          <input class="login" id="txtEmail" type="email" name="user-email" placeholder="Direccion de correo">
          <input class="login" id="txtPasswword" type="password" name="user-contraseña" placeholder="Contraseña">
          <button class="login" id="btnLogin" type="button" name="singIn">Iniciar Sesion</Button>
          <h3 id="mensajes"></h3>
          <a class="linkgoogle" href="#" id="btnGoogle"> <img class= "icon" src="./img/google.png">Iniciar sesion con Google</a>
          <p>¿No tienes cuenta? <a href='#/singIn'><button>Registrate</button></a></p>
        </div>
        </div>
    </div>

   `;
  divHome.innerHTML = viewHome;
  const btnGoogle = divHome.querySelector('#btnGoogle');
  btnGoogle.addEventListener('click', () => {
    login();
  });

  const btnLogin = divHome.querySelector('#btnLogin');
  btnLogin.addEventListener('click', () => {
    const email = document.getElementById('txtEmail').value;
    const pass = document.getElementById('txtPasswword').value;
    userLogin(email, pass);
    accesoUserLogin(email, pass);
  });

  return divHome;
};
