const API_URL = 'https://jsonplaceholder.typicode.com/';

const HTMLResponse = document.querySelector("#app");

const ul = document.createElement("ul");


fetch(`${API_URL}users`)
  .then((response) => response.json())
  .then((users) => { 
     users.forEach((user) => {
         let elem = document.createElement("li");
         elem.appendChild(
             document.createTextNode(`${user.name} ${user.email}`)
         );
         ul.appendChild(elem);
         
     });


     HTMLResponse.appendChild(ul);
    })





















//const xhr = new XMLHttpRequest();

//function onRequestHandler() {
    //if(this.readyState == 4 && this.status == 200) {

       // const data = JSON.parse(this.response);
        //const HTMLResponse = document.querySelector("#app");
       
       // const tlp = data.map((user) => `<li>${user.name} ${user.email}</li>`);
       // HTMLResponse.innerHTML = `<ul>${tlp}</ul>`

    //}
//}

//xhr.addEventListener("load", onRequestHandler);
//xhr.open("GET", `${API_URL}users`);
//xhr.send();