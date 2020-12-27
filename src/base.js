import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base