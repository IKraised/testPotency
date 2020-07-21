$(document).ready(function(){
    $('.slider__item').slick();
});

+function() {
    let time = 3600;
    const countDownEl = document.getElementById('countDown');

    setInterval(updateCountDown, 1000);

    function updateCountDown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        countDownEl.innerHTML = `${minutes}min : ${seconds}sec`;
        time --; 
    }

    const anchors = document.querySelectorAll('.header__btn_link');

    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const blockID = anchor.getAttribute('href');
        
        document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
    }

    const btnForm = document.querySelector('.form__btn');

    btnForm.addEventListener('click', function() {
        alert('thank you for ordering');
    });
}();``