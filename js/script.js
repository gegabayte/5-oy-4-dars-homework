let names = document.querySelector('#name');
let surNames = document.querySelector('#surName');
let Ages = document.querySelector('#age');

let storage =document.querySelector('#storage');
let remove =document.querySelector('#remove');
let restore =document.querySelector('#restore');
let udalit =document.querySelector('#udalit');

let red = document.querySelector('.btn1')
let Blue = document.querySelector('.btn2')
let Black = document.querySelector('.btn3')
let oranga = document.querySelector('.btn4')
let yellow = document.querySelector('.btn5')
let white = document.querySelector('.btn6')
let aqua = document.querySelector('.btn7')

const validateName = ((name) => {
    if (Number(name)) {
        alert('isim son bolmaydi')
    }
    if (name.trim().length  <= 5) {
        alert('Ismingizni togri kiriting')
    }
})

const bioName = ((name) => {
    if (validateName(name)) {
       
    }
    return name
})
let n = prompt('Ismingizni kiriting');
names.innerHTML = n;
bioName(n)

const validateSurName = ((surName) => {
    if (Number(surName)) {
        alert('familiya son bolmaydi');
    }
    if (surName.trim().length <= 7) {
        alert('Familiyangiz togri kiriting');
    }
})

const bioSurName = ((surName) => {
    if (validateSurName(surName)) {
        
    }
}) 
let s = prompt('Familiyangizni kiriting');
surNames.innerHTML = s;
bioSurName(s);

const validateAge = ((age) => {
    if (!age) {
        alert('yoshingizni sonlarda kiritnig')
    }
})

const bioAge = ((age) => {
    if (validateAge(age)) {
       
    }
})  
let a = +prompt('Yoshingizni kiriting')
Ages.innerHTML = a;
bioAge(a)


storage && storage.addEventListener('click', function() {
    localStorage.setItem('name', JSON.stringify(n))
    localStorage.setItem('surname', JSON.stringify(s))
    localStorage.setItem('age', JSON.stringify(a))
})

restore && restore.addEventListener('click', function () {
    let nameLocal = localStorage.getItem('name')
    let surnamelocal = localStorage.getItem('surname')
    let ageLocal = localStorage.getItem('age')
    names.innerHTML = JSON.parse(nameLocal)
    surNames.innerHTML = JSON.parse(surnamelocal)
    Ages.innerHTML = JSON.parse(ageLocal)
})

remove && remove.addEventListener('click', function () {
    localStorage.clear()
})
udalit && udalit.addEventListener('click', function() {
    names.remove()
    surNames.remove()
    Ages.remove()
})


red && red.addEventListener('click', function() {
    names.style.color = 'red';
    surNames.style.color = 'red';
    Ages.style.color = 'red';
})

Blue && Blue.addEventListener('click', function() {
    names.style.color = 'blue';
    surNames.style.color = 'blue';
    Ages.style.color = 'blue';
})

Black && Black.addEventListener('click', function() {
    names.style.color = 'black';
    surNames.style.color = 'black';
    Ages.style.color = 'black';
})

oranga && oranga.addEventListener('click', function() {
    names.style.color = 'orange';
    surNames.style.color = 'orange';
    Ages.style.color = 'orange';
})

yellow && yellow.addEventListener('click', function() {
    names.style.color = 'yellow';
    surNames.style.color = 'yellow';
    Ages.style.color = 'yellow';
})

white && white.addEventListener('click', function() {
    names.style.color = 'white';
    surNames.style.color = 'white';
    Ages.style.color = 'white';
})

aqua && aqua.addEventListener('click', function() {
    names.style.color = 'aqua';
    surNames.style.color = 'aqua';
    Ages.style.color = 'aqua';
})