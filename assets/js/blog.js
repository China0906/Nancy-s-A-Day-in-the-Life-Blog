
function myFunction(onClick) {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

// Number - 5
// Array - [element, element,lement] -> storing multiple of the same thing
// String - "text" or '' or `` -> storing simple information
// Boolean - true or false -> yes/no -> if/else condition based on this
// Object - {key1:value1, key: value, key3: value3} -> 

// var firstName = "Nancy"
// var person = {
//    firstName: "Nancy",
//    lastName: "Ramon", 
//    age: 20,
//    isOverage: false,
//    hobbies: []
// // }
// var agePlusTwenty = person.isOverage + 20

// console.log("AgePlus Twenty: ", agePlusTwenty)


// var storage = localStorage.getItem("saved-blogs")
// console.log("Storage: ", storage)
// //I have to set it up only once. when?
// if(storage === null){
//    console.log("'STORAGE WAS INDEED NULL")
//    localStorage.setItem("saved-blogs", JSON.stringify([]))
// }
// storage = localStorage.getItem("saved-blogs")

// console.log("Storage: ", storage)

function renderBlogs()
{
   var storage = JSON.parse(localStorage.getItem("userData"))
   var blogElement = document.getElementById ("Blogs")
   
console.log("Storage: ", storage)
//I have to set it up only once. when?
if(storage){
   // FOR LOOP
   // [{},{},{}] --> length
   var divEl = document.createElement("div")
   for (let i = 0; i < storage.length; i++) {
      var parentDivEl = document.createElement("div")
      parentDivEl.style.margin = "25px"
      parentDivEl.style.border = "1px solid black"
   var divTitle = document.createElement("div")
   var divContent = document.createElement("div")
   var divUsername = document.createElement("div")
   
   divTitle.innerHTML = storage[i].title
   divContent.innerHTML = storage[i].content
   divUsername.innerHTML = storage[i].userName
   
   parentDivEl.append(divTitle, divContent,divUsername)
   divEl.append(parentDivEl)
   
}

console.log(divEl)
// console.log(blogElement)
blogElement.appendChild(divEl)

}

//storage


}
renderBlogs()
