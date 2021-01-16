document.addEventListener("DOMContentLoaded", () => {

    //add new Task

    const addPopup = document.querySelector(".add_popup")
    const addButton = document.querySelector(".add_button")
    const closeAddButton = document.querySelector(".add_popup_content_btn_close")
    
    const toggleAddPopup = () => {
        addPopup.classList.toggle("active")
    }
    addButton.addEventListener("click", toggleAddPopup)
    closeAddButton.addEventListener("click", toggleAddPopup)

    const saveAddButton = document.querySelector(".add_popup_content_btn_submit")
    
    const newTaskInput = document.querySelector(".add_popup_content_task")
    const newTaskDDL = document.querySelector(".add_popup_content_ddl input")

    const task = document.getElementById("task")
    const taskText = document.getElementById("task_text")
    const taskDeadline = document.getElementById("task_deadline")
    

    let now = new Date()

    let currentDate = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`

    console.log(currentDate)

    let tasks = []

    const saveNewTask = () => {

        let newTaskData = {
            text:"",
            deadline: currentDate}

        newTaskData.text = newTaskInput.value

        if (newTaskDDL.value !== "") {
            newTaskData.deadline = newTaskDDL.value
        }
        tasks.push(newTaskData)

        taskText.innerText = tasks[tasks.length-1].text
        taskDeadline.innerText = tasks[tasks.length-1].deadline
        
        let newTask = task.cloneNode(true)
        
        newTask.id = `taskNo${tasks.length}`
        newTask.classList.remove("hidden")

        task.after(newTask);
        
        console.log(newTask)

        toggleAddPopup();
        newTaskInput.value = "";
        newTaskDDL.value = "";

    }
    saveAddButton.addEventListener("click", saveNewTask)

})

