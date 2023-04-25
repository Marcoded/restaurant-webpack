const homePage = () => {
    

    const createTitle = (content) => {
        const h1 = document.createElement("h1")
        h1.textContent = content
        return h1
    }

    const createImg = (link) => {
        const img = document.createElement("img")
        img.src = link
        img.classList.add("hero-img")
        return img

    }

    const createParagraph = (content) => {
        const p = document.createElement("p")
        p.textContent = content
        return p
    }

    const compileDiv = () => {
        console.log("compiling home page")
        const container = document.createElement("div")
        container.appendChild(createTitle("The district - Party bar & grill"))
        container.appendChild(createImg("https://images.pexels.com/photos/2919579/pexels-photo-2919579.jpeg?cs=srgb&dl=pexels-chase-stine-2919579.jpg"))
        container.appendChild(createParagraph("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim explicabo velit laborum iure officia quos similique nesciunt ipsum impedit autem nam dolor, provident aut, soluta ut? Molestias dolor quae quia."))
        return container
    }
  
    return {compileDiv};
  };

  export default homePage;


