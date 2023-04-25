console.log('WebPack Connected')

import homePage from './homePage.js';
import menuPage from './menu.js'
import './style.css';
// <img src="https://images.pexels.com/photos/2919579/pexels-photo-2919579.jpeg?cs=srgb&dl=pexels-chase-stine-2919579.jpg" alt="An image of the restaurant">







const index = () => {
    const home = homePage()
    const menu = menuPage()
    const homeHtml = home.compileDiv()
    const menuHtml = menu.compileDiv()
    const pageContent = document.getElementById("content");

    const generateMenu = () => {
        console.log("generating menu")
        const container = document.createElement("div")
        container.classList.add("menu")
        const homeButton = document.createElement("button")
        homeButton.innerText = "Home"
        const menuButton = document.createElement("button")
        menuButton.innerText = "Menu"
        container.append(homeButton,menuButton)


        homeButton.onclick = function() {
            flush()
            appender(homeHtml)
        }

        menuButton.onclick = function() {
            console.log("click menu")
            flush()
            appender(menuHtml)
        }

        return container
        
    }

    const appender = (div) => {
        pageContent.appendChild(div)
    }

    const flush = () => {
        console.log("flushing page")
        while (pageContent.firstChild) {
            pageContent.removeChild(pageContent.firstChild);
        }
        appender(generateMenu())
    }

    const run = () => {
        
        appender(generateMenu())
        appender(homeHtml)
    }

    return {run}
}

const app = index();
app.run();