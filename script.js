const button = document.querySelector(".js-button");

button.addEventListener("click", check);

function check() {
    let email = document.querySelector(".js-email");

    const error = document.querySelector("main .container .content .input p");

    const errorImage = document.querySelector("main .container .content .input .js-error")

    const media = window.matchMedia("(max-width: 500px)");

    if (!(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email.value))) {
        email.style.borderColor = "hsl(0, 93%, 68%)";
        error.style.visibility = "visible";
        errorImage.style.visibility = "visible";
    } else {
        email.style.borderColor = "hsla(0, 6%, 24%, 0.2)";
        error.style.visibility = "hidden";
        errorImage.style.visibility = "hidden";
        email.value = "";
    }

    /* if (media.matches && error.style.visibility === "visible") {
        error.style.marginBottom = "20px";
    } else {
        error.style.marginBottom = "0";
    } */
}