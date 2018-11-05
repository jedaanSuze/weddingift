import firebase from 'firebase';

const devConfig = {
    apiKey: "AIzaSyAnfAS9CvDuuxPStZq5LTAgRBbX6s98C5k",
    authDomain: "testcom-87d2c.firebaseapp.com",
    databaseURL: "https://testcom-87d2c.firebaseio.com",
    projectId: "testcom-87d2c",
    storageBucket: "",
    messagingSenderId: "704387955586"
};


const prodConfig = {
    apiKey: "AIzaSyBOq2NFbGFZ1QAzkdxRRDDlfSF06M92IWE",
    authDomain: "testdev-5fb25.firebaseapp.com",
    databaseURL: "https://testdev-5fb25.firebaseio.com",
    projectId: "testdev-5fb25",
    storageBucket: "",
    messagingSenderId: "806264212331"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

let fire;
if (firebase.apps.length == 0) {
    fire = firebase.initializeApp(config);
}

function getFireBase() {
    return fire;
}

module.exports = {
    getFireBase,
};
