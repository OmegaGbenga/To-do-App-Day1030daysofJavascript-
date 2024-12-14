const inputBox = document.querySelector("#input-box");
const liContainer = document.querySelector("#list-container");
const addBtn = document.querySelector('#addBtn');




function addTask(){
    if (inputBox.value === ''){
        alert("Input field cannot be empty")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        liContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value="";
    saveData();
};
addBtn.addEventListener("click", addTask);
liContainer.addEventListener('click', function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
  
    
},false)

function saveData(){
    localStorage.setItem("data", liContainer.innerHTML)
}


function showTask(){
    liContainer.innerHTML = localStorage.getItem("data");
}
showTask();


