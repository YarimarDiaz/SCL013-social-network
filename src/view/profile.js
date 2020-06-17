import { createComment, signOut, dataUser, postComments } from '../lib/index.js';

export const profile = () => {
  const divProfile = document.createElement('div');
  const user = dataUser();
  const viewProfile = `
  <div class="divBaner">
    <div>
      <img src="./img/logo3.png" class="baner">
    </div>
    <div>
      <button id="btn-SingOut">Cerrar Sesión</button>
    </div>
  </div>
    <section id="section-father">
    <section class="profile">
        <div class="container">
            <div class="profile-wrapper">
                <div class="profile-image-container">
                <img src="${user.photoURL}" class="profilePhoto">
                <p> Bienvenida ${user.displayName}</p>
                    <p class="city">Santiago</p>
                    <p class="description">Descripcion perfil</p>

                </div>
            </div>
        </div>
    </section>
    <section class="posts">
        <div class="posts-container">
            <h2>Escribe tu post</h2>
            <form>
                <textarea placeholder="Escribe aquí tu comentario" id="txtcomment" ></textarea>
                <input type="button" class="btn" id="btn-comment" value="Postear">
                <div id="post"></div> 
            </form>
        </div>
    </section>
</section>

`;

  divProfile.innerHTML = viewProfile;
  const btnComment = divProfile.querySelector('#btn-comment');
  btnComment.addEventListener('click', () => {
    // console.log('AQUIIIII');
    createComment();
    postComments();

  });
  const btnSingOut = divProfile.querySelector('#btn-SingOut');
  btnSingOut.addEventListener('click', () => {
    signOut();
  });

  return divProfile;
};
