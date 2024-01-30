// const bulb = document.getElementById('bulb');
// const lgpara = document.getElementById('lg-para');
// const darkpara = document.getElementById('dk-para');
// const lightmode = document.getElementById('sun');
// const darkmode = document.getElementById('moon');
// const body = document.getElementById('body');
// const icon = document.getElementById('icn');
// let mode = "";
// lightmode.addEventListener('click', () => {
//     lgpara.innerHTML = "Light Mode";
//     lightmode.classList.add('active');
//     darkmode.classList.remove('active');
//     darkpara.innerHTML = " ";
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
// })

// darkmode.addEventListener('click', () => {
//     lgpara.innerHTML = " ";
//     darkpara.innerHTML = "Dark Mode";
//     darkmode.classList.add('active');
//     lightmode.classList.remove('active');
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//     icon.style.color = "black";
// })



// //Dark Mode
const bulb = document.getElementById('bulb');
const lgpara = document.getElementById('lg-para');
const darkpara = document.getElementById('dk-para');
const lightmode = document.getElementById('sun');
const darkmode = document.getElementById('moon');
const body = document.getElementById('body');
const icon = document.getElementById('icn');

// Retrieve the mode from local storage
let mode = localStorage.getItem('mode');

// Check if a mode is stored in local storage
if (mode) {
    setMode(mode);
}

lightmode.addEventListener('click', () => {
    setMode('light');
});

darkmode.addEventListener('click', () => {
    setMode('dark');
});

function setMode(newMode) {
    // Set the mode in local storage
    localStorage.setItem('mode', newMode);

    // Update the UI based on the selected mode
    if (newMode === 'light') {
        lgpara.innerHTML = "Light Mode";
        lightmode.classList.add('active');
        darkmode.classList.remove('active');
        darkpara.innerHTML = " ";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        icon.style.color = "black";  // Update this line if necessary
    } else {
        lgpara.innerHTML = " ";
        darkpara.innerHTML = "Dark Mode";
        darkmode.classList.add('active');
        lightmode.classList.remove('active');
        body.style.backgroundColor = "black";
        body.style.color = "white";
        icon.style.color = "black";  // Update this line if necessary
    }
}
