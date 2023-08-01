// // порахуємо і виведемо в консоль кількість li.item в УЛ під класом js-container-nav

// const containerList = document.querySelector('.js-container-nav');
// console.log(`Number of categories: ${containerList.childNodes.length}`);
// console.log(' ');

// // Для кожного элемента li.item у списку ul#js-container-nav, знайде і виведе в консоль текст заголовку елемента (тегу <a>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// const containerItems = document.querySelectorAll('.js-item-nav');

// containerItems.forEach((item) => {
//     console.log(`LISt :  ${item.firstElementChild.textContent}`)
//     console.log(`Elem : ${item.lastElementChild.childNodes.length}`);
//     console.log(' ');
// })

//============================================


//js-address
//порахуємо і виведемо в консоль кількість li.item в УЛ під класом js-container-nav

// const addressNav = document.querySelector('.js-address');
// console.log(`хто є перший елемент  ${addressNav.childNodes.length}`);
// console.dir(addressNav);
// console.log(' ');

// const mailItem = document.querySelectorAll('.js-item-mail');

// mailItem.forEach((item) => {
// console.log(`List: ${item.firstElementChild.textContent}`);
// console.log(`Elem: ${item.lastElementChild.childNodes.length}`);
// console.log(' ');
// });

//=============

//  ============================================

// const images = [
//     {
//       url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'White and Black Long Fur Cat',
//     },
//     {
//       url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//       url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Group of Horses Running',
//     },
//   ];

// const gallery = document.querySelector('.gallery');

// function createGallery(images) {
//   const galleryItems = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="300" height="300"></li>`).join('');

//   gallery.insertAdjacentHTML('beforeend', galleryItems);
// }

// createGallery(images);

// SECOND VAR

// const galleryItems = images.map(({ url, alt }) =>`<li><img src="${url}" alt="${alt}" width="300" height="300"></li>`).join('');

// gallery.insertAdjacentHTML('beforeend', galleryItems);

//  ============================================


// 2 TASKA
const sunsigns = ['lion', 'aquarius', 'aries', 'cancer', 'virgo', 'scorpio'];

console.log(sunsigns);

const sunsignsList = document.querySelector('#sunsigns');

const sunsignsText = sunsigns.map(sunsign => {
  const text = document.createElement('p');
  text.textContent = sunsign;
  text.classList.add('js-sunsigns', 'sunsigns');
  return text;
});

sunsignsList.append(...sunsignsText);
console.log(sunsignsText);
console.dir(sunsignsText);


//============================================

// TEST 3 створення елементів за допомогою insertAdjacentHTML().

const TOYS = [
  {
    назва:
      'Інтерактивна іграшка Fisher-Price Сестричка Розумного цуценяти українською (FPP85)',
    фото: 'https://bi.ua/uploaded-images/products/size_400/537707_1.jpg',
    alt: 'іграшка',
    ціна: '1323 грн',
    опис: 'Сестричка Розумного цуценяти виготовлена з плюша й дуже приємна на дотик. Вона заспіває пісеньки, розповість віршики, які в ігровій формі навчать дитину лічбі, абетці й розкажуть про частини тіла',
  },

  {
    назва:
      'Інтерактивна іграшка Fisher-Price Сестричка Розумного цуценяти українською (FPP85)',
    фото: 'https://bi.ua/uploaded-images/products/size_400/482487_1.jpg',
    alt: 'іграшка',
    ціна: '1323 грн',
    опис: 'Сестричка Розумного цуценяти виготовлена з плюша й дуже приємна на дотик. Вона заспіває пісеньки, розповість віршики, які в ігровій формі навчать дитину лічбі, абетці й розкажуть про частини тіла',
  },

  {
    назва:
      'Інтерактивна іграшка Fisher-Price Сестричка Розумного цуценяти українською (FPP85)',
    фото: 'https://bi.ua/uploaded-images/products/size_400/557024_1.jpg',
    alt: 'іграшка',
    ціна: '2999 грн',
    опис: 'СГіппопофон сподобається дівчаткам та хлопчикам віком від 1-го року. Діти зможуть уявити себе справжніми музикантами, добре розважитися і вивчити нові мелодії! Діти будуть зменшувати чи збільшувати гучність або змінювати темп. Гра з гіппопофоном допоможе дітям розвинути креативність, пам’ять, музичний слу',
  },
];



document.querySelector('.js-container-test').style.background =
  'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(17,222,217,0.41824243630573243) 26%, rgba(91,0,255,1) 89%)';

const NameToys = document.getElementById('toys');

