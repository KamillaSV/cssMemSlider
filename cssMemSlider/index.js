const buttons = document.querySelectorAll('.button');
const first = document.getElementById('0');
const text = document.querySelector('.text');
const picture = document.querySelector('.picture');


let content = [
    {
        picture: '0',
        text: 'Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.',
        path: './assets/deadline1.jpg',
    },
    {
        picture: '1',
        text: 'Многие из вас знакомы с достоинствами программиста. Их всего три, и разумеется это: лень, нетерпеливость и гордыня.',
        path: './assets/deadline2.jpg',
    },
    {
        picture: '2',
        text: 'Программы должны писаться для людей, которые будут их читать, а машины, которые будут эти программы исполнять — второстепенны.',
        path: './assets/deadline3.jpg',
    },
    {
        picture: '3',
        text: 'Работает? Не трогай.',
        path: './assets/deadline4.jpg',
    },
    {
        picture: '4',
        text: 'Чтобы написать чистый код, мы сначала пишем грязный код, а затем рефакторим его.',
        path: './assets/deadline5.jpg',
    }
];

function choose (item) {
    if (first.classList.contains('choosed')) {
        first.classList.remove('choosed')
    } else { 
        buttons.forEach(item=>(item.classList.remove('choosed')));
    }
    this.classList.add('choosed');
    index = this.id;
    text.textContent = content[index].text;
    picture.src = content[index].path;
}

buttons.forEach(item=>(item.addEventListener('click', choose), item));