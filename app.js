var bar_Button=document.getElementsByClassName("fas fa-bars")[0];
var cross_Button=document.getElementsByClassName("fas fa-times")[0];
var menu=document.getElementsByClassName("hamburger-menu")[0];
var social_header=document.getElementsByClassName("header-social")[0];
var nav=document.getElementsByClassName("navbar")[0];
var user_Button=document.getElementsByClassName("fas fa-user")[0];
var user_Menu_Container=document.getElementsByClassName("menu-container")[0];
var cross_Button_signup=document.getElementsByClassName("fas fa-times")[2];
var container_Wrapper=document.getElementsByClassName("container-wrapper")[0];
function eventhandler(){
menu.classList.add("active-menu");
}

function crossbuttonhandler(){
    menu.classList.remove("active-menu");
}

function scrollhandler(){
    if(window.scrollY>0)
    {
    social_header.classList.add("disable");
    nav.classList.add("fixed");
    }
    if(window.scrollY==0)
    {
        social_header.classList.remove("disable");
        nav.classList.remove("fixed");
    }
}

function userbuttonhandler(){    
user_Menu_Container.classList.add("menu-container-active");
container_Wrapper.classList.add("opacity");
}

function crossbuttonsignuphandler(){    
    user_Menu_Container.classList.remove("menu-container-active");
    container_Wrapper.classList.remove("opacity");
    }
    


bar_Button.addEventListener("click",eventhandler);
cross_Button.addEventListener("click",crossbuttonhandler);
user_Button.addEventListener("click",userbuttonhandler);
document.addEventListener("scroll",scrollhandler);
cross_Button_signup.addEventListener("click",crossbuttonsignuphandler);