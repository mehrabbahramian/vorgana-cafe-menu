const parser = new DOMParser();
const main = document.getElementById('main');
const links = document.querySelectorAll('.link');

const toggle = (checked)=>{
    const check = document.getElementById('hamburger');

    if (checked != check.checked) {
        check.click();
    }
}



links.forEach((link)=>{
    link.addEventListener("click", toggle);
});

// -------------------------

const icon = document.getElementById("icon");
const menu = document.getElementById("menuToggle");

icon.onclick = ()=>{
    const moonSun = document.querySelector(".moonSun")
    document.body.classList.toggle("light-theme");

    moonSun.classList.add('anim');
    if(document.body.classList.contains("light-theme")){
        moonSun.classList.remove("fa-sun");
        moonSun.classList.add("fa-moon");
    }else{
        moonSun.classList.remove("fa-moon");
        moonSun.classList.add("fa-sun");
    }
};
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 100){
        menu.classList.add("active");
        icon.classList.add("active");
    }else{
        menu.classList.remove("active");
        icon.classList.remove("active");
    }
})
// -------------------------
