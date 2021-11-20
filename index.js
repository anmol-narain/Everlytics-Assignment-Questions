const validation = () =>{
    let userInputs = document.querySelectorAll('input');
    for(var i=0;i<userInputs.length;i++){

        let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if(userInputs[i].value.length < 5){
            alert('Minimum Length of every field should exceed 5 characters , Please enter again');
            break;
        }
        if(specialChars.test(userInputs[i].value)){
            alert('No special character should be enterd , type again');
            break;
        }
    }
}