const toggleButton = document.querySelector(".toggle_button");
const navLinks = document.querySelector(".navLinks");
const preViewButton = document.getElementsByClassName('.preViewButton')
const projectImage = document.getElementsByClassName('.img');
const projDetails  = document.querySelector('.details');
toggleButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
});

// preViewButton.addEventListener('click', ()=>{
//     projectImage.classList.add('flex');
//     projDetails.style.display = 'none'
// })
function change(){
    projectImage.classList.add('flex');
    projDetails.style.display = 'none'
}

for (let index = 0; index < 9; index++) {
    preViewButton[index].addEventListener('click', change)
}

