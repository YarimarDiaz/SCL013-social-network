// Configuración de google
export const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/profile';
      // var token = result.credential.accessToken;
      // var user = result.user;
      // console.log('user', user);
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    // console.log('errorMessage',errorMessage);
    });
};

// Configuración de nuevo usuario
export const createUser = () => {
  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('emailSingIn').value;
  const passwordSingIn = document.getElementById('passwordSingIn').value;

  firebase.auth().createUserWithEmailAndPassword(email, passwordSingIn)
    .then(() => {
      window.location.hash = '#/profile';
    // alert ("Se registro Correctamente")
    }).catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        alert('Su email es invalido');
      } else if (errorCode === 'auth/weak-password') {
        alert('La contraseña debe tener 6 caracteres');
      } else if (errorCode === 'auth/email-already-in-use') {
        alert('La cuenta ya esta registrada');
      }
    });
};


// Configuración de base de datos "Creando Post"
export const createComment = () => {
  // Funcion para guardar los comentarios

  const comment = document.getElementById('txtcomment').value;

  console.log('llama la funcion');
  // Agregar comentarios
  firebase.firestore().collection('comentarios').add({
    usuario: 'usuario',
    comment: comment,
    likes: 1,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('txtcomment').value = '';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

/* // export const createComment = () => {
  let comment=document.getElementById('txtcomment').value;

  console.log("llama la funcion");
  //Agregar comentarios
  db.collection("comentarios").add({
    usuario: "usuario",
    comment: comment,
    likes: 1
  })
  .then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
  document.getElementById('txtcomment').value ='';
  })
  .catch(function(error) {
  console.error("Error adding document: ", error);
  });
} */

// Configuracion de usuario registrado
export const userLogin = (email, pass) => {
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(() => {
      window.location.hash = '#/profile';
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      // let errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        alert('Su email es invalido');
      } else if (errorCode === 'auth/user-not-found') {
        alert('Usuario no esta registrado');
      } else if (errorCode === 'auth/wrong-password') {
        alert('La contraseña es invalida');
      } else alert('Ocurrio un error');
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
