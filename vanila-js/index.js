// finals
let count=0;
const button=document.getElementById("btn");
button.addEventListener("click", function(){
    this.previousElementSibling.innerText=`Clicks:${++count}`;
});

/* Vanilla JS
const button=document.getElementById("btn");
function clickBtn(){
    console.log("I have been clicked");
};
button.addEventListener("click", clickBtn);
*/

/* Modern JS
const button=document.getElementById("btn");
button.addEventListener("click", ()=>{
    console.log("I have been clicked");
});
*/