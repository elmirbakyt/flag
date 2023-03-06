const row = document.querySelector(".row")
fetch(`https://jsonplaceholder.typicode.com/users`,{
}) .then((data)=> data.json())
    .then((res)=>{
        console.log(res)
        res.map((el)=>(
            row.innerHTML +=`<div class=" border border-warning w-50 ">
<h1 style="color: #35866b">Name:${el.name}</h1>
<a href="${el.phone}" class="link-primary text-decoration-none ">tel:${el.phone}</a>
<h2
</div>`
        ))
    })