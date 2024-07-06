//LOCAL STORAGE -> WHAT DO WE WANT TO STORE
// ONE? MULTIPLE?
// HOW COMPLEX IS EACH THING i WANT TO STORE IF MULTIPLE

// Youu want to store multiple blogs

var blogArray = []

//each blog consists of what - date, content, title
var aBlog = {date: "", content: "", title: ""}


//LOCAL STORAGE
// WHAT CAN WE SAVE AS LOCAL STORAGE WHAT IS THE ONLY DATATYPE?
// WE CAN ONLY SAVE STRINGS JSON.stringify();


var storage = localStorage.getItem("saved-blogs")
console.log(storage)