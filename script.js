const loginbtn=document.getElementById("loginbtn")
const form=document.querySelector("form")
const canclebtn=document.getElementById("canclebtn")
const Registrationbtn=document.getElementById("Registrationbtn")


function openmodale(){
    form.style.display='flex'
    loginbtn.style.backgroundColor='red'
    loginbtn.style.color='white'
}
function closemodale(){
    form.style.display='none'
    loginbtn.style.backgroundColor='green'
    loginbtn.style.color='black'
}