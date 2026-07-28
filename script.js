const bulb = document.getElementById("bulb");
const button = document.getElementById("toggleBtn");

let isOn = false;

button.addEventListener("click", () => {
    isOn = !isOn;

    if (isOn) {
        bulb.classList.add("on");
        button.textContent = "Turn OFF";
    } else {
        bulb.classList.remove("on");
        button.textContent = "Turn ON";
    }
});