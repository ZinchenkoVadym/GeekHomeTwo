    let dotsItem = document.getElementsByClassName('dots-item');
    let dots = document.getElementsByClassName('dots')[0];
    let images = document.getElementsByClassName('images');
    let buttonR = document.getElementById('button-right');
    let buttonL = document.getElementById('button-left');
    let slideIndex = 1;


    showSlide(slideIndex);

    function showSlide(n) {
        if (n < 1) {
            slideIndex = images.length;
        } else if (n > images.length) {
            slideIndex = 1;
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'none';
        }
        for (let i = 0; i < dotsItem.length; i++) {
            dotsItem[i].classList.remove('active');
        }
        images[slideIndex - 1].style.display = 'block';
        dotsItem[slideIndex - 1].classList.add('active');
    }

    function plusSlides(n) {
        showSlide(slideIndex += n);
    }

    function currentSlide(n) {
        showSlide(slideIndex = n)
    }

    buttonL.onclick = function () {
        plusSlides(-1);
    }
    buttonR.onclick = function () {
        plusSlides(1);
    }
    dots.onclick = function (e) {
        for (let i = 0; i < dotsItem.length + 1; i++) {
            if(e.target.classList.contains('dots-item') && e.target === dotsItem[i - 1]) {
                currentSlide(i)
            }
        }
    }

