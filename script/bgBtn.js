const bg = document.querySelector('body');
const bg2 = document.querySelector('footer');
const bg3 = document.getElementById('contact');
const lightmode = document.getElementById('light-mode');
const pinkmode = document.getElementById('pink-mode');
const greenmode = document.getElementById('green-mode');
const purplemode = document.getElementById('purple-mode');

function bgColorWhite(event){
    bg.style.backgroundColor = '#EEE9E9';
    bg2.style.backgroundColor = '#EEE9E9';
    bg3.style.backgroundColor = '#EEE9E9';
}

function bgColorPink(event){
    bg.style.backgroundColor = '#F4D4D4';
    bg2.style.backgroundColor = '#F4D4D4';
    bg3.style.backgroundColor = '#F4D4D4';
}

function bgColorGreen(event){
    bg.style.backgroundColor = '#606B56';
    bg2.style.backgroundColor = '#606B56';
    bg3.style.backgroundColor = '#606B56';
}

function bgColorPurple(event){
    bg.style.backgroundColor = '#C3D1E4';
    bg2.style.backgroundColor = '#C3D1E4';
    bg3.style.backgroundColor = '#C3D1E4';
}


lightmode.addEventListener("click", bgColorWhite);
pinkmode.addEventListener("click", bgColorPink);
greenmode.addEventListener("click", bgColorGreen);
purplemode.addEventListener("click", bgColorPurple);