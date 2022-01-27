var messageArray1 = ["¡Bienvenidos a mi página personal!"];
var textPosition = 0;
var speed = 100;

typewriter1 = () => {
    document.querySelector("#message").
    innerHTML = messageArray1[0].substring(0, textPosition) + 
    "<span>\u25ae</span>";

    if(textPosition++ != messageArray1[0].length)
        setTimeout(typewriter1, speed);
}

window.addEventListener("load", typewriter1);