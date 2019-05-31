import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize firebase
const Config = {
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
    app.initializeApp( Config); 
    this.auth = app.auth();
    this.db = app.firestore();   
  }

  login(email, password){
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.auth.signOut()
  }
  async register(email, fullname, password){
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser().UpdateProfile({
      displayName: fullname
    })
  }
}


export default new Firebase();