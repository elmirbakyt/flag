const breed = document.querySelector(".breeds")
const breedImg = document.querySelector(".breed-img")
const slSort = document.querySelector(".select-sort")
const  input = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
function fetchBtn() {
    axios(`https://dog.ceo/api/breeds/list/all`)
        .then((res) => {
console.log(Object.keys(res.data.message))
            Object.keys(res.data.message).map((el)=>{
                breed.innerHTML += `<button class="breed-btn btn btn-warning m-1">${el}</button>`
            })
            Object.keys(res.data.message).map((el)=>{
                slSort.innerHTML += `<option value="${el}" >${el}</option>`
            })
        })
        .then(()=> getBtn())
}

fetchBtn()

function getBtn(){
    const buttons = document.querySelectorAll(".breed-btn")
    buttons.forEach(btn =>{
        btn.addEventListener("click",()=>{
            fetchImg(btn.innerHTML)
        })
    })
}

function fetchImg(name){
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
        .then((result)=>{
            breedImg.innerHTML = `<img src="${result.data.message}" width="400" height="300" alt="img">`
        })
}

slSort.addEventListener('change',(e)=>{
 fetchImg(e.target.value)
})

searchBtn.addEventListener("click",()=>{
fetchImg(input.value.trim())
})

input.addEventListener("keydown",(ev)=>{
    if(ev.key === "Enter"){
        fetchImg(input.value.trim())
    }
})

input.addEventListener("input",(e)=>{
    fetchImg(e.target.value.trim())
})




