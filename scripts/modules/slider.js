import Swiper from './swiper-bundle.min.js'

const slider = ( {selectorSlider, selectorPagination: el, bulletClass, bulletActiveClass }) => {

  new Swiper(selectorSlider, {
    autoplay: true,
    loop: true,
    effect: 'coverflow',
    pagination: {
      el,
      type: 'bullet',
      bulletClass,
      bulletActiveClass,
      clickable: true,
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          })
      }
    }
  });
};


export default slider;
