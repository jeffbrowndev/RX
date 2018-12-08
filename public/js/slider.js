// Image gallery settings

const glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  gap: 0,
  breakpoints: {
    1600: {
      perView: 2
    },
    900: {
      perView: 1
    }
  }
})

glide.mount();

