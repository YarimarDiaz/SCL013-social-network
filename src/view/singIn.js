export const singIn = () => {
    const divSingIn = document.createElement('div');
    const viewSingIn = `
    <div id="content">
    <div id="home">
        <div class="img-portada"></div>
        <form action="" id="boxsingIn"> 
            <img src="../img/logo3.png">
            <input type="text" id="name" class="login" placeholder="Nombre">
            <input type="text" id="lastname" class="login"   placeholder="Apellido">
            <input type="email" id="EmailSingIn" class="login"   placeholder="Direccion de correo">
            <input type="password" id="PasswordSingIn" class="login" placeholder="Contraseña">
            <button class="login" id="btnSingIn">Registrarme</Button>
        </form>
    </div>
    </div>
`
divSingIn.innerHTML = viewSingIn;
return divSingIn

}
