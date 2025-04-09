import lottie from 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.0/lottie.min.js'

lottie.loadAnimation({
  container: document.getElementById('animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/src/animation.json'
})
