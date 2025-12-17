let taxSwitch = document.getElementById("switchCheckDefault");
let taxToggle = document.querySelector(".tax-toggle");
let taxInfo = document.querySelectorAll(".gst");

taxToggle.addEventListener("click", (e) => {
    if (e.target.tagName !== "INPUT" && e.target.tagName !== "LABEL") {
        taxSwitch.click();
    }
});

taxSwitch.addEventListener('change', () => {
    for (let info of taxInfo) {
        if (info.style.display != 'inline') {
            info.style.display = 'inline';
        } else {
            info.style.display = 'none';
        }
    }
});