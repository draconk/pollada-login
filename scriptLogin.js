function login(username, password) {
    let error = false;

    if (username === "") {
        document.getElementById("errorUser").style.display = "block";
        error = true;
    }else{
        document.getElementById("errorUser").style.display = "none";
    }

    if (password === "") {
        document.getElementById("errorPass").style.display = "block";
        error = true;
    }else{
        document.getElementById("errorPass").style.display = "none";
    }

    if (error === false) {
        let date = new Date();
        date.setMinutes(date.getMinutes() + 5);
        document.cookie = "username=" + username + ";path/;expires=" + date.toUTCString();

        showUsernameIfLoggedIn();
    }
}

function showUsernameIfLoggedIn() {
    let username = getCookie("username");
    if (username.length > 0) {
        let formulario =  document.getElementById("formulario");
        if(typeof(formulario) != 'undefined' && formulario != null ) {
            formulario.style.display = "none";
        }
        document.getElementById("loggedUser").style.display = "block";
        document.getElementById("loggedUser").textContent = username;
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
