import Swiper from 'swiper-bundle.min.mjs'

const slider = ( {selectorSlider, selectorPagination, bulletClass, bulletActiveClass }) => {

  new Swiper(selectorSlider, {
    autoplay: true,
    loop: true,
    // effect: 'coverflow',
    pagination: {
      el: selectorPagination,
      type: 'bullet',
      bulletClass,
      bulletActiveClass,
      clickable: true,
    }
  });
};

export default slider;
