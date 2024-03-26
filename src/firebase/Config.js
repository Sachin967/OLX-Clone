import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCjxn_U7lLKj-F24n9iOM0lP4tpJis0hLg',
  authDomain: 'my-project-fb2df.firebaseapp.com',
  projectId: 'my-project-fb2df',
  storageBucket: 'my-project-fb2df.appspot.com',
  messagingSenderId: '44799595273',
  appId: '1:44799595273:web:0c922d12c6d1d97eeab9d8',
  measurementId: 'G-ZZ8754KPSM',
}

export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = getAuth(app)

export const storage = getStorage(app)
