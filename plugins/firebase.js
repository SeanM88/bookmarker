import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Firebase services config
const config = {
    apiKey: 'AIzaSyCTvn_SLEW_Hi0oHCHitIjB2cEkqgmfnKM',
    authDomain: 'bookmarker-io.firebaseapp.com',
    databaseURL: 'https://bookmarker-io.firebaseio.com',
    projectId: 'bookmarker-io',
    storageBucket: 'bookmarker-io.appspot.com',
    messagingSenderId: '90366789248',
    appId: '1:90366789248:web:72ceef09b88bd3b5'
};

// Prevent "Firebase app already exists" error
!firebase.apps.length ? firebase.initializeApp(config) : ''

// Create reference to Firebase Authentication service
const fireAuth = firebase.auth();
// Create refrences to Google and Facebook auth providers
const providerGoogle = new firebase.auth.GoogleAuthProvider();
// const providerFacebook = new firebase.auth.FacebookAuthProvider();

// Create reference to Firebase Firestore service
const fireDb = firebase.firestore();

// Export references so we can import them wherever necessary
export { fireAuth, fireDb, providerGoogle };
