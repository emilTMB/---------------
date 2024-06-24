function handleSlider() {
  let offset = 0;
  let offset__mobile = 0;
  let count = 0;
  const sliderLine = document.querySelector ('.slider__line');
  const containerSlider = document.querySelector ('.container__slider');
  const countSpan = document.querySelector ('.counter__current');
  const countSpanMobile = document.querySelector ('.counter__current__mobile');
  const wrapperLine = document.querySelector ('.wrapper__line');

  if (window.matchMedia('(min-width: 1366px)').matches) {
    count = 3;
    countSpan.innerHTML = `${count}`;

    containerSlider.style.width = 1222 + 'px';
    document.querySelector ('.btn__next').addEventListener('click', function () {
      offset = offset + 414;
      if (offset > 1242) {
        offset = 0;
        count = 3;
      } else {
        count = count + 1;
      }
      sliderLine.style.left = -offset + 'px';
      countSpan.innerHTML = `${count}`;
    });

    document.querySelector ('.btn__back').addEventListener('click', function () {
      offset = offset - 414;
      if (offset < 0) {
        offset = 1242;
        count = 6;
      } else {
        count = count - 1;
      }
      sliderLine.style.left = -offset + 'px';
      countSpan.innerHTML = `${count}`;
    });
  } else if (window.matchMedia('(min-width: 848px) and (max-width: 1365px)').matches) {

    count = 2;
    countSpan.innerHTML = `${count}`;

    containerSlider.style.width = 808 + 'px';
    document.querySelector ('.btn__next').addEventListener('click', function () {
      offset = offset + 414;
      if (offset > 1656) {
        offset = 0;
        count = 2;
      } else {
        count = count + 1;
      }
      sliderLine.style.left = -offset + 'px';
      countSpan.innerHTML = `${count}`;
    });

    document.querySelector ('.btn__back').addEventListener('click', function () {
      offset = offset - 414;
      if (offset < 0) {
        offset = 1656;
        count = 6;
      } else {
        count = count - 1;
      }
      sliderLine.style.left = -offset + 'px';
      countSpan.innerHTML = `${count}`;
    });
  } else if (window.matchMedia('(max-width: 848px)').matches) {
    count = 1;
    countSpan.innerHTML = `${count}`;
    containerSlider.style.width = 335 + 'px';

    document.querySelector ('.btn__next__transform').addEventListener('click', function () {
      offset__mobile = offset__mobile + 375;
      if (offset__mobile > 1500) {
        offset__mobile = 1500;
        count = 5;
      } else {
        count = count + 1;
      }
      wrapperLine.style.left = -offset__mobile + 'px';

      if (count == 1) {
        document.querySelector ('.btn__back__transform').classList.add('disabled');
      } else if (count > 1) {
        document.querySelector ('.btn__back__transform').classList.remove('disabled');
      }
      if (count == 1) {
        document.querySelector ('.pagination__li__one').classList.add('active');
      } else {
        document.querySelector ('.pagination__li__one').classList.remove('active');
      }
      if (count == 2) {
        document.querySelector ('.pagination__li__two').classList.add('active');
      } else {
        document.querySelector ('.pagination__li__two').classList.remove('active');
      }
      if (count == 3) {
        document.querySelector ('.pagination__li__three').classList.add('active');
      } else {
        document.querySelector ('.pagination__li__three').classList.remove('active');
      }
      if (count == 4) {
        document.querySelector ('.pagination__li__four').classList.add('active');
      } else {
        document.querySelector ('.pagination__li__four').classList.remove('active');
      }
      if (count == 5) {
        document.querySelector ('.pagination__li__five').classList.add('active');
      } else {
        document.querySelector ('.pagination__li__five').classList.remove('active');
      }
    });

    document.querySelector ('.btn__back__transform').addEventListener('click', function () {
      offset__mobile = offset__mobile - 375;
      if (offset__mobile < 0) {
        offset__mobile = 0;
        count = 1;
      } else {
        count = count - 1;
      }
      wrapperLine.style.left = -offset__mobile + 'px';
      console.log(count)
      if (count == 1) {
        document.querySelector ('.btn__back__transform').classList.add('disabled');
      } else if (count > 1) {
        document.querySelector ('.btn__back__transform').classList.remove('disabled');
      }
      if (count == 1) {
        document.querySelector ('.pagination__li__one').classList.add('active');
      } else {
        document.querySelector ('.pagination__li__one').classList.remove('active');
      }
      if (count == 2) {
        document.querySelector ('.pagination__li__two').classList.add('active');
      } else {
        document.querySelector ('.pagination__li__two').classList.remove('active');
      }
      if (count == 3) {
        document.querySelector ('.pagination__li__three').classList.add('active');
      } else {
        document.querySelector ('.pagination__li__three').classList.remove('active');
      }
      if (count == 4) {
        document.querySelector ('.pagination__li__four').classList.add('active');
      } else {
        document.querySelector ('.pagination__li__four').classList.remove('active');
      }
      if (count == 5) {
        document.querySelector ('.pagination__li__five').classList.add('active');
      } else {
        document.querySelector ('.pagination__li__five').classList.remove('active');
      }
    });
    if (count == 1)
      document.querySelector ('.btn__next__mobile').addEventListener('click', function () {
        offset = offset + 355;
        if (offset > 1675) {
          offset = 0;
          count = 1;
        } else {
          count = count + 1;
        }
        sliderLine.style.left = -offset + 'px';
        countSpanMobile.innerHTML = `${count}`;
      });

    document.querySelector ('.btn__back__mobile').addEventListener('click', function () {
      offset = offset - 355;
      if (offset < 0) {
        offset = 1775;
        count = 6;
      } else {
        count = count - 1;
      }
      sliderLine.style.left = -offset + 'px';
      countSpanMobile.innerHTML = `${count}`;
    });
  }
}

handleSlider();
window.addEventListener('resize', handleSlider);


// АНИМАЦИЯ
function animateHand() {
  const hand = document.querySelector ('.play__img__item.hand');
  const blackHorse = document.querySelector ('.play__img__item.black__horse');
  const horseEvrika = document.querySelector ('.play__img__item.horse__evrika');
  const evrika = document.querySelector ('.play__img__item.evrika');
  const player1 = document.querySelector ('.play__img__item.player1');
  const player2 = document.querySelector ('.play__img__item.player2');

  evrika.style.display = 'none';
  horseEvrika.style.display = 'none';
  player1.style.display = 'none';
  blackHorse.style.display = 'none';
  player2.style.display = 'block';

  hand.style.transform = '';
  blackHorse.style.transform = '';

  hand.style.transform = 'translateY(-10px) rotate(30deg)';

  setTimeout(() => {
    evrika.style.display = 'block';
    horseEvrika.style.display = 'block';
    player1.style.display = 'block';
    player2.style.display = 'none';
    blackHorse.style.display = 'block';
    hand.style.transform = '';
  }, 1000);

  setTimeout(animateHand, 2000);
}

animateHand();