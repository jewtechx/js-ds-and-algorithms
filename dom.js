//get elements
document.querySelector("...")
document.querySelectorAll("...")
document.getElementsByTagName("...")
document.getElementsByClassName("...")
document.getElementById("...")


//create/clone elements
document.createElement("div")
document.createTextNode("...")
node.cloneNode()
textContent = "some text here"


//add node to document
parentNode.appendChild(nodeToAdd)
parentNode.insertBefore(nodeToAdd,childNode)


//get elements details
node.nextSibling
node.firstChild
node.lastChild
node.parentNode
node.childNodes
node.children

//modify elements
node.style.color = "red"
node.style.padding = "10px"

node.setAttribute('attr-name','attr-value')
node.removeAttribute('attr-name')

node.classList.add("clasnames")
node.classList.remove("clasnames")
node.classList.toggle("clasnames")
node.classList.contains("clasnames")
node.classList.replace("clasnames")

//remove node
parentNode.removeChild(nodetoRemove)
nodeToRemove.parentNode.removeChild(nodeToRemove)

//events
node.addEventListener('event', callback)
node.removeEventListener('event', callback)