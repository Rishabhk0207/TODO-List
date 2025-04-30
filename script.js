let data = document.querySelector('#addlist');
let btn = document.querySelector('#addButton');
let container = document.querySelector('.todo_list');
let container2 = document.querySelector('.progress_list');
let container3 = document.querySelector('.done_list');
let todoArray = [];
let progress = [];
let done = [];


function deletelist(index) {
    todoArray = todoArray.filter((key, i) => i !== index);
    renderdataTodo();
}
function deletelist2(index) {
    done = done.filter((key, i) => i !== index);
    renderdataDone();
}



function moveRight(index) {
    let pushValue = todoArray[index];
    todoArray = todoArray.filter((key, i) => i != index);
    progress.push(pushValue);
    renderdataTodo();
    renderdataProgress();
}

function moveRight2(index) {
    let pushValue = progress[index];
    progress = progress.filter((key, i) => i != index);
    done.push(pushValue);
    renderdataProgress();
    renderdataDone();

}

function moveLeft(index) {
    let pushValue = progress[index];
    progress = progress.filter((key, i) => i != index);
    todoArray.push(pushValue);
    renderdataProgress();
    renderdataTodo();

}
function moveLeft2(index) {
    let pushValue = done[index];
    done = done.filter((key, i) => i != index);
    progress.push(pushValue);
    renderdataDone();
    renderdataProgress();
    

}





function renderdataTodo() {
    container.innerHTML = '';
    todoArray.forEach((key, i) => {
        container.innerHTML +=
            `  <div class="todo">
                <p>${key}</p>
            <div class="buttons">
                <button onclick="moveRight(${i})">&RightArrow;</button>   
                <button onclick="deletelist(${i})" >Delete</button>
            </div>
            </div>`
    })
    data.value = "";
}

function renderdataProgress() {
    container2.innerHTML = '';
    progress.forEach((key, i) => {
        container2.innerHTML +=
            `  <div class="todo1">
                <p>${key}</p>
            <div class="buttons">
            <button onclick="moveLeft(${i})">&larr;</button>  
                 <button onclick="moveRight2(${i})">&RightArrow;</button>   
            </div>
            </div>`
    })
}


function renderdataDone(){
    container3.innerHTML = '';
    done.forEach((key, i) => {
        container3.innerHTML +=
            `  <div class="todo2">
                <p>${key}</p>
            <div class="buttons">
            <button onclick="moveLeft2(${i})">&larr;</button>   
            <button onclick="deletelist2(${i})" >Delete</button>
            </div>
            </div>`
    })
}







btn.addEventListener('click', () => {
  if(data.value !==""){
    todoArray.push(data.value);
    renderdataTodo();
  }
})

