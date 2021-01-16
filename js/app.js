document.addEventListener("DOMContentLoaded", () => {

    //add new Task

    const addPopup = document.querySelector(".add_popup")
    const addButton = document.querySelector(".add_button")
    const closeAddButton = document.querySelector(".add_popup_content_btn_close")
    
    const toggleAddPopup = (element) => {
        element.classList.toggle("active")
    }

    addButton.addEventListener("click", function () {toggleAddPopup(addPopup)})
    closeAddButton.addEventListener("click", function () {toggleAddPopup(addPopup)})

    const deletePopup = document.querySelector(".delete_popup")
    const closeDeleteButton = document.querySelector(".delete_popup_content_btn_close")

    const confirmDeleteBtn = document.querySelector(".delete_popup_content_btn_submit")

    closeDeleteButton.addEventListener("click", function () {toggleAddPopup(deletePopup)})
    confirmDeleteBtn.addEventListener("click", function () {toggleAddPopup(deletePopup)})

    const deleteTaskPermanently = (e) => {
        console.log(e.currentTarget.parentElement)
        e.currentTarget.parentElement.remove()
    }



    // confirmDeleteBtn.addEventListener("click", )

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
    let completedTasks = []

    const completeTask = (e) => {
        console.log("checked")

        e.currentTarget.classList.toggle("inactive")
        e.currentTarget.parentElement.classList.toggle("completed")
    }

    const importantTask = (e) => {
        console.log("important")
        
        e.currentTarget.classList.toggle("important")
    }

    const editTask = () => {
        console.log("edit")
    }

    const deleteTask = () => {
        console.log("delete")
        toggleAddPopup(deletePopup)
    }
    

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

        newTask.children[0].addEventListener("click", completeTask)
        
        newTask.children[3].addEventListener("click", importantTask)

        newTask.children[4].addEventListener("click", editTask)

        newTask.children[5].addEventListener("click", deleteTaskPermanently)
        
        task.after(newTask);
        
        console.log(newTask)

        toggleAddPopup(addPopup);
        newTaskInput.value = "";
        newTaskDDL.value = "";

    }
    saveAddButton.addEventListener("click", saveNewTask)

    const checkTaskBtn = document.querySelectorAll(".list_task_checked")
    
    


  

    

    checkTaskBtn[0].addEventListener("click", completeTask)

})

