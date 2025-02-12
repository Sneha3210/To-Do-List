const textInput = document.getElementById("inputtext");
const addbtn = document.getElementById("btn1id");
const rembtn = document.getElementById("btn2id");
const showtasklist = document.getElementById("btn3id");
const taskList = document.getElementById("tasklist");
addbtn.addEventListener("click", () => {
    const inputtext = textInput.value.trim(); 
    if (inputtext === "") {
        alert("Please enter a task!"); 
        return;
    }
    const li = document.createElement("li"); 
    li.innerHTML = `${inputtext} <button class="rembtn">❌</button>`; 
    taskList.appendChild(li); 
    textInput.value = ""; 
    li.querySelector(".rembtn").addEventListener("click",()=>{
    li.remove();
    });
});

rembtn.addEventListener("click", () => {
    if (taskList.childElementCount > 0) {
        taskList.removeChild(taskList.lastChild);
    } else {
        alert("No tasks to remove...");
    }
});

showtasklist.addEventListener("click", () => {
    const tasks = [];
    document.querySelectorAll("#tasklist li").forEach(li => {
        tasks.push(li.textContent.replace("❌", "").trim());
    });

    if (tasks.length === 0) {
        alert("No tasks available!");
    } else {
        alert("Tasks:\n" + tasks.join("\n"));
    }
});


