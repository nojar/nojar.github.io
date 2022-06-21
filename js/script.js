let registerButton = document.getElementById('register')

let details = ['first name', 'last name', 'middle name', 'house address', 'mobile number']
let registrationForm = document.getElementById('registrationForms')

let form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "#");
let field = document.createElement('field')
let input = document.createElement("input");
// details.forEach(detail => {
//     // Create an input_ELEMENT
//     input.setAttribute("type", "text");
//     input.setAttribute("name", detail);
//     input.setAttribute("placeholder", "Please enter your " + detail);
//
// })
// console.log

let counter = 0;
let br = document.createElement('br')


let next = document.createElement('button')
next.innerText = 'next'
next.addEventListener('click', () => {
    if (counter + 1 < details.length) {
        input.setAttribute("type", "text");
        input.setAttribute("name", details[counter]);
        input.setAttribute("placeholder", "Please enter your " + details[counter]);
        console.log(details[counter])
    }
    counter += 1;
})
let submit = document.createElement('button')
submit.setAttribute("type", "submit")
submit.innerText = 'submit'

let small = document.createElement('small')

form.appendChild(field)
field.appendChild(input)
form.appendChild(small)
form.appendChild(next)
// form.appendChild(submit)

// showForms = () => {
// registerButton.style.display = 'none'
document.body.appendChild(form)
form.style.display = 'flex'

// registerButton.replaceWith(form)
//
// }
//
// registerButton.addEventListener('click', showForms)
// input_container 
// console.log("Hello")

