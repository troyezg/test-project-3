console.log("Hello world");
var CardsInfo = [
    {
        id: 1,
        name: 'Crystal Motors',
        logo: './images/card-logo.png',
        rating: '4,9',
        reviews: 246,
        city: 'Челябинск',
        address: 'Университетская Набережная, 68',
        phone: '+7 (351) 220-78-13',
        site: 'crystal-motors.ru',
        trust: 'high'
    },
    {
        id: 2,
        name: 'Алькон Авто',
        logo: './images/card-logo-2.png',
        rating: '1,8',
        reviews: 4,
        city: 'Москва',
        address: '33км МКАД 6с6',
        phone: '+7 (495) 266-24-45',
        site: 'alcon-auto.ru',
        trust: 'low'
    },
    {
        id: 3,
        name: 'Proxy-cars',
        logo: './images/card-logo-3.png',
        rating: '4,3',
        reviews: 5,
        city: 'Петрозаводск',
        address: 'Лыжная, 3',
        phone: '+7 (814) 255-90-38',
        site: 'proxy-cars.ru',
        trust: 'mid'
    },
    {
        id: 4,
        name: 'Аквамарин',
        logo: './images/card-logo-4.png',
        rating: '1,5',
        reviews: 19,
        city: 'Челябинск',
        address: 'Братьев Кашириных, 147А',
        phone: '+7 (351) 200-74-68',
        site: 'ac-aquamarine.ru',
        trust: 'low'
    },
    {
        id: 5,
        name: 'AutoHouse',
        logo: './images/card-logo-5.png',
        rating: '4,9',
        reviews: 206,
        city: 'Челябинск',
        address: 'Кузнецова, 1А',
        phone: '+7 (351) 242‑00‑89',
        site: 'chel.autohouse24.ru',
        trust: 'high'
    },
    {
        id: 6,
        name: 'Первый Независимый Автоцентр',
        logo: './images/card-logo-6.png',
        rating: '3,5',
        reviews: 4,
        city: 'Челябинск',
        address: 'Братьев Кашириных, 135',
        phone: '+7 (351) 220-82-79',
        site: 'pncentr.rus',
        trust: 'mid'
    },
]

var cardcontainer = document.getElementById("cards-container");

for (let i = 0; i < 18; i++) {
    let b = Math.floor(Math.random() * 5);
    console.log("b is " + b);
    cardcontainer.innerHTML += '<div class="cards-container__card"><div class="cards-container__card__reviews-colors"><p class="cards-container__card__reviews-colors__text">Высокий рейтинг доверия</p></div><div class="cards-container__card__name-block"><img class="cards-container__card__name-block__image" src="'+ CardsInfo[b].logo +'" alt="card-logo"><div class="cards-container__card__name-block__text-block"><h3 class="card-title">'+ CardsInfo[b].name +'</h3><img class="card-star-icon" src="./images/star-icon.svg" alt="star-icon"><h3 class="card-rating">'+ CardsInfo[b].rating +'</h3><h4 class="card-reviews">'+ CardsInfo[b].reviews +' отзывов</h4></div></div><div class="cards-container__card__info-block"><p class="info-block-type">Город:</p><p class="info-block-text">'+ CardsInfo[b].city +'</p><p class="info-block-type">Адрес</p><p class="info-block-text">'+ CardsInfo[b].address +'</p><p class="info-block-type">Телефон:</p><p class="info-block-text">'+ CardsInfo[b].phone +'</p><p class="info-block-type">Сайт:</p><p class="info-block-text">'+ CardsInfo[b].site +'</p></div><div class="cards-container__card__buttons-block"><button class="card-details-button"><span class="card-details-button__text">Подробнее</span></button><button class="card-share-button"><img class="card-share-button__icon" src="./images/share-icon.svg" alt="share-icon"></button></div></div>'
}

console.log(CardsInfo);






