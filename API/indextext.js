var res=fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json()).then((value)=>bar(value))
var container=document.createElement("div")
container.className="container"
var row=document.createElement("div");
row.className="row"
container.append(row);

function bar(value){
    console.log(value);
    for(var i=0;i<value.length;i++){
    row.innerHTML+=`
   <div class="col-md-4">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header text-white bg-dark">${value[i].name.common}</div>
    <div class="card-body">
    <img src=${value[i].flags.png} class="card-img-top"  alt="...">
      <p class="card-text">Capital:${value[i].capital}</p>
      <p class="card-text">Region:${value[i].region}</p>
      <p class="card-text">Latlong:${value[i].latlng}</p>
 </div>
 </div>
 </div>

    `
}
document.body.append(container)
}