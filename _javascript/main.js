document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!')

  bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 4
  })
})
