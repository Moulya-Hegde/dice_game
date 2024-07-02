var randomNumber1=Math.floor((Math.random()*6 +1))
console.log(randomNumber1)
var randomNumber2=Math.floor((Math.random()*6 +1))
console.log(randomNumber2)
switch (randomNumber1){
    case 1:
        var var1=document.querySelector(".img1");
        var1.setAttribute("src","./images/dice1.png");
        break;
    case 2:
        var var1=document.querySelector(".img1");
        var1.setAttribute("src","./images/dice2.png");
        break;
    case 3:
        var var1=document.querySelector(".img1");
        var1.setAttribute("src","./images/dice3.png");
        break;
    case 4:
        var var1=document.querySelector(".img1");
        var1.setAttribute("src","./images/dice4.png");
        break;
    case 5:
        var var1=document.querySelector(".img1");
        var1.setAttribute("src","./images/dice5.png");
        break;
    case 6:
        var var1=document.querySelector(".img1");
        var1.setAttribute("src","./images/dice6.png");
        break;
}
switch (randomNumber2){
    case 1:
        var var2=document.querySelector(".img2");
        var2.setAttribute("src","./images/dice1.png");
        break;
    case 2:
        var var2=document.querySelector(".img2");
        var2.setAttribute("src","./images/dice2.png");
        break;
    case 3:
        var var2=document.querySelector(".img2");
        var2.setAttribute("src","./images/dice3.png");
        break;
    case 4:
        var var2=document.querySelector(".img2");
        var2.setAttribute("src","./images/dice4.png");
        break;
    case 5:
        var var2=document.querySelector(".img2");
        var2.setAttribute("src","./images/dice5.png");
        break;
    case 6:
        var var2=document.querySelector(".img2");
        var2.setAttribute("src","./images/dice6.png");
        break;
}
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#B31312" class="bi bi-flag-fill" viewBox="0 0 16 16">
  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
</svg>Player 1 wins`;
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#B31312" class="bi bi-flag-fill" viewBox="0 0 16 16">
  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
</svg>Player 2 wins`;
}
else{
    document.querySelector("h1").textContent='Draw!';
}