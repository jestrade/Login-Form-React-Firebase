
import firebase from 'firebase';

	const config = {
		apiKey: process.env.API_KEY,
		authDomain: process.env.AUTH_DOMAIN,
		databaseURL: process.env.DATABASE_URL,
		storageBucket: process.env.STORAGE_BUCKET,
		messagingSenderId: process.env.MESSAGING_SENDER_ID
	};

  firebase.initializeApp(config);
  
  export function loadData(){
      return firebase.database().ref('/messages/');
  }
  export function sendData(mensaje){
      return firebase.database().ref('/messages/').push(mensaje);
  }
  export function deleteData(mensajeId){
      firebase.database().ref('/messages/').child(mensajeId).remove();
  }
  export function logOut(){
    return firebase.auth().signOut()
  }
  export function logIn(user){
        return firebase.auth().signInWithEmailAndPassword(user.email,user.password)
  }
  
  export function uploadFile(file){
      return firebase.storage().ref('images/').child(file.name).put(file);
  }
  
  export let isAuthenticated = new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user)=> {
        resolve(user)
        })
    });