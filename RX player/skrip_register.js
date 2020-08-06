
const form = document.getElementById('form');
const name = document.getElementById('nama');
const email = document.getElementById('email');
const password = document.getElementById('password');
const gender = document.getElementById('option_gender');
const payment = document.getElementById('option_payment');
const checkbox = document.getElementById('checkbox');


const error = document.querySelectorAll('small');

var dialog = document.querySelector('dialog');

var valid = 6;

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    var valid = 5;

    const nameValue = name.value.trim();
    const passValue = password.value.trim();
    const emailValue = email.value.trim();
    const genderValue = gender.value;
    const paymentValue = payment.value;


    var dialog = document.querySelector('dialog');
    document.querySelector('#show').onclick = function() { 
        dialog.show();
     };
      document.querySelector('#close').onclick = function() {
           dialog.close(); 
        };


    // text field
    if (nameValue.length < 4){
        valid--;
        setErrorFor(name,"Name must be at least 4 characters !!")
    }

    else{
        setSuccessFor(name);
    }

    //password

    if (passValue === ''){
        valid--;
        setErrorFor(password,"Password must not be empty !!")
    }

    else if (passValue.length < 6){
        valid--;
        setErrorFor(password,"Password must be at least 6 characters !!");
    }

    else{
        setSuccessFor(password);
    }

    
    // email
    if (emailValue === ''){
        valid--;
        setErrorFor(email,"Email must be filled to receive our notification !!")
    }

    else{
        setSuccessFor(email);
    }

    // select Option gender

    if (genderValue === ''){
        valid--;
        setErrorFor(gender,"Please choose one !!");
    }

    else{
        setSuccessFor(gender);
    }

    // select Option payment

    if (paymentValue === ''){
        valid--;
        setErrorFor(payment,"Please choose one !!");
    }

    else{
        setSuccessFor(payment);
    }

    // checkbox

    if (!checkbox.checked){
        valid--;
        checkCheckbox_radio(checkbox,"You must aggree with out Terms and Conditon !!",0);
    }

    else if (checkbox.checked){
        checkCheckbox_radio(checkbox,"",1);
    }
   

    return valid;
}


function fnSubmit(){
    var noError = checkInputs();
    if (noError == 5){
        
        console.log(temp);
        var temp = "Submitted !!"+"name : " + name.value + " Password :" + password.value;
        alert(temp);
        for (e of error){
            e.innerHTML = '';            
        }
        form.reset();   
    }
}   


function fnReset(){
    alert("form is resetted");
    
    location.reload();
    
    
    for (e of error){
        e.innerHTML = '';
        form.reset();
    }
}

function setErrorFor(input,message){
        
    const formContent = (input.parentElement);
        
    const small = formContent.querySelector('small');

   
    small.innerText = message;
    
    formContent.classList.add('error');
}


function setSuccessFor(input){

   
    const formContent = (input.parentElement)
    
    const small = formContent.querySelector('small');
    
    small.innerText = "";

     
    formContent.classList.remove('error');
 
    formContent.classList.add('success');
}

function checkCheckbox_radio(input, message, value){

    
    const formContent = (input.parentElement).parentElement;
    
    const small = formContent.querySelector('small');

   
    small.innerText = message;
    if (value == 0){
        
        formContent.classList.add("error");
    }
    else{
         
        formContent.classList.remove('error');
         
        formContent.classList.add('success');
    }
}


