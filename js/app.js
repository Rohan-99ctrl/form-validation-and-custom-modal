let username = document.querySelector('#username');
let pass = document.querySelector('#pass');
let submitForm = document.querySelector('#submitForm');

let mainalertModal = document.querySelector('.mainalertModal');
let alertModalContent = document.querySelector('.alertModalContent');
let cross = document.querySelector('#cross');

let mainalertModal2 = document.querySelector('.mainalertModal2');
let alertModalContent2 = document.querySelector('.alertModalContent2');
let cross2 = document.querySelector('#cross2');

let mainalertModal3 = document.querySelector('.mainalertModal3');
let alertModalContent3 = document.querySelector('.alertModalContent3');
let cross3 = document.querySelector('#cross3');

let userRes = document.querySelector('#userRes');
let passRes = document.querySelector('#passRes');

let check = /^[A-Za-z0-9\-_]{6,30}$/i;
username.addEventListener('keyup', function(){
    let checkVal = check.test(username.value);
    
    if(checkVal == false){
        username.style.borderBottom = ' 2px solid red';
        userRes.style.color = 'red';
        userRes.innerHTML = 'Invalid!';
    }else{
        username.style.borderBottom = ' 2px solid rgb(0, 245, 0)';
        userRes.style.color = 'rgb(0, 245, 0)';
        userRes.innerHTML = 'Valid!';
    }
});


let check2 = /^[A-Za-z0-9\-_!@#$%^&*()_=+/*\.<>?,~`]{8,40}$/i;
pass.addEventListener('keyup', function(){
    let checkVal2 = check2.test(pass.value);
    
    if(checkVal2 == false){
        pass.style.borderBottom = ' 2px solid red';
        passRes.style.color = 'red';
        passRes.innerHTML = 'Invalid!';
    }else{
        pass.style.borderBottom = ' 2px solid rgb(0, 245, 0)';
        passRes.style.color = 'rgb(0, 245, 0)';
        passRes.innerHTML = 'Valid!';
    }
});


submitForm.addEventListener('click', function(){

    if(username.value == '' || pass.value == ''){
        mainalertModal.classList.add('active');
        alertModalContent.classList.add('active');

        cross.addEventListener('click', () => {
            mainalertModal.classList.remove('active');
            alertModalContent.classList.remove('active');
        });
    }else if(check.test(username.value) == false || check2.test(pass.value) == false){

        mainalertModal2.classList.add('active');
        alertModalContent2.classList.add('active');

        cross2.addEventListener('click', () => {
            mainalertModal2.classList.remove('active');
            alertModalContent2.classList.remove('active');
        });

    }else{
        mainalertModal3.classList.add('active');
        alertModalContent3.classList.add('active');

        cross3.addEventListener('click', () => {
            mainalertModal3.classList.remove('active');
            alertModalContent3.classList.remove('active');
        });

        setTimeout(function(){
            mainalertModal3.classList.remove('active');
            alertModalContent3.classList.remove('active');
        }, 5000);

        username.value = '';
        pass.value = '';
        userRes.innerHTML = ''
        passRes.innerHTML = ''
    }

});







