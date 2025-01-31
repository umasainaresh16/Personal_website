const h1 = document.querySelector("h1");
const h1Style= h1.style;
h1Style.background="red";
h1Style.color="white";
h1Style.padding="25px";

h1.addEventListener("mouseover",function(){
    h1Style.background="green";
    h1Style.cursor="pointer";
});

h1.addEventListener("mouseleave",function(){
    h1Style.background="red";
});