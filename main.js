let popup = document.getElementById("popup");
function openPopup() {
    if (popup.style.display ==="block"){
        popup.style.display = "none"
    } else {
        popup.style.display ="block"
    }

    window.onclick = function(event) {
        if (event.target == document.getElementById("popup")) {
          popup.style.display="none";
        }
      };
}

let file = document.getElementById("file");
function openProject() {
    if (file.style.display ==="block"){
        file.style.display = "none"
        popup.style.display="none"
    } else {
        file.style.display ="block"
        popup.style.display="none"
    }
}
let certificates = document.getElementById("certificates");
function openCertificate() {
    if (certificates.style.display ==="block"){
        certificates.style.display = "none"
        popup.style.display="none"
    } else {
        certificates.style.display ="block"
        popup.style.display="none"
    }
}

let aboutme = document.getElementById("about-me")
function openAboutme() {
    if (aboutme.style.display ==="block"){
        aboutme.style.display = "none"
        popup.style.display="none"
    } else {
        aboutme.style.display ="block"
        popup.style.display="none"
    }
}



function confirmExit() {
    if (window.confirm("Are you sure you want to exit?")) {
        window.location.href = "https://www.google.com";
    }
}

function exitab() {
    if (aboutme.style.display ==="block"){
        aboutme.style.display = "none"
    }
}
function exitcert(){
    if (certificates.style.display ==="block"){
        certificates.style.display = "none"
    }
}

function exitfile(){
    if (file.style.display ==="block"){
        file.style.display = "none"
    } 
}

