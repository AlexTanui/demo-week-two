const url= "https://api.npoint.io/bb96faa041864e047fc5/characters/"

// const url= "http://localhost:3000/characters"
let info = document.getElementById("container")
// fetch from database form db.json

fetch(`${url}`).then((response) => response.json())
.then(json=>{json.map(data=>
   
    {console.log(data)
    info.append(flataCats(data))
    
    })})
    
// funtion to print animals on dom
 
function flataCats ({name,image, id, votes}) {
    let container =document.createElement("container")
   container.innerHTML =`
   <div id="cardaminal" class="card mt-2 d-flex p-2" style="width: 18rem;">
   <img src="${image}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${name}</h5>
     <div class="input-group input-group-sm mb-3">
       <input id="input1${id}" type="number" value="${votes}" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
     </div>
     <h6 class="card-text">${id}</h6>
    
     <button id=btn${id} onclick="likeBtn(${id})" type="button" class="btn btn-primary">Vote</button>
   </div>
 </div>  
              
        
    `;
    return container
}

// function for like and dislike button. i have used ID to ensure every animal input is selected 

function likeBtn (id) {
    let input1 =parseInt(document.getElementById(`input1${id}`).value)
    document.getElementById("votes").innerHTML = `your like vote is ${input1}`

    console.log(input1)
  
    
}
    




