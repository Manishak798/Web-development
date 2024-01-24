// const newTask = document.getElementById("task");
// const input = document.getElementById("input");
// const adbtnn = document.getElementById("adbtnn");
// const hidebtn = document.getElementById("hidebtn");
// const delbtn = document.getElementById("delbtn");
// const taskDoneElement = document.getElementById("taskdone");
// if (taskDoneElement) {
//     taskDoneElement.addEventListener("click", () => {
//         taskDoneElement.style.textDecoration = "line-through";
//         hidebtn.remove();
//     });
// }
// delbtn.addEventListener("click", () => {
//     if (newTask !== " ") {
//         newTask.remove();
//     }

// })
// function gettask() {

//     adbtnn.addEventListener("click", () => {
//         // input.value = " ";
//         var task = input.value;
//         console.log(task);
//         if (task.trim() !== "") {
//             newTask.innerHTML = `<div class="task-list">
//             <li >
//                 <div class="tasks">
//                     <p class="task" id="taskdone"> ${task}</p>
//                   <div class="edit" id="hidebtn"><button class="edit" ><i class="fa-solid fa-pen-to-square"></i></button></div>
//                 <div class="delete" id="delbtn"> <button class="delete"><i class="fa-solid fa-trash"></i></button></div>
//                 </div>
//             </li>

//         </div>
//         `
//         }

//     })

// }



// gettask();
document.addEventListener("DOMContentLoaded", function () {
    const newTaskContainer = document.getElementById("task");
    const input = document.getElementById("input");
    const adbtnn = document.getElementById("adbtnn");

    function addTaskToList(task) {
        const newTaskItem = document.createElement("div");
        newTaskItem.className = "task-list";
        newTaskItem.innerHTML = `
            <li>
                <div class="tasks">
                    <p class="task" id="taskdone">${task}</p>
                    <div class="edit" id="hidebtn"><button class="edit"><i class="fa-solid fa-pen-to-square"></i></button></div>
                    <div class="delete" id="delbtn"><button class="delete"><i class="fa-solid fa-trash"></i></button></div>
                </div>
            </li>
        `;
        newTaskContainer.appendChild(newTaskItem);

        const hidebtn = newTaskItem.querySelector("#hidebtn");
        const delbtn = newTaskItem.querySelector("#delbtn");
        const taskDoneElement = newTaskItem.querySelector("#taskdone");

        if (taskDoneElement) {
            taskDoneElement.addEventListener("click", () => {
                taskDoneElement.style.textDecoration = "line-through";
                hidebtn.remove();
            });
        }

        if (delbtn) {
            delbtn.addEventListener("click", () => {
                newTaskItem.remove();
            });
        }
    }

    function getTask() {
        adbtnn.addEventListener("click", () => {
            var task = input.value;
            console.log(task);
            if (task.trim() !== "") {
                addTaskToList(task);
                input.value = ""; // Clear the input field after adding the task
            }
        });
    }

    getTask();
});
