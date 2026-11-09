document.addEventListener("DOMContentLoaded", () => {
  
// select form
const createTaskForm = document.getElementById("create-task-form")

// handle form submission
createTaskForm.addEventListener("submit",(event)=>{
    event.preventDefault()

   const task = event.target.elements["new-task-description"].value

   buildTODo(task)
})

function buildTODo(task){
    console.log(task)
// create new element and apend  its the content
    const taskList= document.getElementById("tasks")

    const li =document.createElement("li")

    li.textContent = task
    taskList.appendChild(li)
}

});
