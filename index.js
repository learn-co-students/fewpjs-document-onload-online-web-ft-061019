document.addEventListener("DOMContentLoaded", function() {
    let content = document.querySelector("p");
    content.textContent = "This is really cool!"
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);