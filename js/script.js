// responsive nav bar
var menuBar=document.querySelector(".menu");
menuBar.addEventListener("click",function (){
    document.getElementById("navmenu").classList.toggle("show")
})
// skills control 
function showSkills(){
    document.getElementById("skilled").onclick=()=>{
        document.getElementById('describe').classList.toggle("show");
    }
    document.getElementById("ps").onclick=()=>{
        document.getElementById('photoshop').classList.toggle("show");
    }
    document.getElementById("ill").onclick=()=>{
        document.getElementById('illustrator').classList.toggle("show");
    }
    document.getElementById("python").onclick=()=>{
        document.getElementById('py').classList.toggle("show");
    }
    document.getElementById("c").onclick=()=>{
        document.getElementById('c-lang').classList.toggle("show");
    }
    document.getElementById("js").onclick=()=>{
        document.getElementById('java-script').classList.toggle("show");
    }
    document.getElementById("english").onclick=()=>{
        document.getElementById('eng').classList.toggle("show");
    }
    document.getElementById("kinya").onclick=()=>{
        document.getElementById('kinyarwanda').classList.toggle("show");
    }
    document.getElementById("sw").onclick=()=>{
        document.getElementById('swahili').classList.toggle("show");
    }
}
showSkills()


// -----------unfold projects-----------
function project() {
    document.getElementById("more-btn").innerHTML = "Load more";
    document.getElementById("more-icon").innerHTML = '<i class="uil uil-angle-down"></i>'; // Down arrow for "load more"
    const toggleButton = document.getElementById("more");
    toggleButton.addEventListener("click", unfold);
}

function unfold() {
    const hideElements = document.querySelectorAll('.hide');
    const moreBtn = document.getElementById("more-btn");
    const moreIcon = document.getElementById("more-icon");

    hideElements.forEach(element => {
        element.classList.toggle('show');
    });

    // Update button text and icon based on the first element's state
    if (hideElements.length > 0 && hideElements[0].classList.contains('show')) {
        moreBtn.innerHTML = "Load few";
        moreIcon.innerHTML = '<i class="uil uil-angle-up"></i>'; // Up arrow for "load few"
    } else {
        moreBtn.innerHTML = "Load more";
        moreIcon.innerHTML = '<i class="uil uil-angle-down"></i>'; // Down arrow for "load more"
    }
}

document.addEventListener("DOMContentLoaded", project);



