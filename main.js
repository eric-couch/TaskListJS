// document.addEventListener("DOMContentLoaded", function() {
//     const createList = document.getElementById("createList");

//     createList.addEventListener("click", function() {
//         let createListName = prompt("Enter a list name");

//         const taskListName = document.getElementById("TaskListName");
//         taskListName.innerText = createListName;
//     })
// })

document.addEventListener("DOMContentLoaded", function() {
    const createList = document.getElementById("createList");

    createList.addEventListener("click", function() {
        const createListName = document.getElementById("createListName").value;

        const taskListName = document.getElementById("TaskListName");
        taskListName.innerText = createListName;
    })
})

    

