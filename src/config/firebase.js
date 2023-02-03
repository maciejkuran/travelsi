import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

export const FIREBASE_API = 'https://travelsi-default-rtdb.firebaseio.com/';

export const firebaseConfig = {
  apiKey: 'AIzaSyAUpOvxo-K90SGR_oQIQJlyrjmYtHHdJ3I',
  authDomain: 'travelsi.firebaseapp.com',
  databaseURL: 'https://travelsi-default-rtdb.firebaseio.com',
  projectId: 'travelsi',
  storageBucket: 'travelsi.appspot.com',
  messagingSenderId: '383318177463',
  appId: '1:383318177463:web:7315e8f35ce4d427477f32',
};

//Initializing Firebase
export const firebaseApp = initializeApp(firebaseConfig);

//Getting database
export const firebaseDB = getDatabase(firebaseApp);

//Initializing FirebaseAuthentication
export const firebaseAuth = getAuth(firebaseApp);
