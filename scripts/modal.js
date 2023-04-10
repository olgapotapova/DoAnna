const openModal = document.querySelector('.openModal');
const closeModal = document.querySelector('.closeModal');
const modal = document.querySelector('.modal');
var form = document.querySelector('.formWithValidation')
var validateBtn = form.querySelector('.validateBtn')
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const email = document.querySelector('.email');
const senderName = document.querySelector('.name');
const textarea = document.querySelector('.textarea');
var fields = form.querySelectorAll('.field')

openModal.addEventListener('click', () => {
    modal.showModal();
    modal.scrollIntoView();
});

// closeModal.addEventListener('click', () => {
//     modal.close();
// });
form.addEventListener('submit', function (event) {
    event.preventDefault();
    modal.close();
});

var generateError = function (text) {
    var error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = text
    return error
}

var removeValidation = function () {
    var errors = form.querySelectorAll('.error')
    for (var i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

var checkFieldsPresence = function () {
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        var error = generateError('Cant be blank');
        form[i].parentElement.insertBefore(error, fields[i]);
        return false;
        }
    }
}

var checkEmail = function () {
    if (!email.value) {
        var error = generateError('Cant be blank')
        email.parentElement.insertBefore(error, email)
    }else{
        if (EMAIL_REGEXP.test(email.value) == false) {
            var error = generateError('Email is not entered correctly');
            email.parentElement.insertBefore(error, email);
            return false;
        }else{
            return true;
        }
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    removeValidation();
    if((checkEmail() == true)&&(checkFieldsPresence() !== false)){
        modal.close();
    }
});


