const loginbtn=document.getElementById("loginbtn")
const form=document.querySelector("form")
const canclebtn=document.getElementById("canclebtn")
const Registrationbtn=document.getElementById("Registrationbtn")


function openmodale(){
    form.style.display='flex'
    Registrationbtn.style.backgroundColor='red'
    Registrationbtn.style.color='white'
}
function closemodale(){
    form.style.display='none'
    Registrationbtn.style.backgroundColor='green'
    Registrationbtn.style.color='black'
}