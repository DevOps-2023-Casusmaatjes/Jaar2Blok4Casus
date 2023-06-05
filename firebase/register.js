

//Register account into accounts table

document.addEventListener('DOMContentLoaded', () => {
    var registerFormDB = firebase.database().ref("accounts")

    document.getElementById("register-form").addEventListener("submit", submitForm);

    function submitForm(e) {
        e.preventDefault();

        var username = getElementVal("register-username");
        var email = getElementVal("register-email");
        var location = getElementVal("register-Address");
        var address = getElementVal("register-Address");
        var birthday = getElementVal("register-Date of Birth");
        var password = getElementVal("register-password");
  

        storeAccount(username, email, location, address, birthday, password);
    }

    function storeAccount(username, email, location, address, birthday, password) {
        var newRegisterFormDB = registerFormDB.push();
        newRegisterFormDB.set({
            username: username,
            email: email,
            location: location,
            address: address,
            birthday: birthday,
            password: password
        });
    }
    


    const getElementVal = (id) => {
        return document.getElementById(id).value;
    }

});

