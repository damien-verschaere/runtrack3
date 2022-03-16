document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {

        var footer = document.querySelector('footer')
        let round =Math.round (100 * window.scrollY / 4096)

        footer.setAttribute('style','--couleur:#FF'+round+round)
    })
})