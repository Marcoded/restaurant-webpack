const menuPage = () => {
    

    const dishName = (content) => {
        const h1 = document.createElement("h1")
        h1.textContent = content
        return h1
    }

    const dishPic = (link) => {
        const img = document.createElement("img")
        img.src = link
        img.classList.add("dish-img")
        return img

    }

    const dishDescription = (content) => {
        const p = document.createElement("p")
        p.textContent = content
        return p
    }

    const compileDish = (dishFullName,dishPicLink,dishDescriptionParameter) => {
        const dishCard = document.createElement("div")
        dishCard.classList.add("dish-card")
        const description = dishDescription(dishDescriptionParameter)
        const imgTag = dishPic(dishPicLink)
        const name = dishName(dishFullName)
        dishCard.append(name,imgTag,description)
        return dishCard
    }

    const compileDiv = () => {
        console.log("compiling menu div ")
        const container = document.createElement("div")
        container.classList.add("dish-container")
        const dishOne = compileDish("Pasta","https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?cs=srgb&dl=pexels-engin-akyurt-1437267.jpg&fm=jpg", "yummy pasta")
        const dishTwo = compileDish("Beef Stew","https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?cs=srgb&dl=pexels-senuscape-2313686.jpg", "traditional beef stew")
        const dishThree = compileDish("Burger","https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1639565.jpg","Angus beef Burger")
        container.append(dishOne,dishTwo,dishThree)
       
        return container
    }

    
  
    return {compileDiv};
  };

  export default menuPage;


