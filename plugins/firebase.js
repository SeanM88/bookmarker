import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {

    const config = {
        apiKey: 'AIzaSyCTvn_SLEW_Hi0oHCHitIjB2cEkqgmfnKM',
        authDomain: 'bookmarker-io.firebaseapp.com',
        databaseURL: 'https://bookmarker-io.firebaseio.com',
        projectId: 'bookmarker-io',
        storageBucket: 'bookmarker-io.appspot.com',
        messagingSenderId: '90366789248',
        appId: '1:90366789248:web:72ceef09b88bd3b5'
    }

    firebase.initializeApp(config)
    firebase.firestore().settings( {timestampsInSnapshots: true} )
}

const fireDb = firebase.firestore()

export { fireDb }
