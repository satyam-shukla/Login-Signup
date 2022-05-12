//email validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

function userLogin() {

    let loginUserName, loginUserPass, loginUserEmail;
    loginUserName = document.getElementById("loginUsername").value;
    loginUserPass = document.getElementById("loginPassword").value;


    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
        return v.username == loginUserName && v.password == loginUserPass;
    })) {
        swal(`Good Job`, "You Have Login Successfully, Welcome to Home Page", "success");
        setTimeout(function () {
            window.location.href = "https://satyam-shukla.github.io/my_blog/"
        }, 5000);
    }
    else if (user_records.some((v) => {
        return v.email == loginUserName && v.password == loginUserPass;
    })) {
        swal(`Good Job`, "You Have Login Successfully, Welcome to Home Page", "success");
        setTimeout(function () {
            window.location.href = "https://satyam-shukla.github.io/my_blog/"
        }, 5000);

    }
    else if (user_records.some((v) => {
        return v.email == loginUserName && v.password != loginUserPass;
    })) {
        alert("Password is Incorrect ");
    }
    else if (user_records.some((v) => {
        return v.email != loginUserName;
    })) {
        alert("Email is not Registered ");
    }
    else {
        alert('Account is not exist,Register First');
    }

}
