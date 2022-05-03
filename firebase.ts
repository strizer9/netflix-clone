// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA0MNwlDlPbLpWv-UHUK_BDQn0zNUUVVWo',
  authDomain: 'netfix-clone-af427.firebaseapp.com',
  projectId: 'netfix-clone-af427',
  storageBucket: 'netfix-clone-af427.appspot.com',
  messagingSenderId: '413720097964',
  appId: '1:413720097964:web:b0e4a915b90de623139b09',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
