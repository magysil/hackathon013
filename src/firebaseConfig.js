import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCN10QzEHpcXUKji23WtlTkv84IMdHyDAk",
    authDomain: "activitymeter-e9027.firebaseapp.com",
    databaseURL: "https://activitymeter-e9027.firebaseio.com",
    projectId: "activitymeter-e9027",
    storageBucket: "activitymeter-e9027.appspot.com",
    messagingSenderId: "949441483139",
    appId: "1:949441483139:web:5c882ef311a848793166b6",
    measurementId: "G-J1NKDQR1EL"
  };
  firebase.initializeApp(firebaseConfig);

  export {firebase}
