const darkToggleIcon = document.querySelector("#darkToggle")
const panel = document.querySelectorAll(".panel")

darkToggleIcon.addEventListener('click', e => {
    e.target.classList.toggle('fa-sun')
    document.body.classList.toggle('dark-mode')
})

const r = document.querySelector(":root")
const color = document.querySelectorAll(".colors li")

color.forEach(c => {
    c.addEventListener('click', () => {
        const element = window.getComputedStyle(c)
        let bg = element.getPropertyValue("background-color")
        r.style.setProperty('--accent', bg)

    })
})