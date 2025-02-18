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
    taskList.style.textAlign='left';
    const taskText=document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent=inputtext;
    const radiobtn=document.createElement('input');
    radiobtn.type='radio';
    radiobtn.classList.add('complete-radio');
    radiobtn.addEventListener('change',()=>{
        if(radiobtn.checked){
            taskText.classList.add('completed');
        }else{
            taskText.classList.remove('completed');
        }
    });
    li.appendChild(radiobtn);
    li.appendChild(taskText);
    taskList.appendChild(li);
    textInput.value="";
    textInput.setAttribute('placeholder','enter your text');

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
        const taskText=li.querySelector('.task-text');
        const isCompleted=taskText.classList.contains('completed');
        tasks.push(isCOmpleted ? '[completed]':'[pending]'+taskText.textContent);
    });

    if (tasks.length === 0) {
        alert("No tasks available!");
    } else {
        alert("Tasks:\n" + tasks.join("\n"));
    }
});



