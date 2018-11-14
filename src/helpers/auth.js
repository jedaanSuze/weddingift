let isAuthenticated = false;

function authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 300);
}

function signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 300);
}

module.exports = {
    authenticate,
    signout
};

/*
import firebase from 'firebase';

var localConfig = {
    apiKey: "AIzaSyCcX3X7UOUce26I_LQtC8dF-mD9xyvsVp0",
    authDomain: "weddinggiftdb.firebaseapp.com",
    databaseURL: "https://weddinggiftdb.firebaseio.com",
    projectId: "weddinggiftdb",
    storageBucket: "weddinggiftdb.appspot.com",
    messagingSenderId: "77570448977"

};
let isAuthenticatedUser = false;

function GetFireBaseInstance() {
    let fire = null;
    if (firebase.apps.length == 1) {
        if (fire == null) {
            fire = firebase.apps[0];
        }
    } else if (firebase.apps.length == 0) {
        fire = firebase.initializeApp(localConfig);
    }
    return fire;
}

function LogIn(email, password) {
    GetFireBaseInstance().auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            isAuthenticatedUser = true;
            return true;
        }, (error) => {
            //Alert.alert(error.message);
        });
    return false;
}

function SignOut() {
    firebase.auth().signOut();
}

function IsAuthenticated() {
    console.log('isAuthenticatedUser', isAuthenticatedUser);
    return isAuthenticatedUser;
}

export {
    LogIn,
    IsAuthenticated,
    SignOut
};

*/
