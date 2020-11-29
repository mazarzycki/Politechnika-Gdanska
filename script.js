document.getElementById("open-contact-modal").addEventListener("click", openModal);

function openModal() {
    document.getElementById("contact").style.display = "block";
    var button = document.getElementById("close-modal");

    button.addEventListener("click", function () {
        document.getElementById("contact").style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == document.getElementById("contact")) {
            document.getElementById("contact").style.display = "none";
        }
    });


}

const parent = document.querySelector(".parent");
parent.addEventListener("click", function (e) {
    const child = e.target.matches(".child, .child *");
    if (child) {

        document.getElementById("contact").style.display = "block";
        var button = document.getElementById("close-modal");

        button.addEventListener("click", function () {
            document.getElementById("contact").style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target == document.getElementById("contact")) {
                document.getElementById("contact").style.display = "none";
            }
        });
    }
});

