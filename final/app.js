// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  //starting here is modification 1 for random people (cartoon or friends)
  {
    id: 5,
    name: 'donald duck',
    job: 'comic relief',
    img: 'https://i.imgur.com/pwQHr8N.jpg',
    text: 'Quacking with style, Donald Duck dazzles in his iconic sailor suit, always up for adventures with a splash of humor! Terms and Conditions not limited to side effects, increase of heartrate and so much more!',
  },
  {
    id: 6,
    name: 'fake Locke Lamora',
    job: 'AI generated janitor',
    img: 'https://i.imgur.com/hur1Rdr.jpg',
    text: "Locke Lamora, a cunning con artist in Camorr's underworld, masterfully orchestrates heists. With wit, disguises, and loyalty to his crew, he challenges the city's elite with audacious schemes and charm.",
  },
  {
    id: 7,
    name: 'mooncake',
    job: 'very powerful shareholder',
    img: 'https://i.imgur.com/FFDrDpD.jpg',
    text: 'Not your average green blob! This little guy can destroy planets but mostly just wants hugs and cookies. Watch out, space cookies might just be his kryptonite!',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

const startBtn = document.querySelector('.start-btn');
const endBtn = document.querySelector('.end-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

//Modification 2 and 3

//show first person
startBtn.addEventListener('click', function () {
  currentItem = 0;
  showPerson(currentItem);
});


//show last person
endBtn.addEventListener('click', function () {
  currentItem = 6;
  showPerson(currentItem);
});

