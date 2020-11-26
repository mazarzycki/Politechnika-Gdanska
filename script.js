function open_modal() {
    document.getElementById("contact").style.display = "block";
    var span = document.getElementById("close_modal");
    span.onclick = function () {
        document.getElementById("contact").style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == document.getElementById("contact")) {
            document.getElementById("contact").style.display = "none";
        }
    }
}