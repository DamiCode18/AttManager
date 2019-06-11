import {createStore, combineReducers, compose} from 'redux'
import firebase from 'firebase'
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase'
import {reduxFirestore, firestoreReducer} from 'redux-firestore'
import 'firebase/firestore';

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

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}


//Init Firebase Instance
firebase.initializeApp(Config);

// Init Firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

// create initial state
const initialState = {};

//create store

const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  ));



export default store;