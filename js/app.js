document.addEventListener("DOMContentLoaded", () => {

    
    //set task ad completed
    const completeTask = (e) => {
        console.log("checked")

        e.currentTarget.classList.toggle("inactive")
        e.currentTarget.parentElement.classList.toggle("completed")
    }

    //set task as important
    const importantTask = (e) => {
        console.log("important")
        
        e.currentTarget.classList.toggle("important")
    }
    
    

    //Pop Ups

    const togglePopup = (element) => {
        element.classList.toggle("active")
    }

    const addPopup = document.querySelector(".add_popup")
    const addButton = document.querySelector(".add_button")
    const closeAddButton = document.querySelector(".add_popup_content_btn_close")

    addButton.addEventListener("click", function () {togglePopup(addPopup)})
    closeAddButton.addEventListener("click", function () {togglePopup(addPopup)})

    const deletePopup = document.querySelector(".delete_popup")
    const closeDeleteButton = document.querySelector(".delete_popup_content_btn_close")
    const confirmDeleteBtn = document.querySelector(".delete_popup_content_btn_submit")

    closeDeleteButton.addEventListener("click", function () {togglePopup(deletePopup)})
    confirmDeleteBtn.addEventListener("click", function () {togglePopup(deletePopup)})
  
    const editPopup = document.querySelector(".edit_popup")
    const closeEditButton = document.querySelector(".edit_popup_content_btn_close")
    const confirmEditBtn = document.querySelector(".edit_popup_content_btn_submit")

    closeEditButton.addEventListener("click", function () {togglePopup(editPopup)})
    confirmEditBtn.addEventListener("click", function () {togglePopup(editPopup)})

    
    //edit Task 

    

    let currentTask = undefined

    let currentTaskText = ""
    let currentTaskDeadline = ""

    const editTaskInput = document.querySelector(".edit_popup_content_task")
    const editTaskDDL = document.querySelector(".edit_popup_content_ddl input")

    const editTask = (e) => {
        console.log("edit")
        togglePopup(editPopup)
        currentTaskText = e.currentTarget.parentElement.children[1].innerText
        currentTaskDeadline = e.currentTarget.parentElement.children[2].innerText
        console.log(currentTaskText)
        console.log(currentTaskDeadline)
        editTaskInput.value = currentTaskText
        editTaskDDL.value = currentTaskDeadline

        currentTask = e.currentTarget.parentElement

    }


    const editThisTask = () => {

        let editTaskData = {
            editText:"",
            editDeadline: ""}

        editTaskData.editText = editTaskInput.value

        editTaskData.editDeadline = editTaskDDL.value
        
        console.log(editTaskData)
        console.log(currentTask)

        currentTask.children[1].innerText = editTaskData.editText
        currentTask.children[2].innerText = editTaskData.editDeadline
    }
    
    const saveEditButton = document.querySelector(".edit_popup_content_btn_submit")
    saveEditButton.addEventListener("click", editThisTask)



    //Delete Task

    let currentTaskToDelete = undefined

    const deleteTask= (e) => {
        currentTaskToDelete= e.currentTarget.parentElement
        togglePopup(deletePopup)
    }

    const confirmDelete = () => {
        console.log("delete")
        currentTaskToDelete.remove()
    }

    confirmDeleteBtn.addEventListener("click", confirmDelete )
    
    
    //New Task

    const saveAddButton = document.querySelector(".add_popup_content_btn_submit")
    
    const newTaskInput = document.querySelector(".add_popup_content_task")
    const newTaskDDL = document.querySelector(".add_popup_content_ddl input")

    const task = document.getElementById("task")
    const taskText = document.getElementById("task_text")
    const taskDeadline = document.getElementById("task_deadline")
    

    let now = new Date()
    let currentDate = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`

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

        newTask.children[0].addEventListener("click", completeTask)
        
        newTask.children[3].addEventListener("click", importantTask)

        newTask.children[4].addEventListener("click", editTask)

        newTask.children[5].addEventListener("click", deleteTask)
        
        task.after(newTask);
        
        console.log(newTask)

        togglePopup(addPopup);
        newTaskInput.value = "";
        newTaskDDL.value = "";

    }

    saveAddButton.addEventListener("click", saveNewTask)

    
    
    
    //Remove Completed Tasks
    
    let completedTasks = undefined

    const deleteCompletedBtn = document.querySelector(".delete_button")

    const deleteCompleted = () => {
        completedTasks = document.querySelectorAll(".completed")
        console.log(completedTasks)
        for (let i = 0; i < completedTasks.length; i++) {
            completedTasks[i].remove()     
        }
           
    }

    deleteCompletedBtn.addEventListener("click", deleteCompleted)
})

