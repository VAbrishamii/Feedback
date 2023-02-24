const ratingEls = document.querySelectorAll('.rating');
const btnEl = document.getElementById('btn');
const containeEl = document.getElementById('container')

let selectingRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener('click',() => {
        removeActive();
        selectingRating = ratingEl.innerText || ratingEl.parentNode.innerText;
        ratingEl.classList.add('active');
        ratingEl.parentNode.classList.add('active');
    });
});

btnEl.addEventListener('click', () => {
    if(selectingRating !== ''){
        containeEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong> Feedback: ${selectingRating}</strong>
        <p>We will use your feedback to improve our customer support.</p>`;
    }
})
function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove('active');
    });
}