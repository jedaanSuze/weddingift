import firebase from 'firebase';

let isAuthenticatedUser = false;

function LogIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            isAuthenticatedUser = true;
            return true;
        }, (error) => {
            //    Alert.alert(error.message);
        });
    return false;
}

function SignOut() {
    firebase.auth().signOut();
}

function IsAuthenticated() {
    return isAuthenticatedUser;
}

module.exports = {
    LogIn,
    IsAuthenticated,
    SignOut
};

