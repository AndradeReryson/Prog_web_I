document.addEventListener("DOMContentLoaded", function(){
    let url1 = "CSS/style.css";
    let url2 = "CSS/contraste.css";
    let contraste = document.querySelector("#contraste");
    let sem_contraste = document.querySelector("#sem_contraste");

    function createTag(url){
        let estilo = document.createElement("link")
        estilo.rel = "stylesheet"
        estilo.type = "text/css"
        estilo.className = "acess"
        estilo.href = url
        document.body.appendChild(estilo)
    }

    let tag = document.getElementsByClassName("acess")  // <link rel="" ...

    contraste.onclick = function(){
        tag[0].href = url2
        localStorage.setItem("css", url2)
    }

    sem_contraste.onclick = function(){
        tag[0].href = url1
        localStorage.setItem("css", url1)
    }

    let css = localStorage.getItem("css")
    
    if(!css){
        createTag(url1)
    } else {
        createTag(css)
    }
});