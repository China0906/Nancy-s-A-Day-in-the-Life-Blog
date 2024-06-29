const userName = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');

function saveContent() {
    const userName = {
    userName: userName.value,
      title: title.value,
      content: content.value.trim(),
    };
    localStorage.setItem('userName', JSON.stringify(userName));