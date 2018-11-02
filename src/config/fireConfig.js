import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


//put your own config from firebase project
var config = {
    apiKey: "*******************************",
    authDomain: "*******************",
    databaseURL: "https://**************.firebaseio.com",
    projectId: "*************",
    storageBucket: "************.appspot.com",
    messagingSenderId: "*********"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings( { timestampsInSnapshots : true } )

  export default firebase

  /*   firestore rules

service cloud.firestore {
  match /databases/{database}/documents {

    match /projects/{project} {
      allow read, write : if request.auth.uid != null
    }
    match /users/{userId} {
      allow create
      allow read : if request.auth.uid != null
      allow write : if request.auth.uid == userId 
    }
    match /notifications/{notification} {
      allow read : if request.auth.uid != null
    }
  }
}


  */