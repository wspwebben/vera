import Glide, { Autoplay, Swipe, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

export function initCryptocurrenciesSlider() {
    if (!document.querySelector('.glide')) {
        return
    }

    const biggerThanTablet = window.matchMedia('(min-width: 768px')

    if (biggerThanTablet.matches) {
        const root = document.querySelector('.cryptocurrencies')
        root.classList.add('cryptocurrencies--no-slider')

        return
    }

    new Glide('.glide', {
        type: 'carousel',
        perView: 5,
        gap: 30,
        autoplay: 3000,
        animationTimingFunc: 'linear',
        dragThreshold: 30,
        breakpoints: {
            440: {
                perView: 2,
                gap: 20,
            },
            600: {
                perView: 3,
            },
            768: {
                perView: 4,
            },
        }
    }).mount({ Autoplay, Breakpoints, Swipe })
}
