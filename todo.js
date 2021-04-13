var numOfTasks = document.getElementsByClassName("taskitem").length;


var itemCount = numOfTasks;
var taskNum = document.querySelector(".tasknum");
taskNum.textContent = numOfTasks + " Tasks";

var taskList = document.getElementById("items");

var filter = document.getElementById("filter");
console.log(filter);

// Add click event 
var additem = document.querySelector(".fa-plus");
additem.addEventListener("click", addTask);

// Add delete event
taskList.addEventListener("click", deleteItem);

// Add filter event
filter.addEventListener("keyup", filtersearch);
function addTask(e) {
    console.log(e.target.className);

    var taskitem = document.createElement("li")
    taskitem.className = "taskitem";

    var newItem = prompt("Add a new task", "");
    if (newItem != null) {
        
        // create circle div
        var circle = document.createElement("div");
        circle.className = "circle";

        // create span
        var span = document.createElement("span");
        span.textContent = newItem;

        //create button
        var button = document.createElement("button");
        button.className = "thebtn";
        var faTrash = document.createElement("i");
        faTrash.className = "fa fa-trash";
        faTrash.ariaHidden = "true";

        // add fatrash to button
        button.appendChild(faTrash);
        console.log(button);

        // Create task item

        taskitem.appendChild(circle);
        taskitem.appendChild(span);
        taskitem.appendChild(button);
        console.log(taskitem);

        // Increament the task list
        var taskList = document.querySelector(".tasklist");
        taskList.appendChild(taskitem);
        itemCount++;
        taskNum.textContent = itemCount + " Tasks";
    }

}


// delete item 

function deleteItem(e) {
    if(e.target.classList.contains("fa-trash")){ 
        var li = e.target.parentElement.parentElement;
        if(confirm("Are you sure?")) {
            taskList.removeChild(li);
            itemCount--;
            taskNum.textContent = itemCount + " Tasks";
        }
    }
}


// filter search item
function filtersearch(e) {
    var textlower = e.target.value.toLowerCase();

    // Get the list
    var tasks = taskList.getElementsByTagName("li");

    //  Convert to array
    Array.from(tasks).forEach(function(task) {
        var taskName = task.children[1].textContent;
        console.log(taskName);
        if(taskName.toLowerCase().indexOf(textlower) != -1) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    })
}

