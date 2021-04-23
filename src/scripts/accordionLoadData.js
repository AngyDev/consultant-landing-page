import Accordion from './accordion';

const accordion = new Accordion();

const loadMoreBtn = document.getElementById("loadMoreBtn");
const loadLessBtn = document.getElementById("loadLessBtn");
const accLeft = document.getElementById("accordion-left");
const accRight = document.getElementById("accordion-right");

loadMoreBtn.addEventListener('click', () => {
    accordion.reset(accLeft, accRight);
    accordion.getData(2);

    loadLessBtn.style.display = "unset";
    loadMoreBtn.style.display = "none";
});

loadLessBtn.addEventListener('click', () => {
    accordion.reset(accLeft, accRight);
    accordion.getData(1);

    loadLessBtn.style.display = "none";
    loadMoreBtn.style.display = "unset";
});