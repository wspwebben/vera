import Glide, { Autoplay, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

export function initCryptocurrenciesSlider() {
    new Glide('.glide', {
        type: 'carousel',
        perView: 5,
        gap: 30,
        autoplay: 5000,
        animationTimingFunc: 'linear',
        breakpoints: {
            400: {
                perView: 3,
                gap: 20,
            },
            600: {
                perView: 4,
            },
        }
    }).mount({ Autoplay, Breakpoints })
}
