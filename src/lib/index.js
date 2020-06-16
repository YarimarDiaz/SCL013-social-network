// Configuración de google
export const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/profile';
      // const token = result.credential.accessToken;
      const user = result.user;
      console.log('user', user);
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    // console.log('errorMessage',errorMessage);
    });
};

// Mostrar nombre de usuario registrado en google
export const dataUser = () => {
  return firebase.auth().currentUser;
};

// Configuración de nuevo usuario
export const createUser = () => {
  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('emailSingIn').value;
  const passwordSingIn = document.getElementById('passwordSingIn').value;

  firebase.auth().createUserWithEmailAndPassword(email, passwordSingIn)
    .then(() => {
      const mensageSing = document.querySelector('#mensageSing')
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


// Configuración de base de datos "Creando Post"
export const createComment = () => {
  // Funcion para guardar los comentarios
  const comment = document.getElementById('txtcomment').value;
  console.log('llama la funcion');
  // Agregar comentarios
  firebase.firestore().collection('comentarios').add({
    usuario: 'usuario',
    comment: comment,
    fecha: new Date(),
    likes: 1,
  })
    .then((docRef) => {
      document.getElementById('txtcomment').value = ''; 
      // console.log('Document written with ID: ', docRef.id);
      postComments()
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// leer datos desde base correcta
export const postComments = () => {
  const publicar = document.querySelector('#post');
  firebase.firestore().collection("comentarios").orderBy('fecha', 'desc')
  .onSnapshot((querySnapshot) => {
    publicar.innerHTML= '';
    querySnapshot.forEach((doc) => {
    publicar.innerHTML += `
    <p>${doc.data().comment}</p>
    <button id="btnEliminar">eliminar</button></td>
    <button id="btnEditar">editar</button></td>
`;
  });
});
}







/* 
12:07
// Guardar informacion correcta
export const guardarInformacionDeComentario = () => {
  const comment = document.querySelector('#table').value;
  firebase.firestore().collection("comentarios").add({
    comment: comment,
    fecha: new Date()
  })
    .then(function (docRef) {
      document.querySelector('#table').value = ''
      publicarcomentario()
    //console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
    console.error("Error adding document: ", error);
    });
}
// leer datos desde base correcta
export const publicarcomentario = () => {
  const publicar = document.querySelector('#publicacion');
  firebase.firestore().collection("comentarios").orderBy('fecha', 'desc')
  .onSnapshot((querySnapshot) => {
    publicar.innerHTML= '';
    querySnapshot.forEach((doc) => {
    publicar.innerHTML += `
    <p>${doc.data(id).comment}</p>
    <button id="btnEliminar" onclick ="borrarDatos('${doc.id}')">eliminar</button></td>
    <button class="btn btn-danger">editar</button></td>
`;
  });
});
}
// borrar datos de cloud firestore
export const borrarDatos = (id) => {
  firebase.firestore().collection("comentarios").doc(id).delete()
  .then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

















// export const createComment = () => {
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
