function openModal() {
    document.getElementById("contact").style.display = "block";
    var span = document.getElementById("close-modal");
    span.onclick = function () {
        document.getElementById("contact").style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == document.getElementById("contact")) {
            document.getElementById("contact").style.display = "none";
        }
    }
}