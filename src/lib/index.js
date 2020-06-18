/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable object-shorthand */
/* eslint-disable no-shadow */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Configuración de google
export const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/profile';
      // const token = result.credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      // eslint-disable-next-line no-var
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      // console.log('errorMessage',errorMessage);
    });
};

// Mostrar nombre de usuario registrado en google
export const dataUser = () => firebase.auth().currentUser;

// Configuración de nuevo usuario
export const createUser = () => {
  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('emailSingIn').value;
  const passwordSingIn = document.getElementById('passwordSingIn').value;

  firebase.auth().createUserWithEmailAndPassword(email, passwordSingIn)
    .then(() => {
      const mensageSing = document.querySelector('#mensageSing');
      mensageSing.innerHTML = '';
      window.location.hash = '#/profile';
      // alert ("Se registro Correctamente")
    }).catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        mensageSing.innerHTML = 'Su email es invalido';
      } if (errorCode === 'auth/weak-password') {
        mensageSing.innerHTML = 'La contraseña debe tener 6 caracteres';
      } if (errorCode === 'auth/email-already-in-use') {
        mensageSing.innerHTML = 'La cuenta ya esta registrada';
      }
    });
};

// Configuracion de usuario registrado
export const userLogin = (email, pass) => {
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(() => {
      const mensajes = document.querySelector('#mensajes');
      mensajes.innerHTML = '';
      window.location.hash = '#/profile';
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      // let errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        mensajes.innerHTML = 'Su email es invalido';
      } if (errorCode === 'auth/user-not-found') {
        mensajes.innerHTML = 'Usuario no esta registrado';
      } if (errorCode === 'auth/wrong-password') {
        mensajes.innerHTML = 'La contraseña es invalida';
      }
    });
};


// acceso a usuario que ya estan logeados, configurar observador firebase
export const accesoUserLogin = (email, pass) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
    }
  });
};

// Configuración de base de datos "Creando Post"
export const createComment = () => {
  // Funcion para guardar los comentarios
  const comment = document.getElementById('txtcomment').value;
  const user = dataUser();
  // console.log('llama la funcion');
  // Agregar comentarios
  firebase.firestore().collection('comentarios').add({
    usuario: user.displayName,
    comment: comment,
    fecha: new Date(),
    likes: 0,
  })
    .then((docRef) => {
      document.getElementById('txtcomment').value = '';
      // console.log('Document written with ID: ', docRef.id);
      postComments();
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// leer datos desde base correcta
export const postComments = (divProfile) => {
  const publicar = divProfile.querySelector('#post');
  firebase.firestore().collection('comentarios').orderBy('fecha', 'desc')
    .onSnapshot((querySnapshot) => {
      publicar.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const span = document.createElement('span');
        span.innerHTML = `
          <p>${doc.data().comment}</p>
          <button id="btnsum"><img id="btnLike" src="./img/like.png"><span id="icon_${doc.id}">${doc.data().likes}</span></button>
          <button id="btnDeletePost" data-id="${doc.id}"><img id="btnDelete" src="./img/delete.png"></button></td>
          <button name="btnEditar">editar</button></td>
            `;

        const btnlike = span.querySelector('#btnsum');
        btnlike.addEventListener('click', () => {
          sumLike(doc.id, doc.data().likes);
        });

        const btnDelete = span.querySelector('#btnDeletePost');

        btnDelete.addEventListener('click', () => {
          deleteData(doc.id);
        });
        publicar.appendChild(span);
      });
    });
};

export const sumLike = (idComment, likes) => {
  firebase.firestore().collection('comentarios').doc(idComment).update({
    likes: likes + 1,
  });
  document.getElementById(`icon_${idComment}`).innerHTML = likes + 1;
};

// borrar datos de cloud firestore
export const deleteData = (id) => {
  firebase.firestore().collection('comentarios').doc(id).delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .then(() => {
      console.error('Error removing document: ', error);
    });
};

// cerrar Sesion.
export const signOut = () => {
  firebase.auth().signOut()
    .then(() => {
      window.location.hash = '#/';
      // console.log ('correoLogin');
      // Sign-out successful.
    }).catch(() => {
      // An error happened.
    });
};
