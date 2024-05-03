window.alert = function(message, timeout=null){
    const CustomAlert = document.createElement('div');
    CustomAlert.classList.add('alert');
    CustomAlert.setAttribute('style',`
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 10px 5px 0 #00000044
    `);
    CustomAlert.innerHTML = message;
    document.appendChild(alert);
};

const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

function SignoutConfirm(){
    
    let choix = confirm("Voulez-vous vraiment vous déconnecter ?")
    if ( choix == false ){
        event.preventDefault();
    }
}