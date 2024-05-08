const form =document.getElementById('form');
const pas1=document.getElementById('password1')
const pas2=document.getElementById('password2')
const messageContainer=document.querySelector('.message-container');
const message=document.getElementById('message')

let isValid=false;
let passwordsMatch=false;

function storeFormData(){
    const user= {
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        pasword:form.pasword.value
    }
}

function validateForm(){
    isValid= form.checkValidity();
    if(!isValid){
        message.textContent='Please fill out all the feilds.';
    message.style.color='red';
    messageContainer.style.borderColor='red';
    return;
    }
    if(pas1.value == pas2.value){
        passwordsMatch=true;
        pas1.style.borderColor='green';
        pas2.style.borderColor='green';
    }else{
        passwordsMatch=false;
        message.textContent='Please make sure the passwords are same.'
        message.style.color='red';
        message.style.borderColor='red';
        pas1.style.borderColor='red';
        pas2.style.borderColor='red';
        return;
    }
    if(isValid && passwordsMatch){
        message.textContent='Resgistered Successfully!'
        message.style.color='blue';
        messageContainer.style.borderColor='green';
        storeFormData();
    }
}


function processFormData(e){
    e.preventDefault();
    validateForm();
}

//eventlistner
form.addEventListener('submit',processFormData);