/* globals bulmaCarousel */
'use strict'

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!')
  bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true
  })
})
