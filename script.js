//**************************mobile Ui Error*********

if (window.innerWidth < 1200) {
  alert(
    "currently the given website in not reponsive for the phone UI, please Open on Desktop or laptop for better experience!!!"
  );
}

//***************** PreLoader**********************

var loader = document.getElementById("pre_loader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});


// *************** Mouse Hover *******************

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.clientY + "px";
//   console.log(e.pageX,e.clientY);
});


const mouseOver = () => {
    cursor.classList.add("hoverEffect")
}

const mouseOut = () => {
    cursor.classList.remove("hoverEffect")
}

// ******************Cursor View *******************

const cursorView = () => {
    cursor.classList.add("cursorView");
    cursor.innerHTML="View";
}

const cursorviewRemove = () => {
    cursor.classList.remove("cursorView");
    cursor.innerHTML="";
}


// ******************** Horizontal Slider ***********

const cursorBlack = () => {
    cursor.classList.add("cursor_black");
}

const cursorRemove = () => {
    cursor.classList.remove("cursor_black");
}
// ******************* Text Rotation ***************

var text = document.getElementById("text");
var word = text.getElementsByTagName("span");
var i = 0;

setInterval(() => {
    word[i].style.display = "none";
    i = (i + 1) % word.length;
    word[i].style.display = "initial";
}, 800);


// ******************* Parallax ******************

document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll(".video_container").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        
        const x = (window.innerWidth - e.pageX * speed) / 200;
        const y = (window.innerHeight - e.pageY * speed) / 200; 
        
        layer.style.transform =`translateX(${x}px) translateY(${y}px`;
        layer.style.transtion = "0.5s ease-in";
    });
}

// ************************* Horizontal Slider **************

var dot1 = document.getElementById("dot_1");
var dot2 = document.getElementById("dot_2");
var dot3 = document.getElementById("dot_3");

var showed_box = 0;
dot1.classList.add("color");

function fNext() {
    showed_box += -80;
    
    if (showed_box < -180) showed_box = 0;
    
    document.getElementById("main").style.transform =
    "translateX(" + showed_box + "vw)";
}

function fPrevious() {
    showed_box += 80;
    
    if (showed_box > 0) showed_box = -160;
    
    document.getElementById("main").style.transform =
    "translateX(" + showed_box + "vw)";
}

function dotNextCheck() {
    if(showed_box ==0){
        dot1.classList.add("color");
        dot2.classList.remove("color");
        dot3.classList.remove("color");
    }
    if(showed_box <-50){
        dot2.classList.add("color");
        dot1.classList.remove("color");
        dot3.classList.remove("color");
    }
    if(showed_box <-80){
        dot3.classList.add("color");
        dot2.classList.remove("color");
        dot1.classList.remove("color");
    }
}

// ******************Cursor Projects *******************

const cursorProject = () => {
    cursor.classList.add("cursorProject");
    cursor.innerHTML="+";
}

const cursorProjectRemove = () => {
    cursor.classList.remove("cursorProject");
    cursor.innerHTML="";
}
