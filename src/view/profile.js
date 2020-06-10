
import {createComment} from '../lib/index.js'

export const profile =() =>{
    const divProfile=document.createElement('div');
    const viewProfile=`
    <section id="section-father">
    <section class="profile">
        <div class="container">
            <div class="profile-wrapper">
                <div class="profile-image-container">
                    <img src="img/dragon.jpg" class="profilePhoto">
                    <h1>NOMBRE</h1>
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
                <div class="button-post"></div>
                <input type="button" class="btn" id="btn-comment" value="Postear">
                
            </form>
        </div>
    </section>
</section>
`
divProfile.innerHTML = viewProfile;
const btnComment = divProfile.querySelector('#btn-comment')
btnComment.addEventListener('click', () => {
   console.log("AQUIIIII");
    createComment();
})
return divProfile;
}