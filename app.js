const menu= document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.nav-menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

//modal item
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

//clickevent
openBtn.addEventListener('click', () => {
    modal.style.display='block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display='none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display='none';
    }
})

//form validation
const form=document.getElementById('form');
const Name=document.getElementById('name');
const Email=document.getElementById('email');
const Password=document.getElementById('password');
const passwordConfirm =document.getElementById('confirm password');

//show error message
function showError(input, message){
    const formValidation=input.parentElement;
    formValidation.className='form-validation error';

    const errorMessage=formValidation.querySelector('p');
    errorMessage.innerText=message;
}


//show valid message
function showValid(input){
    const formValidation=input.parentElement;
    formValidation.className='form-validation valid';
}

//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showValid(input);
        }
    })
}
//check input length
function checkLength(input,min,max){
    if(input.value.length <min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    } else if ( input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    }else {
        showValid(input);
    }
}

//check fieldName
function passwordMatch(input1,input2){
    if(input1.value !==input2.value){
        showError(input2,'password do not match');
    }
}


//get fieldname
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase()+ input.name.slice(1);
}

//event listener
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    checkRequired([ Name,Email,Password,passwordConfirm]);
    checkLength(Name,3,30);
    checkLength(Password,8,25);
    checkLength(passwordConfirm,8,25);
})