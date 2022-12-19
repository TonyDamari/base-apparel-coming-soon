const form = document.getElementById("form");
const input = document.getElementById("email");
const errorMsg = document.querySelector(".error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validation();
});

function validation() {
    let regex = /\S+@\S+\.\S+/;
    let email = input.value;

    if (email.match(regex)) {
        errorMsg.classList.remove("active");
        input.value = "";
    } else {
        errorMsg.classList.add("active");
    }
}
