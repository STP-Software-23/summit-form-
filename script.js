const submitBtn = document.getElementById("submitBtn")

const fields = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("firstName"),
    email: document.getElementById("firstName"),
    phoneNumber: document.getElementById("phoneNumber"),
    university: document.getElementById("university"),
    faculty: document.getElementById("faculty"),
    graduationYear: document.getElementById("graduationYear"),
}

// fields event listeners
Object.keys(fields).forEach(field =>{
    fields[field].addEventListener('input' , enableSubmitButton)
    
})

// submit button enablement
function enableSubmitButton() {
    let error =0;
    Object.keys(fields).forEach(field =>{
        if(fields[field].value === ""){
            error =1;
        }
    })
    if(error === 0){
        submitBtn.disabled = false
    }else{
        submitBtn.disabled = true
    }
}

