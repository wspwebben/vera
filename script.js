import Glide from '@glidejs/glide'

new Glide('.glide', {
    type: 'carousel',
    perView: 7,
    gap: 20,
    autoplay: 5000,
    animationTimingFunc: 'linear'
}).mount()
