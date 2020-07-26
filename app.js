var list = document.getElementById("list")


function todo(){
var val = document.getElementById("val")
var li = document.createElement("li")
var liText = document.createTextNode(val.value)
li.appendChild(liText)
list.appendChild(li)

var delBtn = document.createElement("button")
var delText = document.createTextNode("DELETE")
delBtn.appendChild(delText)
delBtn.setAttribute("class","btn")
delBtn.setAttribute("onclick","dltItem(this)")
li.appendChild(delBtn)

var editBtn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick", "editBtn(this)")
li.appendChild(editBtn)


val.value = " "


}

function dltItem(e){
  e.parentNode.remove()
}

function deleteitem(){
    list.innerHTML = ""
}

function editBtn(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val)
    e.parentNode.firstChild.nodeValue = editValue
}