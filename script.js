//your JS code here. If required.
let first = document.getElementById('first')
let last = document.getElementById('last')
let contact = document.getElementById('contact')
let email = document.getElementById('email')    

let btn = document.getElementById("btn")

btn.addEventListener('click', ()=>{
    alert(`First Name: ${first.value} Last Name: ${last.value} Phone Number: ${contact.value} Email ID: ${email.value}`)
})