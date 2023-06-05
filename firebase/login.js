const firebaseConfig = {
    apiKey: "AIzaSyBlxNS6DfDzWIHeksRpE8brSO0odUQrbwM",
    authDomain: "gameplatform-db.firebaseapp.com",
    databaseURL: "https://gameplatform-db-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gameplatform-db",
    storageBucket: "gameplatform-db.appspot.com",
    messagingSenderId: "545500280718",
    appId: "1:545500280718:web:95e285f583b0157adf56df",
    measurementId: "G-R2NMTXLKF5"
};



firebase.initializeApp(firebaseConfig);



//ADD AUTHENTICATION, LOGIN.... THEN ADD TEMPORARY JS STORAGE FOR LOGIN SESSION STORAGE

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById("login-form").addEventListener("submit", tryLogin);

    function tryLogin(e) {
        firebase.database().ref("accounts").once("value")
        .then((snapshot) => {

            const usersData = snapshot.val();


            for (const userId in usersData) {
                if (usersData.hasOwnProperty(userId)) {
                    const user = usersData[userId];

                    const email = user.email;
                    const password = user.password;
                    
                    if (email == document.getElementById("email").value && password == document.getElementById("password").value) {
                        console.log("Login successful");
                        console.log("Email: ", email);
                        //TO DO: Store user data in session storage for later use in other pages
                        break;
                    }


                }
            }
        })
        .catch((error) => {
            console.log("Error reading data: ", error);
        });
    }	


});