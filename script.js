const row = document.querySelector(".row")
const input = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const slSort = document.querySelector(".select-sort")
const  sort =document.querySelector(".sl-sort")

// axios(`https://restcountries.com/v3.1/all`)
// .then((res) => {
//     console.log(res)
//     res.data.map((el) => (
//         row.innerHTML += `<div class="col-4 my-4 border border-primary">
// <img src="${el.flags.svg}" alt="img" width="400px" height="300px">
// <h1>Name: ${el.name.common}</h1>
// <h3>Region:${el.region}</h3>
// <h4>Population:${el.population}</h4>
// <h4>Area:${el.area}km²</h4>
// <h5>Capital:${el.capital ? el.capital : "jok"}</h5>
//
// </div>`
//     ))
// })

let allData = null
function axiosApi(API){
    axios(`https://restcountries.com/v3.1/${API}`)
        .then((res) =>{
            console.log(res.data)
            allData = res.data
            getApi(res.data)
        })
}

axiosApi(`all`)

function getApi(data){
    window.scroll(0,0)
    row.innerHTML =""
    data.map((el) => (
        row.innerHTML += `<div class="col-4 my-5 border border-primary">
<img src="${el.flags.svg}" alt="img" width="400px" height="300px">
<h1> ${el.name.common}</h1>
<h3>Region:${el.region}</h3>
<h4>Population:${el.population}</h4>
<h4>Area:${el.area}km²</h4>
<h5>Capital:${el.capital ? el.capital : "jok"}</h5>

</div>`
    ))

}


searchBtn.addEventListener("click",()=>{
    axiosApi(`name/${input.value}`)
})


input.addEventListener("keydown",(ev) =>{
    if (ev.key ==="Enter"){
        axiosApi(`name/${input.value}`)
    }
})

input.addEventListener("input", (e)=>{
    axiosApi(`name/${e.target.value}`)
})

slSort.addEventListener("change", (e) =>{
    const value = e.target.value
    if( value === "population"){
        const  result = allData.sort((a,b) =>{
             return b.population - a.population
        })
        getApi(result)
    }else if(value === "area") {
        const  result = allData.sort((a,b) =>{
            return b.area - a.area
        })
        getApi(result)
    } else if(value ==="A-Z") {
        const  result = allData.sort((a,b) =>{
            return a.name.common.toLowerCase() > b.name.common.toLowerCase() ? 1 : -1
        })
        getApi(result)
    }else if(value ==="Z-A") {
        const  result = allData.sort((a,b) =>{
            return a.name.common.toLowerCase() < b.name.common.toLowerCase() ? 1 : -1
        })
        getApi(result)
    }
})
//region
sort.addEventListener("change",(e)=>{
    const value = e.target.value
 if(value ==="Asia") {
        let result = allData.filter((el) =>{
            return el.region === "Asia"
        })
        getApi(result)
    }
 else if (value === "Europe") {
     let result = allData.filter((el) =>{
         return el.region === "Europe"
     })
     getApi(result)
 }
 else if (value === "Oceania") {
     let result = allData.filter((el) =>{
         return el.region === "Oceania"
     })
     getApi(result)
 }
 else if (value === "Africa") {
     let result = allData.filter((el) =>{
         return el.region === "Africa"
     })
     getApi(result)
 }
 else if(value ==="Americas") {
     let result = allData.filter((el) =>{
         return el.region === "Americas"
     })
     getApi(result)
 }
})

