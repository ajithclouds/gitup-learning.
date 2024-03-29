var res=fetch("https://jsonplaceholder.typicode.com/users ");
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
   <div class="col-md-3">
   <div class="card"  style="width: 18rem; color:black ">
   <div class="card-body">
      <p class="card-text">Name:${value[i].name}</p>
     <p class="card-text">Email:${value[i].email}</p>
     <p class="card-text">Street:${value[i].address.street}</p>
     <p class="card-text">City:${value[i].address.city}</p>
    
    
   </div>
 </div>
 
    `
}
document.body.append(container)

}