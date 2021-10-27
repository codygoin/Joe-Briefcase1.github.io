let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/capybara-square-1.jpg') {
        myImage.setAttribute('src', 'images/capybara-square-2.jpg');
    } else {
        myImage.setAttribute('src', 'images/capybara-square-1.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let username = prompt('Please enter your name');
    if (!username) {
        setUserName();
    }
    else {
        localStorage.setItem('name', username);
        myHeading.textContent = 'Welcome to the capybara appreciation page, ' + username;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to the capybara appreciation page, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}