import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// This if statement helps prevent "Firebase app already exists" error
if (!firebase.apps.length) {

    const config = {
        apiKey: 'AIzaSyCTvn_SLEW_Hi0oHCHitIjB2cEkqgmfnKM',
        authDomain: 'bookmarker-io.firebaseapp.com',
        databaseURL: 'https://bookmarker-io.firebaseio.com',
        projectId: 'bookmarker-io',
        storageBucket: 'bookmarker-io.appspot.com',
        messagingSenderId: '90366789248',
        appId: '1:90366789248:web:72ceef09b88bd3b5'
    };

    firebase.initializeApp(config);
};

// Create references to Firebase authentication and firestore services
const fireAuth = firebase.auth();
const fireDb = firebase.firestore();
// const GoogleProvider = new firebase.auth.GoogleAuthProvider();

// Export references so we can import them wherever necessary
export { fireAuth, fireDb };
