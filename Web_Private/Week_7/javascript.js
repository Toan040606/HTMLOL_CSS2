// Bài 1:
// let userName = prompt("Nhập tên của bạn:");
// let userAge = prompt("Nhập Tuổi của bạn:");
// userAge = Number(userAge) + 1;
// if (Number(userAge) == userAge) {
//     alert(`Chào mừng ${userName.toUpperCase()}! Tên của bạn thật đẹp, nó có ${userName.length} ký tự. Năm sau, bạn sẽ ${(userAge)} tuổi.`);
// }

// Bài 2
// let userAge = prompt("Nhập năm sinh của bạn: ");
// userAge = Number(userAge);
// userAge = 2025 - userAge;
// alert(userAge === 18 ? "Bạn vừa đủ tuổi lái xe, hãy cẩn thận." : (userAge > 18 ? "Bạn đã đủ tuổi lái xe." : "Bạn chưa đủ tuổi lái xe."));
// console.log(userAge == "18");
// console.log(userAge === "18");

// Bài 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const num of numbers) {
//     if (num % 2 !== 0) {
//         continue;
//     }
//     console.log(num);
// }

// let evenNumbers = []
// for (let i = 0; i < 10; i++) {
//     if (Number(numbers[i]) % 2 !== 0) {
//         continue;
//     }
//     evenNumbers.push(numbers[i]);
// }
// console.log(evenNumbers);

//Bài 4
let toDoList = [];
let nameWork;
let running = true;
while(running) {
    let choose = prompt("To Do List\nWhat do you want to do?\n1. Add\n2. Show\n3. Edit\n4. Remove\n5. Exit");
    choose = Number(choose);
    switch(choose) {
        case 1:
            let addWork = prompt("Input new work: ")
            toDoList.push(addWork);
            alert("Your new work added!")
            break;
        case 2:
            if (toDoList.length === 0) {
                alert("Nothing in here, please add your work");
            } else {
                let count = 0;
                let string = '';
                for (const work of toDoList) {
                    string += `${count+1}. ` + work + '\n';
                }
                alert("Here your works:\n" + string);
                console.log(string);
            }
            break;
        case 3:
            nameWork = prompt("Input the name of work you want to edit");
            let index, flag = false;
            for (let i=0; i<toDoList.length; i++) {
                if (nameWork === toDoList[i]) {
                    index = i;
                    flag = true;
                    break;
                }
            }

            if (flag) {
                let work = prompt("Input the new name of work");
                toDoList[index] = work;
            } else {
                alert("WORK NOT EXIST");
            }
            break;
        case 4:
            nameWork = prompt("Input the name of work you want to remove");
            for (const work of toDoList) {
                if (nameWork === work) {
                    toDoList.pop(work);
                    break;
                }
            };
        case 5:
            running = false;
            break;
        default:
            alert("INVALID CHOOSEN");
            break;
    }
}