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
