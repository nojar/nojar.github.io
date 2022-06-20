let registerButton = document.getElementById('register')

let forms = ['first name', 'last name', 'middle name', 'house address', 'mobile number']

asd = () => {
    let registrationForm = document.createElement('div')
    registerButton.replaceWith(registrationForm)
    console.log("Hello")
}
registerButton.addEventListener('click', asd)

