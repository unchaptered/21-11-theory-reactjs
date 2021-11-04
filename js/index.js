const button=document.getElementById("btn");
button.addEventListener("click", function(){
    console.log(this.previousElementSibling);
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