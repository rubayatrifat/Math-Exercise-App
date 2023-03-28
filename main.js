const ansElm = document.getElementById('ans-input')
const subElm = document.getElementById('sub-input')
const firstValue = document.getElementById('first-value')
const lastValue = document.getElementById('last-value')
const theSumSign = document.querySelector('.sum')
const minus = document.getElementById('minus')
const multiply = document.getElementById('into')
const substract = document.getElementById('subs')
const next = document.getElementById('next')
const alertElm = document.querySelector('.alert')

next.disabled = true

let rand1
let rand2
let getRandomSign
let defauledSign
let mainAns = 15

next.addEventListener('click', (evt) => {
    evt.preventDefault
    
    defauledSign = '+'
    
    rand1 = Math.ceil((Math.random() * 15) + 1) 
    rand2 = Math.ceil((Math.random() * 9) + 1) 
    
    getRandomSign = Math.ceil((Math.random()) * 3)
    
    firstValue.innerText = `${rand1} `
    lastValue.innerText = `${rand2} `
    
    theSumSign.innerText = defauledSign
    
    
    if(minus.checked && getRandomSign === 1) {
        defauledSign = '- '
        mainAns = rand1 - rand2
    } else if (multiply.checked && getRandomSign === 2) {
        defauledSign = '× '
        mainAns = rand1 * rand2

    } else if (substract.checked && getRandomSign === 3) {
        defauledSign = '÷ '
        mainAns = rand1 / rand2

    } else {
        defauledSign = '+ '
        mainAns = rand1 + rand2
    }
    
    firstValue.innerText = `${rand1} `
    lastValue.innerText = `${rand2} `
    
    theSumSign.innerText = defauledSign
    
    next.disabled = true
    
})



function clearAlert() {
    alertElm.classList.remove('denger')
    alertElm.classList.remove('sucsess')
    alertElm.innerText = ''
}



subElm.addEventListener('click', () => {

    const ansValue = ansElm.value

    if(ansValue === "") {
        alertElm.classList.remove('sucsess')
        alertElm.innerText = 'Please fill out the input field.'
        alertElm.classList.add('denger')
        setTimeout(() => {
            clearAlert()
        }, 2000);


        return
    }

    if(mainAns == ansValue) {
        alertElm.classList.remove('denger')
        alertElm.innerText = 'You are correct. Press Next to another.'
        alertElm.classList.add('sucsess')
        setTimeout(() => {
            clearAlert()
        }, 2000);

        ansElm.value = ''
        next.disabled = false
    } else {
        alertElm.classList.remove('sucsess')
        alertElm.innerText = 'You are wrong !'
        alertElm.classList.add('denger')
        setTimeout(() => {
            clearAlert()
        }, 2000);

        ansElm.value = ''
    }


})