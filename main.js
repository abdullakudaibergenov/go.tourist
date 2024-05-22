document.addEventListener('DOMContentLoaded', () => {
    const firstAnime = document.getElementById('title__one');
    firstAnime.classList.remove('hidden');
    firstAnime.style.transform = 'translateY(0)';
    const secondAnime = document.getElementById('title__two');
    secondAnime.classList.remove('hidden');
    secondAnime.style.transform = 'translateY(0)';

    const thirdAnime = document.getElementById('img__one');
    thirdAnime.classList.remove('hidden');
    thirdAnime.style.transform = 'scale(1)';
    const fourthAnime = document.getElementById('img__two');
    fourthAnime.classList.remove('hidden');
    fourthAnime.style.transform = 'scale(1)';
    const fiveAnime = document.getElementById('img__three');
    fiveAnime.classList.remove('hidden');
    fiveAnime.style.transform = 'scale(1)';

    const sixAnime = document.getElementById('three__title');
    sixAnime.classList.remove('hidden');
});


window.addEventListener('scroll', () => {
    const sevenAnime = document.getElementById('network');
    const eightAnime = document.getElementById('network__title');
    const firstPicture = document.getElementById('network__imagesTwo');
    const secondPicture = document.getElementById('network__imagesThree');

    const places = document.getElementById('places');
    const placesOne = document.getElementById('place__one');
    const placesTwo = document.getElementById('place__two');
    const placesThree = document.getElementById('place__three');
    const placesFour = document.getElementById('place__four');

    const beauty = document.getElementById('beauty');
    const beautyFirst = document.getElementById('beauty__first');
    const beautySectionSecond = document.getElementById('beautySection__second');
    const beautySectionThree = document.getElementById('beautySection__three');
    const beautySectionFour = document.getElementById('beautySection__four');
    const beautySectionFive = document.getElementById('beautySection__five');
   

    const travel = document.getElementById('travel');
    const travelTitle = document.getElementById('travel__title');

    const questions = document.getElementById('questions');
    const questionTitle= document.getElementById('question__title');

    const accordeon1 = document.getElementById('accordion-1');
    const accordeon2= document.getElementById('accordion-2');
    const accordeon3 = document.getElementById('accordion-3');
    const accordeon4= document.getElementById('accordion-4');
    const accordeon5 = document.getElementById('accordion-5');

    
    const scrollPosition = window.scrollY + window.innerHeight;
  
    if (scrollPosition > sevenAnime.offsetTop) {
        eightAnime.classList.remove('hidden');
        eightAnime.style.transform = 'scale(1)';
        firstPicture.classList.remove('hidden');
        firstPicture.style.transform = 'scale(1)';
        secondPicture.classList.remove('hidden');
        secondPicture.style.transform = 'scale(1)';
    } else {
        eightAnime.classList.add('hidden');
        eightAnime.style.transform = 'scale(0.1)';
    }

    
    if (scrollPosition > places.offsetTop) {
      placesOne.classList.remove('hidden');
      placesOne.style.transform = 'translateY(0)';
      placesTwo.classList.remove('hidden');
      placesTwo.style.transform = 'translateY(0)';
      placesThree.classList.remove('hidden');
      placesThree.style.transform = 'translateY(0)';
      placesFour.classList.remove('hidden');
      placesFour.style.transform = 'translateY(0)';
  } 

  if (scrollPosition > beauty.offsetTop) {
    beautyFirst.classList.remove('hidden');
    beautyFirst.style.transform = 'scale(1)';
    beautySectionSecond.classList.remove('hidden');
    beautySectionSecond.style.transform = 'translateY(0)';
    beautySectionThree.classList.remove('hidden');
    beautySectionThree.style.transform = 'translateY(0)';
    beautySectionFour.classList.remove('hidden');
    beautySectionFour.style.transform = 'translateY(0)';
    beautySectionFive.classList.remove('hidden');
    beautySectionFive.style.transform = 'translateY(0)';
} 

if (scrollPosition > travel.offsetTop) {
    travelTitle.classList.remove('hidden');
    travelTitle.style.transform = 'scale(1)';

} 

if (scrollPosition > questions.offsetTop) {
    questionTitle.classList.remove('hidden');
    questionTitle.style.transform = 'scale(1)';
    accordeon1.classList.remove('hidden');
    accordeon2.classList.remove('hidden');
    accordeon3.classList.remove('hidden');
    accordeon4.classList.remove('hidden');
    accordeon5.classList.remove('hidden');
    accordeon1.style.transform = 'translateY(0)';
    accordeon2.style.transform = 'translateY(0)';
    accordeon3.style.transform = 'translateY(0)';
    accordeon4.style.transform = 'translateY(0)';
    accordeon5.style.transform = 'translateY(0)';
} 
});



// SLIDESHOW

const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imageIndex);

// accordeon

const titles = document.querySelectorAll('.accordion__title');
const contents = document.querySelectorAll('.accordion__content');

titles.forEach(item => item.addEventListener('click', () => {
  const activeContent = document.querySelector('#' + item.dataset.tab);
  if (activeContent.classList.contains('active')) {
    activeContent.classList.remove('active');
    item.classList.remove('active');
    activeContent.style.maxHeight = 0;
  } else {
    contents.forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
    });

    titles.forEach(element => element.classList.remove('active'));

    item.classList.add('active');
    activeContent.classList.add('active');
    activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
  }
}))



  

