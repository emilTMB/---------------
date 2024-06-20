function handleSlider() {
    let offset = 0;
    let count = 0;
    const sliderLine = document.querySelector('.slider__line');
    const containerSlider = document.querySelector('.container__slider');
    const countSpan = document.querySelector('.counter__current');
  
    if (window.matchMedia('(min-width: 1366px)').matches) {
    count = 3;
      countSpan.innerHTML = `${count}`;
      // код для разрешения экрана 1366px
      containerSlider.style.width = 1222 + 'px';
      document.querySelector('.btn__next').addEventListener('click', function() {
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
  
      document.querySelector('.btn__back').addEventListener('click', function() {
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
    } else if (window.matchMedia('(min-width: 375px) and (max-width: 1365px)').matches) {
      count = 2;
      countSpan.innerHTML = `${count}`;
      // код для разрешения экрана меньше 1366px
      containerSlider.style.width = 808 + 'px';
      document.querySelector('.btn__next').addEventListener('click', function() {
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
  
      document.querySelector('.btn__back').addEventListener('click', function() {
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
    } else if (window.matchMedia('(max-width: 375px)').matches) {
        //ДОШЛИФОВАТЬ ЭТОТ РАЗМЕР 
      count = 1;
      countSpan.innerHTML = `${count}`;
      // код для разрешения экрана 375px
      containerSlider.style.width = 335 + 'px';
      document.querySelector('.btn__next').addEventListener('click', function() {
        offset = offset + 414;
        if (offset > 2500) {
          offset = -28;
          count = 1;
        } else {
            count = count + 1;
        }
        sliderLine.style.left = -offset + 'px';
        countSpan.innerHTML = `${count}`;
      });
  
      document.querySelector('.btn__back').addEventListener('click', function() {
        offset = offset - 414;
        if (offset < 0) {
          offset = 2500;
          count = 6;
        } else {
          count = count - 1;
        }
        sliderLine.style.left = -offset + 'px';
        countSpan.innerHTML = `${count}`;
      });
    }
  }
  
  // вызов функции при загрузке страницы
  handleSlider();
  
  // вызов функции при изменении размера экрана
  window.addEventListener('resize', handleSlider);

  
  // АНИМАЦИЯ
  function animateHand() {
    const hand = document.querySelector('.play__img__item.hand');
    const blackHorse = document.querySelector('.play__img__item.black__horse');
    const horseEvrika = document.querySelector('.play__img__item.horse__evrika');
    const evrika = document.querySelector('.play__img__item.evrika');
    const player1 = document.querySelector('.play__img__item.player1');
    const player2 = document.querySelector('.play__img__item.player2');
    
    evrika.style.display = 'none';
    horseEvrika.style.display = 'none';
    player1.style.display = 'none';
    blackHorse.style.display = 'none';
    player2.style.display = 'block';

    hand.style.transform = '';
    blackHorse.style.transform = '';
  
    hand.style.transform = 'translateY(-10px) rotate(30deg)';
    // blackHorse.style.transform = 'translateY(-10px) rotate(-30deg)';
  
    setTimeout(() => {
      evrika.style.display = 'block';
      horseEvrika.style.display = 'block';
      player1.style.display = 'block';
      player2.style.display = 'none';
      blackHorse.style.display = 'block';
      hand.style.transform = '';
      // blackHorse.style.transform = '';
    }, 1000);
  
    setTimeout(animateHand, 2000);
  }
  
  animateHand();