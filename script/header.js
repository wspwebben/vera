export function initHeaderMenu() {
    const header = document.querySelector('.js-header')
    const navigation = header.querySelector('.js-header__navigation')
    const button = header.querySelector('.js-header__menu-trigger')

    function toggleMenu() {
        const wasOpen = navigation.ariaExpanded === 'true'
        
        if (wasOpen) {
            closeMenu()
        } else {
            openMenu()
        }
    }

    function closeMenuOnItemClick(event) {
        if (event.target.tagName === 'A') {
            closeMenu()
        }
    }

    function openMenu() {
        document.documentElement.classList.add('page--no-scroll')
        navigation.ariaExpanded = 'true'

        button.ariaExpanded = 'true'
        button.ariaLabel = 'Close menu'
    }

    function closeMenu() {
        document.documentElement.classList.remove('page--no-scroll')
        navigation.ariaExpanded = 'false'
            
        button.ariaExpanded = 'false'
        button.ariaLabel = 'Open menu'
    }

    button.addEventListener('click', toggleMenu)
    navigation.addEventListener('click', closeMenuOnItemClick)
    button.removeAttribute('hidden')
}
