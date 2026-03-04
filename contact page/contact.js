const nameError = document.querySelector(".nameError")
const emailError = document.querySelector(".emailError")
const numberError = document.querySelector(".numberError")

const Name = document.querySelector("#name")
const email = document.querySelector("#email")
const number = document.querySelector("#number")

const send = document.querySelector(".send")

send.addEventListener("click", (e) => {
    e.preventDefault()
    if (nameCheck() && emailCheck() && numberCheck()) {
        e.target.textContent = "Sending..."
        setTimeout(() => {
            e.target.textContent = "send Succesfully!"
            setTimeout(() => {
                e.target.textContent = "Send Message"
            }, 1000)
        }, 1000)
    }
})


function nameCheck() {
    console.log("Value:", Name.value);
    console.log("Has number:", /\d/.test(Name.value));
    console.log("Length:", Name.value.length);
    if (Name.value === "") {
        nameError.classList.remove("hide")
        nameError.textContent = "Please Enter your name! "
        return false
    }
    else if (/\d/.test(Name.value)) {
        nameError.classList.remove("hide")
        nameError.textContent = "Invalid name! "
        return false
    }
    else {
        nameError.classList.add("hide")
        return true
    }
}

function emailCheck() {
    if (email.value === "") {
        emailError.classList.remove("hide")
        emailError.textContent = "Please Enter your Email!"
        return false
    }
    else if (!email.value.includes("@gmail.com")) {
        emailError.classList.remove("hide")
        emailError.textContent = "Invalid Email!"
        return false
    }
    else {
        emailError.classList.add("hide")
        return true
    }
}

function numberCheck() {
    if (number.value === "") {
        numberError.classList.remove("hide")
        numberError.textContent = "Please Enter your number! "
        return false
    }
    else if (number.value.length < 10 || /[a-zA-Z]/.test(number.value) || number.value.length > 10) {
        numberError.classList.remove("hide")
        numberError.textContent = "Invalid number! "
        return false
    }
    else {
        numberError.classList.add("hide")
        return true
    }
}