import firebase from 'firebase'
import {firebaseConfig} from './env/firebase'

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.database()

export default db