//Performing crud operation
let addBtn=document.getElementById('add_btn')
addBtn.addEventListener('click',addName)
let parentList=document.getElementById('parentList')

function addName(e){
    //c->creat
    //this is a check for cheking empty content
    if(parentList.children[0].className=="emptyMsg"){
        parentList.children[0].remove()
    }
    //grabing of Name text on click
    let currentBtn=e.currentTarget;
    let currentInput=currentBtn.previousElementSibling
    let currentChapterName=currentInput.value

    //new element created at added into the element
    let newLi=document.createElement('li')
    //newLi.classList.add('list-group-item')
    newLi.className="list-group-item  d-flex justify-content-between"
    newLi.innerHTML=`<h3  class="flex-grow-1">${currentChapterName}</h3>
    <button class="btn btn-warning mx-5"onclick="editName(this)">Edit</button>
    <button class="btn btn-danger" onclick="removeName(this)">Remove</button></li>`

    //insertin in dom
   
    parentList.appendChild(newLi)
}

function removeName(currElement){
    //Remove opertion
    //Selecting of parent element of currelement where currelement is the remove button
    currElement.parentElement.remove()
    //checking that there are any children present or not to show the message that list is empty
    if(parentList.children.length<=0){
        //creating an new element for textcontent
        let newEmptyMsg=document.createElement("h3")
        newEmptyMsg.classList.add("emptyMsg") //creating new class to cheack while adding elements that it should not show text content
        newEmptyMsg.textContent="Nothing is here. Please add name!!"
        parentList.appendChild(newEmptyMsg)
    } 

}

function editName(currElement){
    //edit operation
    //travesing to name which is sibling of edit button need to be selected
    //console.log(currElement.previousElementSibling)
    //now preious sibling textcontent need to be copied and stored in variable because when we make newelemnt we can palce the contet
    if(currElement.textContent=="Done"){
        currElement.textContent="Edit"
        let currChapterName=currElement.previousElementSibling.value;
        let currHeading=document.createElement('h3');
        currHeading.className="flex-grow-1"
        currHeading.textContent=currChapterName
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)
    }
    else{
    currElement.textContent="Done"
    let currChapterName=currElement.previousElementSibling.textContent
    let currInput=document.createElement('input');
    currInput.type="text"
    currInput.placeholder="Name"
    currInput.className="form-control"
    currInput.value=currChapterName;

    //replacing of previous name by new name content

    currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }
}