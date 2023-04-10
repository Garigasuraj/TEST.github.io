const side_nav = document.querySelectorAll("#side_nav_bar div")
const info = document.getElementById("info")
side_nav.forEach(ele => console.log(ele.innerText))

let product_data = [
    {"Electronics" : 14},
    {"Jewellery" : 5},
    {"MensWearing" : 1},
    {"WomensWearing" : 16},
]

init()
function init(){
    side_nav.forEach((ele,index) =>{
        ele.addEventListener("click",()=>{
            if(ele.innerHTML == Object.keys(product_data[index])){
                let data = Object.values(product_data[index])
                api_call(data[0])
            }
        })
    })
}

async function api_call(Data){
    const data = await fetch(`https://fakestoreapi.com/products/${Data}`)
    const string_response = await data.json()
    console.log(string_response)
    render_data(string_response)
}

let html = ""
function render_data(result){
    html = `<div id="info">
    <p>${result.category} Category</p>

    <div id="photo"><img src="${result.image}"></div>

    <div id="product_info">
        <div><b>Title:</b> ${result.title}</div>
        <div><b>Price:</b> $  ${result.price}</div>
        <div><b>Description:</b> ${result.description}</div>
        <div><b>Rating:</b> ${result.rating.rate}</div>
    </div>
    </div>`
    info.innerHTML= html
}
