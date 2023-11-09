import body from "../templates/body.hbs"
import items from "../templates/items.hbs"
import data from "../js/menu.json"

const LSKey = 'theme'
const defaultTheme = 'LIGHT'
const Themes = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

function render(){
    document.querySelector("body").outerHTML = body({
        theme: Themes[theme], 
        checked: checked
    })
    document.querySelector(".js-menu").insertAdjacentHTML("beforeend", items({items: data}))
}

document.addEventListener('change', function(e){
    if (e.target.id = 'theme-switch-toggle'){
        checked = e?.target?.checked
        if (checked){
            theme = 'LIGHT'
        } else {
            theme = 'DARK'
        }
        console.log(theme, checked)
        saveTheme(theme)
        render()
    }
})

function saveTheme(theme){
    return localStorage.setItem(LSKey, theme)
}

function loadTheme(){
    return localStorage.getItem(LSKey) || defaultTheme
}

let theme = loadTheme()
let checked = theme == 'LIGHT' ? true : false 
render()