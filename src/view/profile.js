import {
  createComment, signOut, dataUser, postComments,
} from '../lib/index.js';

export const profile = () => {
  const divProfile = document.createElement('div');
  const user = dataUser();
  let userName = user.displayName;
  if (user.displayName == null) {
    userName = user.email;
  }
  let userPhoto = user.photoURL;
  if (user.photoURL == null) {
    userPhoto = './img/nofoto.jpeg';
  }

  const viewProfile = `
  <div class="divBaner">
  <a href="#/knowUs"><img class="baner" src="./img/logo3.png"></a>
    <div class="nombreFoto">
      <img class="profilePhoto" src="${userPhoto}" >
    <div class="nameClouse">
      <p class="nameBaner">${userName}</p>
      <button id="btn-SingOut">Cerrar Sesión</button>
    </div>
    </div>
  </div>
    <section id="section-father">
    <section class="posts">
        <div class="posts-container">
            <form>
                <textarea class="cuadroTextarea" placeholder="Yo busco! Yo ofrezco!" id="txtcomment" ></textarea>
                <button class="btn" id="btn-comment" >Postear</button>
                <button id="btnEditComment">Postear Edición</button>
            </form>
            <h2>Publicaciones Recientes</h2>
              <div id="post"></div>
        </div>
    </section>
</section>

`;

  divProfile.innerHTML = viewProfile;
  const btnComment = divProfile.querySelector('#btn-comment');
  btnComment.addEventListener('click', () => {
    createComment();
  });
  const btnSingOut = divProfile.querySelector('#btn-SingOut');
  btnSingOut.addEventListener('click', () => {
    signOut();
  });

  postComments(divProfile);
  return divProfile;
};
