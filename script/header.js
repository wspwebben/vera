export function initHeaderMenu() {
    const header = document.querySelector('.js-header')
    const navigation = header.querySelector('.js-header__navigation')
    const button = header.querySelector('.js-header__menu-trigger')

    function toggleMenu() {
        const wasOpen = navigation.ariaExpanded === 'true'
        
        if (wasOpen) {
            navigation.ariaExpanded = 'false'
            
            button.ariaExpanded = 'false'
            button.ariaLabel = 'Open menu'
        } else {
            navigation.ariaExpanded = 'true'

            button.ariaExpanded = 'true'
            button.ariaLabel = 'Close menu'
        }
    }

    button.addEventListener('click', toggleMenu)
    button.removeAttribute('hidden')
}
