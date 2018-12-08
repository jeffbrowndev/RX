// Event slider on home page
const glideHome = new Glide('.glide-home', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  hoverpause: true,
  autoplay: 7000
})

glideHome.mount();