const buttons = document.querySelectorAll('.button');
const first = document.getElementById('1');
const second = document.getElementById('2');
const therd = document.getElementById('3');
const forth = document.getElementById('4');
const firth = document.getElementById('5');

function choose (item) {
    this.classList.toggle('choosed');
    console.log('тык');
}

buttons.forEach(item=>(item.addEventListener('click', choose), item));

let content = [
    {
        picture: '1'
        Text: 'Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.'
        path: './assets/deadline1.jpg'
    },
    {
        picture: '2'
        Text: 'Многие из вас знакомы с достоинствами программиста. Их всего три, и разумеется это: лень, нетерпеливость и гордыня.'
        path: './assets/deadline2.jpg'
    },
    {
        picture: '3'
        Text: 'Программы должны писаться для людей, которые будут их читать, а машины, которые будут эти программы исполнять — второстепенны.'
        path: './assets/deadline3.jpg'
    },
    {
        picture: '4'
        Text: 'Работает? Не трогай.'
        path: './assets/deadline4.jpg'
    },
    {
        picture: '5'
        Text: 'Чтобы написать чистый код, мы сначала пишем грязный код, а затем рефакторим его.'
        path: './assets/deadline5.jpg'
    }
]