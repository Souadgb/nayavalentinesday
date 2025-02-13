document.addEventListener("DOMContentLoaded", function () {
    const rose = document.querySelector(".rose");
    const message = document.querySelector(".message");

    rose.addEventListener("click", function () {
        rose.classList.add("clicked");

        // Show the message
        message.classList.add("show");

        // Remove glow after animation to reset
        setTimeout(() => {
            rose.classList.remove("clicked");
        }, 800);
    });

    const roseButton = document.querySelector('.rose-button');
    const roseContainer = document.querySelector('.rose-container');

    roseButton.addEventListener('click', () => {
        roseContainer.classList.toggle('clicked');
    });
});
