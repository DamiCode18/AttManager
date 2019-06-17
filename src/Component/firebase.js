import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyDM_e2uHla8Xdd_A9NBr592fVxo4NbIyPU",
    authDomain: "attmanager-51f98.firebaseapp.com",
    databaseURL: "https://attmanager-51f98.firebaseio.com",
    projectId: "attmanager-51f98",
    storageBucket: "attmanager-51f98.appspot.com",
    messagingSenderId: "69135384541",
    appId: "1:69135384541:web:2b325a11024e423f"
  };

  class Firebase{
      constructor(){
          app.initializeApp(config)
          this.auth=app.auth()
          this.db = app.firestore()
      }

      async login(email, password, firstname, lastname){
          await this.auth.signInWithEmailAndPassword(email, password)
          return this.auth.currentUser.updateProfile({
            displayName: firstname + " " + lastname 
        })
      }

      logout(){
          return this.auth.signOut()
      }
      async register(email, firstname, lastname, password){
          await this.auth.createUserWithEmailAndPassword(email, password)
          return this.auth.currentUser.updateProfile({
              displayName: firstname + " " + lastname 
          })
        }
       isInitialized(){
           return new Promise(resolve=>{
               this.auth.onAuthStateChanged(resolve)
           })
       }
       
       getCurrentUsername(){
           return this.auth.currentUser.displayName
       }
      }
  

  export default new Firebase()