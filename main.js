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