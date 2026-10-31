const content = document.getElementById("content")

const API = "https://dummyjson.com/recipes"

function recipes(){
    fetch(API).then((res) => {
        return res.json()
    }).then((data)=>{
        console.log(data.recipes);

        content.innerHTML = data.recipes.map((item)=>{
            return `<div class="card">
            <img src="${item.image}" alt="${item.name}"/>
            <h3>${item.name}</h3>
            <p>${item.rating}</p>
            </div>`
        }).join("")

    })
}

recipes()