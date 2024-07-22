document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".ansbox");

    boxes.forEach((box, index) => {
        box.addEventListener("click", function() {
            boxes.forEach(b => b.style.backgroundColor = "#B8BCB9");
            if (index === 1) {
                box.style.backgroundColor = "green";
            } else {
                box.style.backgroundColor = "red";
            }
        });
    });
});