let enterName = document.querySelector(".name");
let enterPoint = document.querySelector(".point");
let addButton = document.querySelector(".addToList");
let list = document.querySelector(".student-list");

addButton.addEventListener("click", function () {
    let name = enterName.value;
    let point = Number(enterPoint.value);

    if (enterName == ""  || enterPoint == "") {
        alert("Nhập đầy đủ tên sinh viên và điểm");
        return;
    }

    let li = document.createElement("li");
    li.textContent = `${name} - ${point} điểm`;

    if (point >= 5) {
        li.style.color = "green";
    } else {
        li.style.color = "red";
    }

    list.appendChild(li);
    li.addEventListener("click", function() {
        list.removeChild(li);
    });

    enterName,value = "";
    enterPoint.value = "";
});