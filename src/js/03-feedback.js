import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input',throttle(onFormInputData,500));
form.addEventListener('submit', onFormSubmit);

const dataObj={
    email:'',
    message:''
};

if (localStorage.getItem("feedback-form-state")) {
    const storageData = localStorage.getItem("feedback-form-state");
    const storageDataParsed = JSON.parse(storageData);
    form.email.value = storageDataParsed.email;
    form.message.value = storageDataParsed.message;
   
}



function onFormInputData(event) {
    
    dataObj.email = form.email.value;
    dataObj.message = form.message.value;
    const dataObjString = JSON.stringify(dataObj);
    localStorage.setItem("feedback-form-state", dataObjString);
}

function onFormSubmit(event) {
    
    event.preventDefault();
    const getDataLocalStorage=JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(getDataLocalStorage);
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}