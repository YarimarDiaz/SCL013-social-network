export const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log('user',user);
    
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log('errorMessage',errorMessage);
  });
}

export const createUser = () => {
  let name = document.getElementById('name').value
  let lastname = document.getElementById('lastname').value
  let email = document.getElementById('emailSingIn').value
  let passwordSingIn = document.getElementById('passwordSingIn').value

  firebase.auth().createUserWithEmailAndPassword(email,passwordSingIn)
  .then(res=>{
      alert("Se regsitro correctamente")
      document.getElementById("btnSingIn").click();

  }).catch(err=>{
      alert("Ah ocurrido un error")
  });






}
export const createComment = () => {
  //Funcion para guardar los comentarios

  let comment=document.getElementById('txtcomment').value;

  console.log("llama la funcion");
  //Agregar comentarios
  firebase.firestore().collection("comentarios").add({
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

}

/*export const createComment = () => {
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