function createToys(TOYS) {
  const galleryToys = TOYS.map(
    ({ назва, фото, alt, ціна, опис }) =>
      `<li class="toy-item"><h2 class="js-subtitle-toys">${назва}</h2><img class="js-img-toys" src="${фото}" alt="${alt}"><span>${ціна}</span class="js-span-toys"><p class="js-text-toys">${опис}</p><button class="submit-btn" type="submit">Subscribe</button></li>`
  ).join('');
  NameToys.insertAdjacentHTML('beforeend', galleryToys);
}

createToys(TOYS);


const hotWheels = [
  {назва:
    'Комплект Hot Wheels Трек Охота на акулу BGK04 + Подарунковий набір автомобілів в асортименті 1806',
  фото: 'https://ua.hot-wheels.com.ua/system/0265/2992/________.jpg',
  alt: 'іграшка',
  ціна: '2 грн',
  опис: 'Б Трек "Охота на акулу" серії "Зміни колір" Hot Wheels - візьми участь в захоплюючих змаганнях між машинкою і акулою. Хто з них виявиться швидший? Також в комплекті набір з 5 базових машинок Hot Wheels. Набір представлений в асортименті. Це буде кращим подарунком для справжнього гонщика для поповнення колекції машинок і нескінченної гонки. Колекціонуй і запрошуй друзів до гри!',
  },
  {назва:
    'Комплект Hot Wheels Трек Охота на акулу BGK04 + Подарунковий набір автомобілів в асортименті 1806',
  фото: 'https://ua.hot-wheels.com.ua/system/0226/1381/_0003______1.jpg',
  alt: 'іграшка',
  ціна: '1 грн',
  опис: 'А Трек "Охота на акулу" серії "Зміни колір" Hot Wheels - візьми участь в захоплюючих змаганнях між машинкою і акулою. Хто з них виявиться швидший? Також в комплекті набір з 5 базових машинок Hot Wheels. Набір представлений в асортименті. Це буде кращим подарунком для справжнього гонщика для поповнення колекції машинок і нескінченної гонки. Колекціонуй і запрошуй друзів до гри!',
  },
  {назва:
    'Комплект Hot Wheels Трек Охота на акулу BGK04 + Подарунковий набір автомобілів в асортименті 1806',
  фото: 'https://ua.hot-wheels.com.ua/system/0279/7234/580592_1.jpg?1682408937',
  alt: 'іграшка',
  ціна: '2999 грн',
  опис: 'В рек "Охота на акулу" серії "Зміни колір" Hot Wheels - візьми участь в захоплюючих змаганнях між машинкою і акулою. Хто з них виявиться швидший? Також в комплекті набір з 5 базових машинок Hot Wheels. Набір представлений в асортименті. Це буде кращим подарунком для справжнього гонщика для поповнення колекції машинок і нескінченної гонки. Колекціонуй і запрошуй друзів до гри!',
  },
  ]


  const addHotWheels = document.getElementById('hotWheels');

  
  function createHotWheels(hotWheels) {
    const galleryHotWheels = hotWheels.map(
      ({ назва, фото, alt, ціна, опис }) =>
        `<li class="toy-item"><h2 class="js-subtitle-toys">${назва}</h2><img class="js-img-toys" src="${фото}" alt="${alt}" width="300px" height="300px"><span>${ціна}</span class="js-span-toys"><p class="js-text-toys">${опис}</p></li>`
    ).join('');
    addHotWheels.insertAdjacentHTML('beforeend', galleryHotWheels);
  }
  
  createHotWheels(hotWheels);
  
  //============================================

//   <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

let counterValue = 0;

const spanValue = document.querySelector('#value');
  const decrementBtn = document.querySelector('[data-action="decrement"]');
  const incrementBtn = document.querySelector('[data-action="increment"]');

 incrementBtn.style.marginTop="130px";
 incrementBtn.style.marginBottom="130px";



  
const changeDecrement = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
}

const changeIncrement = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
}

decrementBtn.addEventListener('click', changeDecrement);
incrementBtn.addEventListener('click', changeIncrement);


//============================================

const titleInputTest = document.querySelector('.titleInputTest')
const nameInput = document.getElementById('name-input');
const spanOutput = document.getElementById('name-output');

console.log(spanOutput);
console.dir(spanOutput);

const handler = (evt) => {
if (nameInput.value === "") {
  spanOutput.textContent = "Anonymous";
  spanOutput.style.color = "black"; 
} else {
  spanOutput.textContent = evt.currentTarget.value;
  spanOutput.style.color = "red";
  titleInputTest.style.color ="red";
  }
}

nameInput.addEventListener("input", handler)


// ======================================== 6

const abra = document.querySelector('#abra')

const secondAbra = abra.innerHTML;
console.log(secondAbra);

abra.innerHTML = `<span>!!!!${secondAbra}</span>`
abra.style.color ="red";
abra.textContent = "Whfkjdsxhfvkdjxfhgvc";
const abraThird = String(abra.slice(4));

//======================================== 