
const submitButton = document.getElementById('submit');

function saveContent(event) {
    event.preventDefault();
    const userName = document.getElementById('username');
    const title = document.getElementById('title');
    const content = document.getElementById('content');
    let userData = JSON.parse(localStorage.getItem("userData"))
    const userDetails= {
        userName: userName.value,
          title: title.value,
          content: content.value.trim(),
        };
    if (userData) {
        userData.push(userDetails)
    } else {
        userData = []
        userData.push(userDetails)
    }
    
  
    localStorage.setItem('userData', JSON.stringify(userData));
}
submitButton.addEventListener('click' , saveContent)
    